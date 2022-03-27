import "./SearchSuggestItem.css"
import {useEffect, useState} from "react";
import {querySizeByName} from "../../../utils/size/Size";
import SearchSuggestItem from "./SearchSuggestItem";

export default function SearchSuggestList({suggests, focusingSuggestIdx}) {
    return <ul>
        {suggests.map((suggest, idx) => {
            return <li key={idx}><SearchSuggestItem suggest={suggest} focused={focusingSuggestIdx === idx}/></li>
        })}
    </ul>
}