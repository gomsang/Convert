import {useEffect} from "react";
import queryNameByList from "../../utils/size/List";

export default function SearchKindList({value, cursor, queryKind, setQueryKind, choose, pick}) {



    return (<ol className={"ResultList"}>
            {/*{queryListReuslt.map((key, idx) => {*/}
            {/*        return (*/}
            {/*            <li key={idx}*/}
            {/*                className={cursor === idx ? "selectedItem" : "notSelectedItem"}*/}
            {/*                onMouseOver={() => {*/}
            {/*                    choose(idx)*/}
            {/*                }} onClick={pick}>*/}
            {/*                <span>{key.Country}</span></li>)*/}
            {/*    }*/}
            {/*)}*/}
        </ol>
    )
}
