import {useEffect, useState} from "react";
import {querySizeByName} from "../../utils/size/Size"
import "./SearchList.css"

export default function SearchList({keyword, cursor, queryResult, setQueryResult, trigger}) {
    useEffect(() => {
        if (trigger)
            setQueryResult(querySizeByName(keyword))
    }, [keyword, trigger])
    // keyword가 바뀌면 리스트 재생성

    return (<ol className={"ResultList"}>
        {
            queryResult.map((key, idx) => {
                    return (
                        <li key={idx}
                            className={cursor === idx ? "selectedItem" : "notSelectedItem"}
                        >
                            <span>{key.region}</span></li>)
                }
            )
        }
    </ol>)
}
