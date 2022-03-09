import "./ConvertPage.css";
import {useState, useEffect} from "react";
import {querySizeByName} from "../../utils/size/Size";
import {value} from "lodash/seq";

export default function ConvertPage() {
    const [state, setState] = useState(0)
    // 0 - 선택 가능 1 - 선택 중  2 - 선택 완료

    const [queryResult, setQueryResult] = useState([])
    //query 결과 저장

    let values = []
    let kinds = []

    const [keyword, setKeyword] = useState("")
    const [kind, setKind] = useState("")
    const [recommendCursor, setRecommendCursor] = useState(0) // 선택된 인덱스 저장
    const keywordChange = (e) => {
        setKeyword(e.target.value)
        setState(0)
        values = []
        kinds = []
    }
    useEffect(() => {
        if (state === 0) {
            setQueryResult(querySizeByName(keyword));
        }
    }, [keyword, state])

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

    const choose = (idx) => {
        setRecommendCursor(idx)
        setKeyword(values[idx])
        setState(1)
    }
    const pick = () => {
        setKind(kinds[recommendCursor])
        setState(2)
        setRecommendCursor(-1)
    }

    return (<div className={"Convert"}>
        <div className={"Container"}>
            <div className={"InputContainer"}>

                <input className={"Input"} placeholder={"값 입력"}
                       value={keyword} style={state < 2 ? {color: "dimgray"} : {color: "black"}}
                       onChange={keywordChange} onKeyDown={keyDown}
                />
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
            {state ===2?<div className={"Arrow"}>=></div>:""}
            {state === 2 ?
                <div className={"InputContainer"}>
                    <input className={"Input"} value={"kind"} disabled/>
                </div> : ""
            }
        </div>
    </div>)
}