import { createContext, useState } from "react";

export const UiContext = createContext({
    isLoading : false,
    setLoading : (value) => {}
});


const UiProvider = (props) => {
    const [isLoading,setLoading] = useState(false);

    return (
        <UiContext.Provider value={{
            isLoading : isLoading,
            setLoading : setLoading
        }}>
            {props.children}
        </UiContext.Provider>
    )
}


export default UiProvider;