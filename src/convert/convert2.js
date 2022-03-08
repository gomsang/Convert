import "./Convert2.css";
import {useState, useEffect, useRef} from "react";
import {querySizeByName} from "../utils/size/Size";
import QueryResultListItem from "./QueryResultListItem";

export default function Convert() {
    const [keyword, setKeyword] = useState(""); // 키워드 저장
    const [queryResult, setQueryResult] = useState([]) //query 결과 저장
    const [recommendCursor, setRecommendCursor] = useState(0) // 선택된 인덱스 저장
    const [state, setState] = useState(true); //결과 선택 state
    const [kind, setKind] = useState("");
    let listRefs = [] //query list 주소 저장하는 배열
    const ref = useRef() // 주소 불러오기 위한 변수
    const inputRef = useRef(); //input 주소
    const _ = require('lodash'); // deep clone을 위한 설정

    const keywordChange = (e) => {
        setKeyword(e.target.value); // keyword값 변경되면 저장
        listRefs.splice(0, listRefs.length); // query 결과 주소 초기화
        setRecommendCursor(-1); //선택된 인덱스 초기화
        setState(true); //결과 선택할 수 있도록 설정
    }

    const onKeyDown = (e) => {
        if (e.code === "ArrowDown") {
            if (listRefs.length !== 0 && (listRefs.length - 1) > recommendCursor) {
                setRecommendCursor(recommendCursor + 1);
                // 방향키 아래 누르면 다음 선택
            }
        } else if (e.code === "ArrowUp") {
            if (listRefs.length !== 0 && 0 < recommendCursor) {
                setRecommendCursor(recommendCursor - 1);
                // 방향키 위 누르면 이전 선택
            } else if (recommendCursor === 0) {
                setRecommendCursor(-1);
                inputRef.current.focus();
                // 0번째 인덱스에서 위에 누르면 다시 input으로 돌아감
            }
        } else if (e.code === "Enter") {
            if (recommendCursor !== -1) {
                let find = listRefs[recommendCursor].current.innerText.split("\n")
                setKeyword(find[0]);
                setKind(find[1]);
                setState(false);
                // 엔터 누르면 선택됨으로 설정
            }
        }
    }

    useEffect(() => {
        setQueryResult(querySizeByName(keyword));
        // query 결과 찾기
    }, [keyword])


    return (<div className={"Convert"}>
        <div className={"Container"}>
            <div className={"InputContainer"}>
                <div className={"Title"}>Convert</div>
                <div className={"InputBox"}>
                    <span style={{borderBottom: "orange 3px solid"}}>From</span>

                    <input type={"text"} value={keyword} ref={inputRef} onChange={keywordChange}
                           onKeyDown={onKeyDown} onFocus={() => {
                        setRecommendCursor(-1);
                    }}
                           style={state ? {color: "dimgray"} : {color: "black"}}
                    />
                    <div className={"Kind"}>{state?"":kind}</div>

                    <ol className={"ResultList"}>
                        {state ? queryResult.map((result, idx) => {
                                listRefs.push(_.cloneDeep(ref));
                                return (<li key={idx} ref={listRefs[idx]}
                                            className={idx === recommendCursor ? "selectedItem" : "notSelectedItem"}
                                            onMouseOver={(e) => {
                                                setRecommendCursor(idx);
                                            }}
                                            onClick={() => {
                                                let find = listRefs[recommendCursor].current.innerText.split("\n")
                                                setKeyword(find[0]);
                                                setKind(find[1]);
                                                setState(false);
                                            }}
                                >
                                    <QueryResultListItem result={result}/>
                                </li>)
                            }
                        ) : ""}
                    </ol>
                </div>
                <div className={"InputBox"}>
                    <span style={{borderBottom: "green 3px solid"}}>To</span>
                    <input/>
                </div>
            </div>
        </div>
        <div className={"ResultContainer"}></div>
    </div>)
}