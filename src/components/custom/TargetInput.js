import React, {useEffect, useState, useRef} from 'react';
import {querySizeByName} from "../../utils/size/Size";
import QueryResultListItem from "../QueryResultListItem";
import "./TargetInput.css";

export default function TargetInput() {
    const [keyword, setKeyword] = useState("")
    const [queryResult, setQueryResult] = useState([])
    let listRefs = []
    const ref = useRef()

    const onKeyDown = (e) => {
        console.log(e.code);
        if (e.code==="ArrowDown"){

        }
        else if (e.code==="ArrowUp"){

        }
        else if(e.code==="Enter"){
            console.log(listRefs[0].current);
        }
    }

    useEffect(() => {
        setQueryResult(querySizeByName(keyword));
    }, [keyword])


    return <div className={"formLayout"}>
        <input className={"field"} type={"text"} value={keyword} onChange={(e) => {
            setKeyword(e.target.value)
            listRefs.splice(0, listRefs.length);
        }} onKeyDown={onKeyDown}/>
        <ol id={"queryList"}>
            {queryResult.map((result, idx) => {
                    listRefs.push(ref);
                    return (<li key={idx} ref={listRefs[idx]}>
                        <QueryResultListItem result={result}/>
                    </li>)
                }
            )}
        </ol>
    </div>
}