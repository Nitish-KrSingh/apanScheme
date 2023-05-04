import { Fragment, useContext, useEffect, useReducer, useState } from "react";
import classes from "./Schemes.module.css";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import FilterResultCard from "../FilterResultCard/FilterResultCard";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import { useLocation } from "react-router-dom";
import { getSchemeByIdentifier } from "../../api/scheme-api";
import { UiContext } from "../../context/ui-context";
import Footer from "../Footer/Footer";

const INITIAL_VALUE = {
  items: [],
  page: {
    totalPages: 0,
    total: 0,
    pageNumber: 1,
    from : 0,
    size : 0
  },
  filter: [],
  query: [],
  lang: "en",
  from: 0,
  size: 10,
  keyword: "",
  sort: "",
  sortedOptions: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS_AND_PAGE":
      
      return {
        ...state,
        items: [...action.payload.items],
        page: action.payload.page,
        filter: [...action.payload.filter],
        sortedOptions : [...action.payload.sortOptions]
      };
    case "SET_QUERY":
      console.log(action.payload);
      const q =  [...action.payload.query,...state.query];
      return {
        ...state,
        query: q,
      };

      case "REMOVE_QUERY":
        const q1 =  state.query.filter((q)=>q.identifier!==action.payload.identifier||q.value!==action.payload.value);
        //console.log(q1);
        return {
          ...state,
          query: q1,
        };

      case "SET_FILTER_CHECKBOX":
        let filter = state.filter;
        filter.forEach((f) => {
          if (f.display === "ListFacet") {
            f.entries.forEach((q) => {
              if (q.label === action.payload.label) {
                q.checked = action.payload.checked;
              }
            });
          }
        });
        return {
          ...state,
          filter: filter,
        };
       case "RESET_QUERY":{
          return {
            ...state,
            query: state.query.filter((q)=>q.identifier===action.payload.includeFilter),
            sort : "",
            lang : "en",
          };
       }
       case "SET_PAGE":{
        return {
          ...state,
          from: (action.payload.page) * state.size,
        }
      }
      case "SET_SORT":
        return {
          ...state,
          sort: action.payload.sort,
        };
      case "SET_LANG":
        return {
          ...state,
          lang: action.payload.lang,
        };
      case "SET_KEYWORD":
        return {
          ...state,
          keyword: action.payload.keyword,
        };
        default:
      return state;
  }
};

const Schemes = () => {
  const location = useLocation();
  const uiContext = useContext(UiContext);
  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);
  const [excludeFilter, setExcludeFilter] = useState("");
  useEffect(() => {
    basedOnLocation(location);
    
  }, []);
  
  useEffect(()=>{
    
    if(state.query.length>0){
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    
      const query = {
        lang: state.lang,
        from: state.from,
        size: state.size,
        keyword: state.keyword,
        sort: state.sort,
        q : state.query
      };
      uiContext.setLoading(true);
      getSchemeByIdentifier(query)
      .then((res) => {
     
       var filter =[]; 
        res.data.data.facets.forEach((f) => {
          if(f.entries.length > 1 && f.identifier !== excludeFilter){
         
         
          if (f.display === "ListFacet") {
            query.q.forEach((q) => {
              if (q.identifier === f.identifier) {
                f.entries.forEach((e) => {
                  if (q.value === e.label) {
                    e.checked = true;
                  }
                });
              }
            });
          } else if (f.display === "ComboBoxFacet") {
              
              query.q.forEach((q) => {
                
                if (q.identifier === f.identifier) {
                  f.entries.forEach((e) => {
                    if (q.value === e.label) {
                      e.selected = e;
                    }
                  });
                }
              });
          } else {
            console.log("Error");
          }
          filter.push(f);
        }
        });
        console.log(res.data.data.hits.page,);
        dispatch({
          type: "SET_ITEMS_AND_PAGE",
          payload: {
            items: res.data.data.hits.items,
            page: res.data.data.hits.page,
            filter: filter,
            sortOptions : res.data.data.summary.sortOptions
          },
        });
        
        uiContext.setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        uiContext.setLoading(false);
      });
    }
    
    console.log(state.query);
    
  },[
    state.query,
    state.from,
    state.sort,
    state.lang,
    state.keyword
  ]);

  const basedOnLocation = (location) => {
    const query = {
      lang: "en",
      from: 0,
      size: 10,
      keyword: "",
      sort: "",
    };

    
    if (location.pathname.startsWith("/category/", 15)) {
      const q = [
        {
          identifier: "schemeCategory",
          value: decodeURIComponent(location.pathname).split("/")[4],
        },
      ];
      setExcludeFilter('schemeCategory');
      query.q = q;
    } else if (location.pathname.startsWith("/state/", 15)) {
      const q = [
        { identifier: "level", value: "State" },
        { identifier: "beneficiaryState", value: "All" },
        {
          identifier: "beneficiaryState",
          value: decodeURIComponent(location.pathname).split("/")[4],
        },
      ];
      setExcludeFilter('beneficiaryState');
      query.q = q;
    } else if (location.pathname.startsWith("/ministry/", 15)) {
      const q = [
        {
          identifier: "nodalMinistryName",
          value: decodeURIComponent(location.pathname).split("/")[4],
        },
      ];
      query.q = q;
      setExcludeFilter('nodalMinistryName');
    } else if (location.pathname.startsWith("/user-journey",15)) {
        console.log(location);
        query.q = location.state.q;
    }
   
    dispatch({ type: "SET_QUERY", payload: { query: query.q } });
    
  };
  // /login/user-journey
  // /user-journey
  // /category/______name
  // /category/state/
  // /category/ministiry/

 
  const checkBoxHandler = (event,identifier) => {
    
    if(event.target.checked){
        dispatch({ 
        type: "SET_QUERY", 
        payload: { query: [{identifier:identifier, value:decodeURIComponent(event.target.value) }] } });

      }else{
        console.log(identifier);
        dispatch({ type: "REMOVE_QUERY", payload: { identifier: identifier , value : event.target.value} });
      }
  };

  const dropdownHandler = (event, identifier) => {
    console.log(event.target.value, identifier);
    if(event.target.value==='select'){
      dispatch({ type: "REMOVE_QUERY", payload: { identifier: identifier } });
    }else{
      dispatch({ 
        type: "SET_QUERY", 
        payload: { query: [{identifier:identifier, min : event.target.value , max : event.target.value }] } });
    }
  };


  const filterForm = (
    <Fragment>
      {state.filter.map((f) => {
        if (f.display === "ListFacet") {
          return (
            <Fragment key={f.identifier}>
              <h5 className={classes.filterTitle}>{f.label}</h5>
              {f.entries.map((e) => {
                return (
                  <FilterCheckBox
                    identifier={f.identifier}
                    onChange={checkBoxHandler}
                    checked={e.checked}
                    key={e.label}
                    title={e.label}
                    count={e.count}
                  />
                );
              })}
            </Fragment>
          );
        } else if (f.display === "ComboBoxFacet") {
         
          return (
           
            <Fragment key={f.identifier}>
              <h5 className={classes.filterTitle}>{f.label}</h5>
              <FilterDropdown
                identifier={f.identifier}
                onChange={dropdownHandler}
                options={f.entries}
                selected={f.selected}
              />
            </Fragment>
          );
        } else {
          return null;
        }
      })}
    </Fragment>
  );
 
  const changePage = (page) => {
    dispatch({ type: "SET_PAGE", payload: { page: page } });
  };
     const resetFilterHandler = () =>{
      dispatch({ type: "RESET_QUERY" , payload : {includeFilter : excludeFilter} });
     }
  const sortOnChangeHandler = (event) => {
    
    dispatch({ type: "SET_SORT", payload: { sort: event.target.value } });
  };
  
  const searchOnChangeHandler = (event) => {
    dispatch({ type: "SET_KEYWORD", payload: { keyword: event.target.value } });
  }
  const languageOnChangeHandler = (event) => {
    dispatch({ type: "SET_LANG", payload: { lang: event.target.value } });
  };
  return (
    <Fragment>
      {/* <div className={classes.schemeHeader}>
        <h1 className={classes.schemeTitle}>Schemes</h1>
      </div> */}
      <div className={`row ${classes.schemes} p-2`}>
        <div className={`col-lg-3 card p-3`}>
          <div className={`${classes.filterContainer}`}>
            <div className={classes.filterHeader}>
              <h5>Filter By</h5>
              <button onClick={resetFilterHandler} className="btn btn-primary">Reset Filter</button>
            </div>
            <hr />
            {filterForm}
            {/* FILTER FORM */}
          </div>
        </div>

        <div className={`col-lg-9`}>
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder="Search Schemes"
              aria-label="Search Schemes"
              aria-describedby="button-addon2"
              onChange={searchOnChangeHandler}
            />
            <button
              className="btn btn-success"
              type="button"
              id="button-addon2"
            >
              
              Search
            </button>
          </div>
          <div className="d-flex justify-content-between">
          <p className="mt-3">
            We found {state.page.total} schemes based on your preferences
          </p>
        
          
           
          <div className="d-flex">
        
          <select className="form-select" onChange={sortOnChangeHandler} aria-label="Default select example">
            
            {state.sortedOptions.map((option)=><option key={option.id} value={option.id}>{option.label}</option>) }
           </select>
          
          <select className="form-select" defaultValue="en" onChange={languageOnChangeHandler} aria-label="Default select example">
           <option value="en">Englist</option> 
           <option value="hi">Hindi</option>
           </select>
          </div>
          </div>
          
          {state.items.map((it) => (
            <FilterResultCard key={it.id} id={it.id} fields={it.fields} />
          ))}

{state.totalPages !== 0 && <nav aria-label="Page navigation example" className="my-5">
  <ul className="pagination justify-content-center">
    <li className={`page-item ${state.page.pageNumber === 0 ? 'disabled' : ''}`}>
      <button onClick={()=>changePage(state.page.pageNumber - 1 )} disabled={state.page.pageNumber === 0} className={`page-link ${state.page.pageNumber === 0 ? 'disabled' : ''}`} >Previous</button>
    </li>
    {state.page.pageNumber !== 0 && <li className="page-item"><button onClick={()=>changePage(state.page.pageNumber )}  className="page-link" >{state.page.pageNumber}</button></li>}
    <li className="page-item"><button className="page-link active" href="#">{state.page.pageNumber+1}</button></li>
    {state.page.pageNumber !== state.page.totalPages-1  &&  <li className="page-item"><button onClick={()=>changePage(state.page.pageNumber + 1 )}  className="page-link" href="#">{state.page.pageNumber + 2}</button></li>}
    <li className={`page-item ${state.page.pageNumber === (state.page.totalPages-1) ? 'disabled' : ''}`}>
      <button className="page-link" onClick={()=>changePage(state.page.pageNumber + 1 )}  disabled={state.page.pageNumber === (state.page.totalPages-1)} >Next</button>
    </li>
  </ul>
</nav>}
        </div>

  
      </div>
      <Footer />
    </Fragment>
  );
};

export default Schemes;
