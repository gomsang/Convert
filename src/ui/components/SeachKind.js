import "./styles/SearchKind.css";
import {useState} from "react";
import getFlag from "../../utils/size/Flag";
import SearchKindList from "./SearchKindList";

export default function SearchKind({state, setState, value, setFinal}) {
    const [kind, setKind] = useState("")
    const [cursorKind, setCursorKind] = useState(0) //커서
    const [queryKindResult, setQueryKindResult] = useState([]) //데이터 리스트

    const keyDown = (e) => {
        if (queryKindResult.length !== 0) {
            if (e.code === "ArrowUp") {
                choose((cursorKind - 1) < 0 ? queryKindResult.length - 1 : cursorKind - 1)
            } else if (e.code === "ArrowDown") {
                choose((cursorKind + 1) < queryKindResult.length ? cursorKind + 1 : 0)
            } else if (e.code === "Enter") {
                pick()
            }
        }
    }

    const change = (e) => {
        setKind(e.target.value)
        setState(0)
    }

    const choose = (idx) => {
        setState(2)
        setCursorKind(idx)
        setKind(queryKindResult[idx].name)
    }

    const pick = () => {
        setState(3)
        setKind(queryKindResult[cursorKind].name)
        setFinal(queryKindResult[cursorKind])
    }

    return <div className={"InputContainer"}>
        <input className={"Input"} value={kind} onChange={change} onKeyDown={keyDown}
               style={state < 3 ? {color: "dimgray"} : {color: "black"}}/>
        {state < 3 ? <SearchKindList value={value} queryKind={queryKindResult} setQueryKind={setQueryKindResult}
                                     cursor={cursorKind} choose={choose} pick={pick}/> :
            <div className={"Kind"}><span className={"Down"} onClick={() => {
                setState(2)
            }}>▼</span></div>}
    </div>
}
