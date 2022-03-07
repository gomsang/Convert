import React, {useEffect, useState, useRef} from 'react';
import {querySizeByName} from "../utils/size/Size";
import QueryResultListItem from "./QueryResultListItem";
import "./TargetInput.css";

export default function TargetInput() {
    const [keyword, setKeyword] = useState("")
    const [queryResult, setQueryResult] = useState([])
    const [recommendCursor, setRecommendCursor] = useState(0)
    let listRefs = []
    const ref = useRef()
    const inputRef = useRef();
    const _ = require('lodash');

    const onKeyDown = (e) => {
        if (e.code === "ArrowDown") {
            if (listRefs.length !== 0 && (listRefs.length - 1) > recommendCursor) {
                setRecommendCursor(recommendCursor + 1);
            }
        } else if (e.code === "ArrowUp") {
            if (listRefs.length !== 0 && 0 < recommendCursor) {
                setRecommendCursor(recommendCursor - 1);
            } else if (recommendCursor === 0) {
                setRecommendCursor(-1);
                inputRef.current.focus();
            }
        } else if (e.code === "Enter") {
            console.log(recommendCursor);
            console.log(listRefs[recommendCursor].current);
            console.log(listRefs);
        }
    }

    useEffect(() => {
        setQueryResult(querySizeByName(keyword));
        console.log(typeof (ref))
    }, [keyword])


    return <div className={"formLayout"}>
        <input className={"field"} type={"text"} value={keyword} ref={inputRef}
               onChange={(e) => {
                   setKeyword(e.target.value);
                   listRefs.splice(0, listRefs.length);
                   setRecommendCursor(-1);
               }} onKeyDown={onKeyDown} onFocus={()=>{setRecommendCursor(-1)}}/>

        <ol id={"queryList"}>
            {queryResult.map((result, idx) => {
                    listRefs.push(_.cloneDeep(ref));
                    return (<li key={idx} ref={listRefs[idx]}
                                className={idx === recommendCursor ? "selectedItem" : "notSelectedItem"}>
                        <QueryResultListItem result={result}/>
                    </li>)
                }
            )}
        </ol>
    </div>
}