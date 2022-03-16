import SearchList from "./SearchList";
import "./Search.css";
import {useState} from "react";

export default function Search() {
    const [keyword, setKeyword] = useState("")
    const [cursor, setCursor] = useState(0)
    const [queryResult, setQueryResult] = useState([])
    const [trigger, setTrigger] = useState(true)

    const keyDown = (e) => {
        if (queryResult.length !== 0) {
            if (e.code === "ArrowUp") {
                choose((cursor - 1) < 0 ? queryResult.length - 1 : cursor - 1)
            } else if (e.code === "ArrowDown") {
                choose((cursor + 1) < queryResult.length ? cursor + 1 : 0)
            } else if (e.code === "Enter") {

            }
        }
    }

    const change = (e) => {
        setKeyword(e.target.value)
        setTrigger(true)
    }

    const choose = (idx) => {
        setTrigger(false)
        setCursor(idx)
        setKeyword(queryResult[idx].name)
    }

    const pick = () => {

    }

    return <div className={"InputContainer"}>
        <input className={"Input"} placeholder={"값 입력"} value={keyword} onChange={change} onKeyDown={keyDown}/>
        <SearchList keyword={keyword} setKeyword={setKeyword} cursor={cursor} setCursor={setCursor}
                    queryResult={queryResult} setQueryResult={setQueryResult} trigger={trigger}/>
    </div>
}