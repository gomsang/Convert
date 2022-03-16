import {useEffect, useState} from "react";
import {querySizeByName} from "../../utils/size/Size"
import "./SearchList.css"

export default function SearchList({keyword, setKeyword, cursor, setCursor}) {
    const [queryListResult, setQueryListResult] = useState([])
    // 결과를 저장할 state

    useEffect(() => {
        setQueryListResult(querySizeByName(keyword))
    }, [keyword])
    // keyword가 바뀌면 리스트 재생성

    return (<ol className={"ResultList"}>
        {
            queryListResult.map((key, idx) => {
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
