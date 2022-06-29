import { createContext, useState } from "react";


const BoxContext = createContext()

export function BoxProvider ({children}){
    const [waldo, setWaldo] = useState([
        {name: "green", check: false, full: "C.C.", img: "cc.png"},
        {name: "white", check: false, full: "Brian Griffin", img: "brian.png"},
        {name: "blue", check: false, full: "Tom Cat", img: "tom.png"},
    ]);

    const [result, setResult] = useState(false)

    const [totalTime, setTotalTime] = useState(0)

    

    const [buttonClass, setButtonClass] = 
    useState("flex bg-blue-500  rounded px-5 p-1 text-xl hover:animate-pulse")
    

    return (
        <BoxContext.Provider value={{waldo, setWaldo, result,
            setResult, totalTime, setTotalTime,
            buttonClass, setButtonClass}}>{children}</BoxContext.Provider>
    )
}

export default BoxContext;



