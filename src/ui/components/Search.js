import SearchList from "./SearchList";
import "./Search.css";
import {useState} from "react";
import queryNameByList from "../../utils/size/List";

export default function Search() {
    const [keyword, setKeyword] = useState("")
    const [cursor, setCursor] = useState(0)
    const [values, setValues] = useState("")

    const keyDown = (e) => {
        if (values.length !== 0) {
            if (e.code === "ArrowUp") {
                choose((cursor - 1) < 0 ? values.length - 1 : cursor - 1)
            } else if (e.code === "ArrowDown") {
                choose((cursor + 1) < values.length ? cursor + 1 : 0)
            } else if (e.code === "Enter") {
            }
        }
    }

    const choose = (idx) => {
        setCursor(idx)
        setKeyword(values[idx])
    }

    const pick = () => {

    }

    return <div className={"InputContainer"}>
        <input className={"Input"} placeholder={"값 입력"} value={keyword} onChange={(e) => {
            setKeyword(e.target.value)
        }}/>
        <SearchList keyword={keyword} setKeyword={setKeyword} cursor={cursor} setCursor={setCursor()}/>
    </div>
}