import "./SearchValueInput.css"
import {useEffect, useState} from "react";
import {querySizeByName} from "../../../utils/size/Size";

export default function SearchValueInput({keywordState, selectedSizeState, handleKeyDown}) {
    const [keyword, setKeyword] = keywordState
    const [selectedSize, setSelectedSize] = selectedSizeState

    const onKeywordChange = function (e) {
        let inputValue = e.target.value
        setKeyword(inputValue)
    }

    return <input className={"RegularSearchInput"} placeholder={"변환 할 값 입력"} value={selectedSize ? selectedSize.name : keyword} onChange={onKeywordChange}
                  onKeyDown={handleKeyDown}/>
}