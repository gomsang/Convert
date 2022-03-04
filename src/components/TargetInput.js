import "./TargetInput.css";
import {querySizeByName} from "../utils/size/Size"
import React, {useState} from "react";
import QueryResultListItem from "./QueryResultListItem";


function TargetInput() {
    const [queryResult, setQueryResult] = useState([])
    const [searchText, setSearchText] = useState("")

    const onChangeInput = (e) => {
        setSearchText(e.target.value)
        setQueryResult(querySizeByName(e.target.value))
    }

    return (
        <div id={"centerLayout"}>
            <input type="text" id="name" value={searchText} onChange={onChangeInput} required minLength="4"
                   maxLength="8" size="10"/>
            <ol id={"queryList"}>
                {queryResult.map((result, idx) => <li key={idx}>
                    <button id={"search" + idx}><QueryResultListItem result={result}/></button>
                </li>)}
            </ol>
        </div>
    )
}

export default TargetInput