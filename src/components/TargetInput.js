import "./TargetInput.css";
import {queryKindByName} from "../utils/Size"
import React, {useState} from "react";
import QueryResultListItem from "./QueryResultListItem";

import Find from "../components/find(Jeonhui)";

// <input type="text" id="name" name="nam시" required
// onChange={(event) => {
//     let typedValue = event.target.value
//     let queryResult = queryKindByName(typedValue)
//     console.log(JSON.stringify(queryResult))
//     setQueryResult(queryResult)
// }}
// />

function TargetInput() {
    const [queryResult, setQueryResult] = useState([])
    const [searchText, setSearchText] = useState("")
    const onChangeInput = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div id={"centerLayout"}>
            <input type="text" id="name" value={searchText} onChange={onChangeInput} required minLength="4" maxLength="8" size="10"/>
            {/*<li id={"queryList"}>*/}
            {/*    {queryResult.map((result, idx) => <ol key={idx}><QueryResultListItem result={result}/></ol>)}*/}
            {/*</li>*/}
            <Find inputData={searchText}>aaaa</Find>
        </div>
    )
}

export default TargetInput