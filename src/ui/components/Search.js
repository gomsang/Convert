import SearchList from "./SearchList";
import "./Search.css";
import {useState} from "react";

export default function Search({state, setState,setValue}) {
    const [keyword, setKeyword] = useState("")
    const [cursor, setCursor] = useState(0)
    const [queryResult, setQueryResult] = useState([])

    const keyDown = (e) => {
        if (queryResult.length !== 0) {
            if (e.code === "ArrowUp") {
                choose((cursor - 1) < 0 ? queryResult.length - 1 : cursor - 1)
            } else if (e.code === "ArrowDown") {
                choose((cursor + 1) < queryResult.length ? cursor + 1 : 0)
            } else if (e.code === "Enter") {
                pick()
            }
        }
    }

    const change = (e) => {
        setKeyword(e.target.value)
        setState(0)
    }

    const choose = (idx) => {
        setState(1)
        setCursor(idx)
        setKeyword(queryResult[idx].name)
    }

    const pick = () => {
        setState(2)
        setValue(queryResult[cursor])
    }

    return <div className={"InputContainer"}>
        <input className={"Input"} placeholder={"값 입력"} value={keyword} onChange={change} onKeyDown={keyDown} style={state<2?{color:"dimgray"}:{color:"black"}}/>
        {state < 2 ? <SearchList keyword={keyword} setKeyword={setKeyword} cursor={cursor} setCursor={setCursor}
                                 queryResult={queryResult} setQueryResult={setQueryResult} state={state}
                                 choose={choose} pick={pick}/> : ""}

    </div>
}