import {useEffect, useState} from "react";
import {querySizeByName} from "../../utils/size/Size"
import "./styles/SearchList.css"

export default function SearchList({keyword, cursor, queryResult, setQueryResult, state, choose, pick}) {
    useEffect(() => {
        if (state === 0)
            setQueryResult(querySizeByName(keyword))
    }, [keyword, state])
    // keyword가 바뀌면 리스트 재생성

    return (<ol className={"ResultList"}>
        {
            queryResult.map((key, idx) => {
                    return (
                        <li key={idx}
                            className={cursor === idx ? "selectedItem" : "notSelectedItem"}
                            onMouseOver={() => {choose(idx)}}
                            onClick={pick}
                        >
                            <span>{key.region}</span></li>)
                }
            )
        }
    </ol>)
}
