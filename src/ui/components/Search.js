import SearchList from "./SearchList";
import "./styles/Search.css";
import {useState} from "react";

export default function Search({state, setState, setValue}) {
    const [keyword, setKeyword] = useState("") //키워드
    const [cursor, setCursor] = useState(0) //커서
    const [queryResult, setQueryResult] = useState([]) //데이터 리스트

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
        <input className={"Input"} placeholder={"값 입력"} value={keyword} onChange={change} onKeyDown={keyDown}
               style={state < 2 ? {color: "dimgray"} : {color: "black"}}/>
        {state < 2 ? <SearchList keyword={keyword} cursor={cursor}
                                 queryResult={queryResult} setQueryResult={setQueryResult} state={state}
                                 choose={choose} pick={pick}/> : ""}

    </div>
}