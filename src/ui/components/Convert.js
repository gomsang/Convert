import Search from "./Search";
import "./styles/Convert.css";
import {useEffect, useState} from "react";
import SearchKind from "./SeachKind";

export default function Convert() {
    const [state, setState] = useState(0)
    // 0 - 선택 가능 1 - 선택 중  2 - 선택 완료
    const [value, setValue] = useState({})
    // 입력된 값을 저장하는 value

    useEffect(()=>{console.log(value)},[value])

    return (<div className={"Main"}>
        <h1 className={"title"}>CONVERT</h1>
        <div className={"Container"}>
            <Search state={state} setState={setState} setValue={setValue}/>
            {state >= 2 ?
                <div className={"Arrow"}>≈</div>
                : ""}
            {state >= 2 ?
                <SearchKind value={value} state={state} setState={setState}/>
                : ""}
        </div>
    </div>)
}