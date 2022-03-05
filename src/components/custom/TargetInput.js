import "./ConvertPage.css"
import React, {useEffect, useState} from 'react';
import {querySizeByName} from "../../utils/size/Size";
import QueryResultListItem from "../QueryResultListItem";

export default function TargetInput() {
    const [recommendCursor, setRecommendCursor] = useState(0)

    const [keyword, setKeyword] = useState("")

    const [queryResult, setQueryResult] = useState([])

    useEffect(() => {
        setQueryResult(querySizeByName(keyword))
        setRecommendCursor(0)
    }, [keyword])

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    const handleKey = (event) => {
        if (event.key === "ArrowUp") {
            setRecommendCursor(recommendCursor > 0 ? recommendCursor - 1 : 0)
        } else if (event.key === "ArrowDown") {
            setRecommendCursor(recommendCursor + 1)
        } else if (event.key === "Enter"){
            event.preventDefault()
        }
    }

    return <div className={"formLayout"}>
        <div>
            <form><input className={"field"} type={"text"} value={keyword} onKeyDown={handleKey}
                         onChange={handleChange}/></form>
            <ol id={"queryList"}>
                {queryResult.map((result, idx) => <li key={idx}
                                                      className={idx === (recommendCursor - 1) ? "selectedItem" : "notSelectedItem"}>
                    <QueryResultListItem result={result}/>
                </li>)}
            </ol>
        </div>
    </div>
}