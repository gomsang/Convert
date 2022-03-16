import "./ConvertPage.css";
import {useState, useEffect, useRef} from "react";
import queryNameByList from "../../utils/size/List";
import getFlag from "../../utils/size/Flag";
import "./ConvertPage.css";
import {querySizeByName} from "../../utils/size/Size";
import Table from "./Table";

export default function ConvertPage() {
    const [state, setState] = useState(0)
    // 0 - 선택 가능 1 - 선택 중  2 - 선택 완료

    const listRef = useRef()

    const [queryResult, setQueryResult] = useState([])
    //query 결과 저장


    let values = [] // 값들을 저장하는 배열 (ex. 260)
    let kinds = [] // 종류를 저장하는 배열

    const [keyword, setKeyword] = useState("")
    const [kind, setKind] = useState("")
    const [recommendCursor, setRecommendCursor] = useState(0) // 선택된 인덱스 저장

    const keywordChange = (e) => {
        setKeyword(e.target.value)
        setState(0)
        values = []
        kinds = []
        setRecommendCursor(-1)
    }
    //keyword 변환시 값들 초기화

    useEffect(() => {
        if (state === 0) {
            setQueryResult(querySizeByName(keyword));
        }
    }, [keyword, state])
    // keyword와 state 될 때마다 query를 불러옴

    const keyDown = (e) => {
        if (values.length !== 0) {
            if (e.code === "ArrowUp") {
                choose((recommendCursor - 1) < 0 ? values.length - 1 : recommendCursor - 1)
            } else if (e.code === "ArrowDown") {
                choose((recommendCursor + 1) < values.length ? recommendCursor + 1 : 0)
            } else if (e.code === "Enter") {
                pick()
            }
        }
    }
    //input keyDown event

    const choose = (idx) => {
        setRecommendCursor(idx)
        setKeyword(values[idx])
        setState(1)
    }

    const pick = () => {
        setKind(kinds[recommendCursor])
        let res = queryNameByList(values[recommendCursor], kinds[recommendCursor])
        setRank(res[1])
        setQueryListResult(res[0])
        setState(2)
        setRecommendCursor(-1)
        setStateList(0)
    }

    const [rank, setRank] = useState(-1)

    const [listResult, setListResult] = useState("")
    const [recommendCursorList, setRecommendCursorList] = useState(0)
    const [stateList, setStateList] = useState(0)
    const [kindList, setKindList] = useState("")
    const [queryListReuslt, setQueryListResult] = useState([])
    //선택한 값의 나라 리스트 저장하는 배열

    const keyDownList = (e) => {
        if (queryListReuslt.length !== 0) {
            if (e.code === "ArrowUp") {
                chooseList((recommendCursorList - 1) < 0 ? queryListReuslt.length - 1 : recommendCursorList - 1)
                setStateList(0)
            } else if (e.code === "ArrowDown") {
                chooseList((recommendCursorList + 1) < queryListReuslt.length ? recommendCursorList + 1 : 0)
                setStateList(0)
            } else if (e.code === "Enter") {
                pickList()
            }
        }
    }

    const chooseList = (idx) => {
        setRecommendCursorList(idx)
        setListResult(queryListReuslt[idx].Value)
    }

    const pickList = () => {
        setKindList(queryListReuslt[recommendCursorList].Country)
        setStateList(2)
    }


    return (<div className={"Convert"}>
        <div className={"Container"}>
            <div className={"InputContainer"}>
                <input className={"Input"} placeholder={"값 입력"}
                       value={keyword} style={state < 2 ? {color: "dimgray"} : {color: "black"}}
                       onChange={keywordChange} onKeyDown={keyDown}
                />
                {state > 0 ? <img className={"Flag"} src={getFlag(queryResult[recommendCursor], kind, 0)}
                                  style={state < 2 ? {opacity: "0.5"} : {opacity: "1"}} alt={""}
                /> : ""}

                {state === 2 ? <div className={"Kind"}>{kind}</div> : ""}
                <ol className={"ResultList"}>
                    {state < 2 ? queryResult.map((result, idx) => {
                            values.push(result.name);
                            kinds.push(result.kind + " | " + result.region)
                            return (<li key={idx} className={idx === recommendCursor ? "selectedItem" : "notSelectedItem"}
                                        onMouseOver={() => {
                                            choose(idx)
                                        }}
                                        onClick={pick}
                            ><span>{result.kind + " | " + result.region}</span>
                            </li>)
                        }
                    ) : ""}
                </ol>

            </div>
            {state === 2 ? <div className={"Arrow"}>≈</div> : ""}
            {state === 2 ?
                <div className={"InputContainer"}>
                    <input className={"Input"} value={listResult} onKeyDown={keyDownList} onChange={() => {
                    }}
                           style={stateList < 2 ? {color: "dimgray"} : {color: "black"}}/>

                    {<img className={"Flag"} src={getFlag(queryListReuslt[recommendCursorList].Country, "a | In", 1)}
                          style={stateList < 2 ? {opacity: "0.5"} : {opacity: "1"}} alt={""}
                    />}

                    {stateList === 2 ? <div className={"Kind"}><span className={"Down"} onClick={() => {
                        setStateList(0)
                    }}>▼</span>{kindList}</div> : ""}

                    {stateList < 2 ? <ol className={"ResultList"}>
                        {queryListReuslt.map((key, idx) => {
                                return (
                                    <li key={idx}
                                        className={idx === recommendCursorList ? "selectedItem" : "notSelectedItem"}
                                        onMouseOver={() => {
                                            chooseList(idx)
                                        }}
                                        onClick={pickList}>
                                        <span>{key.Country}</span></li>)
                            }
                        )}
                    </ol> : ""}
                </div> : ""
            }
        </div>
        {stateList === 2 ? <Table rank={rank} kind={kind} kindList={kindList}/> : ""}
    </div>)
}