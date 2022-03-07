import "./Convert.css";
import {useState, useEffect, useRef} from "react";
import {querySizeByName} from "../utils/size/Size";
import QueryResultListItem from "./QueryResultListItem";

export default function Convert() {
    const [keyword, setKeyword] = useState("");
    const [kind, setKind] = useState("");
    const [queryResult, setQueryResult] = useState([])
    const [recommendCursor, setRecommendCursor] = useState(0)
    let listRefs = []
    const ref = useRef()
    const inputRef = useRef();
    const _ = require('lodash');

    const keywordChange = (e) => {
        setKeyword(e.target.value);
        listRefs.splice(0, listRefs.length);
        setRecommendCursor(-1);
        setKind("");
    }

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
            if (recommendCursor !== -1) {
                let find = listRefs[recommendCursor].current.innerText.split("\n")
                setKeyword(find[0]);
                setKind(find[1]);
            }
        }
    }

    useEffect(() => {
        setQueryResult(querySizeByName(keyword));
    }, [keyword])


    return (<div className={"Convert"}>
        <div className={"InputContainer"}>
            <div className={"InputBox"}>
                <span style={{borderBottom: "orange 3px solid"}}>Search</span>
                <input type={"text"} value={keyword} ref={inputRef} onChange={keywordChange}
                       onKeyDown={onKeyDown} onFocus={() => {
                    setRecommendCursor(-1)
                }}/>

                <ol className={"ResultList"}>
                    {queryResult.map((result, idx) => {
                            listRefs.push(_.cloneDeep(ref));
                            return (<li key={idx} ref={listRefs[idx]}
                                        className={idx === recommendCursor ? "selectedItem" : "notSelectedItem"}
                                        onMouseOver={(e) => {
                                        }}
                            >
                                <QueryResultListItem result={result}/>
                            </li>)
                        }
                    )}
                </ol>

            </div>

            <div className={"InputBox"}>
                <span style={{borderBottom: "cornflowerblue 3px solid"}}>From</span>
                <input disabled value={kind}/>
            </div>

            <div className={"InputBox"}><span style={{borderBottom: "green 3px solid"}}>To</span>
                <input/>
            </div>

        </div>
    </div>)
}