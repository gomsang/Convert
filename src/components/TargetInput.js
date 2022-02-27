import "./TargetInput.css";
import {queryKindByName} from "../utils/Size"
import React, {useState} from "react";
import QueryResultListItem from "./QueryResultListItem";

function TargetInput() {
    const [queryResult, setQueryResult] = useState([])

    window.addEventListener("resize", (e) => {
        console.log(window.innerWidth)
    })

    return (
        <div id={"centerLayout"}>
            <input type="text" id="name" name="name" required
                   onChange={(event) => {
                       let typedValue = event.target.value
                       let queryResult = queryKindByName(typedValue)
                       console.log(JSON.stringify(queryResult))
                       setQueryResult(queryResult)
                   }}
                   minLength="4" maxLength="8" size="10"/>

            <li id={"queryList"}>
                {queryResult.map((result, idx) => <ol key={idx}><QueryResultListItem result={result}/></ol>)}
            </li>
        </div>
    )
}

export default TargetInput