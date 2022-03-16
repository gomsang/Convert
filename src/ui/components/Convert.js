import ConvertPage from "./save/ConvertPage";
import Search from "./Search";
import "./Convert.css";
import {useState} from "react";

export default function Convert() {
    const [state, setState] = useState(0)
    // 0 - 선택 가능 1 - 선택 중  2 - 선택 완료


    return (<div className={"Main"}>
        <h1 className={"title"}>CONVERT</h1>
        <Search/>
    </div>)
}