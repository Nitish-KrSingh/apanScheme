import { Fragment, useContext, useEffect, useReducer } from "react";
import classes from "./Schemes.module.css";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import FilterResultCard from "../FilterResultCard/FilterResultCard";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import { useLocation } from "react-router-dom";
import { getSchemeByIdentifier } from "../../api/scheme-api";
import { UiContext } from "../../context/ui-context";

const INITIAL_VALUE = {
  items: [],
  page: {
    totalPage: 0,
    total: 0,
    pageNumber: 0,
    from: 0,
  },
  filter: [],
  query: [],
  lang: "en",
  from: 0,
  size: 10,
  keyword: "",
  sort: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS_AND_PAGE":
      
      return {
        ...state,
        items: [...action.payload.items],
        page: action.payload.page,
        filter: [...action.payload.filter],
      };
    case "SET_QUERY":
      const q =  [...action.payload.query,...state.query];
      return {
        ...state,
        query: q,
      };

      case "REMOVE_QUERY":
        const q1 =  state.query.filter((q)=>q.identifier!==action.payload.identifier);
        console.log(q1);
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
    default:
      return state;
  }
};

const Schemes = () => {
  const location = useLocation();
  const uiContext = useContext(UiContext);
  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);
  useEffect(() => {
    basedOnLocation(location);
  }, []);

  
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
      query.q = q;
    } else if (location.pathname.startsWith("/ministry/", 15)) {
      const q = [
        {
          identifier: "nodalMinistryName",
          value: decodeURIComponent(location.pathname).split("/")[4],
        },
      ];
      query.q = q;
    }
    dispatch({ type: "SET_QUERY", payload: { query: query.q } });
    uiContext.setLoading(true);
    getSchemeByIdentifier(query)
      .then((res) => {
        res.data.data.facets.forEach((f) => {
         
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
        });

        dispatch({
          type: "SET_ITEMS_AND_PAGE",
          payload: {
            items: res.data.data.hits.items,
            page: res.data.data.hits.page,
            filter: res.data.data.facets,
          },
        });

       

       
        uiContext.setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        uiContext.setLoading(false);
      });
  };
  // /login/user-journey
  // /user-journey
  // /category/______name
  // /category/state/
  // /category/ministiry/

  
  const checkBoxHandler = (event,identifier) => {
    
    if(!event.target.checked){
      dispatch({ type: "REMOVE_QUERY", payload: { identifier: identifier } });
      dispatch({ type: "SET_FILTER_CHECKBOX", payload: { label: event.target.value, checked: event.target.checked } });
      return;
    }
      dispatch({ type: "SET_QUERY", payload: { query: [{identifier:identifier, value:decodeURIComponent(event.target.value) }] } });
      let q = state.query;
      
    
    const i = q.findIndex((f)=>f.identifier === identifier);
    if(i ===  -1){
      q = [{identifier:identifier, value:decodeURIComponent(event.target.value) },...q]
    }else{
      q[i].value = decodeURIComponent(event.target.value);
    }
    const query = {
      lang: state.lang,
      from: state.from,
      size: state.size,
      keyword: state.keyword,
      sort: state.sort,
      q : q
    };
    uiContext.setLoading(true);
    getSchemeByIdentifier(query).then((res) => {
      res.data.data.facets.forEach((f) => {
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
        }
      });
      dispatch({
        type: "SET_ITEMS_AND_PAGE",
        payload: {
          items: res.data.data.hits.items,
          page: res.data.data.hits.page,
          filter: res.data.data.facets,
        },
      });
      uiContext.setLoading(false);
    }).catch(err=>{
      console.log(err);
      uiContext.setLoading(false);
    }
    );

  };
  const dropdownHandler = (event, identifier) => {
    console.log(event.target.value, identifier);
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
          console.log("SE",f.selected);
          return (
           
            <Fragment key={f.identifier}>
              <h5 className={classes.filterTitle}>{f.label}</h5>{" "}
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
              <button className="btn btn-primary">Reset Filter</button>
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
            />
            <button
              className="btn btn-success"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
          <p className="mt-3">
            We found {state.page.total} schemes based on your preferences
          </p>
          {state.items.map((it) => (
            <FilterResultCard key={it.id} fields={it.fields} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Schemes;
