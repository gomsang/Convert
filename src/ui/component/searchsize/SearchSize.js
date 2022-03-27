import SearchValueInput from "./SearchValueInput";
import "./SearchSize.css"
import {useEffect, useReducer, useState} from "react";
import SearchSuggestList from "./SearchSuggestList";
import {querySizeByName} from "../../../utils/size/Size";

export default function SearchSize() {
    const [keyword, setKeyword] = useState("")
    const [suggests, setSuggests] = useState([])
    const [selectedSize, setSelectedSize] = useState({})

    let [focusingSuggestIdx, setFocusingSuggestIdx] = useState(-1)

    useEffect(() => {
        // suggests 내용 및 focus 된 suggest ID가 변경되면 포커스 된 아이템 값이 너무 적거나, 벗어나지 않도록 조정한다.
        if (focusingSuggestIdx < -1) setFocusingSuggestIdx(-1)
        if (focusingSuggestIdx > suggests.length - 1) setFocusingSuggestIdx(suggests.length - 1)
    }, [suggests, focusingSuggestIdx])

    useEffect(() => {
        // keyword 변경시 Size 를 재 쿼리 한다.
        let suggests = querySizeByName(keyword)

        // 추천 데이터가 4개가 넘어가면 나머지 추천 데이터를 제거.
        if(suggests.length > 4) {
            suggests = suggests.slice(0, 4)
        }

        setSuggests(suggests)
    }, [keyword])

    const handleKeyDown = (e) => {
        switch (e.code) {
            case "ArrowUp":
                setFocusingSuggestIdx(focusingSuggestIdx - 1)
                break;
            case "ArrowDown":
                setFocusingSuggestIdx(focusingSuggestIdx + 1)
                break;
            case "Enter":
                setSelectedSize(suggests[focusingSuggestIdx])
                setSuggests([])
                break;
            default:
                break;
        }
    }

    return <div>
        <SearchValueInput keywordState={[keyword, setKeyword]} selectedSizeState={[selectedSize, setSelectedSize]} handleKeyDown={handleKeyDown}/>
        <SearchSuggestList focusingSuggestIdx={focusingSuggestIdx} suggests={suggests}/>
    </div>
}