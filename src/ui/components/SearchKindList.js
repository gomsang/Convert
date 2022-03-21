import {useEffect} from "react";
import queryNameByList from "../../utils/size/List";

export default function SearchKindList({value, cursor, queryKind, setQueryKind, choose, pick}) {
    useEffect(() => {
        setQueryKind(queryNameByList(value))
    }, [value])


    return (<ol className={"ResultList"}>
            {queryKind.map((key, idx) => {
                    return (
                        <li key={idx}
                            className={cursor === idx ? "selectedItem" : "notSelectedItem"}
                            onMouseOver={() => {
                                choose(idx)
                            }} onClick={pick}>
                            <span>{key.kind} | {key.region}</span></li>)
                }
            )}
        </ol>
    )
}
