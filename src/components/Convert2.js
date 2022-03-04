import "./Convert2.css";
import {useState} from "react";
import searchIcon from "./serachIcon.png";

export default function Convert() {

    return (<div className={"Convert"}>
            <div className={"SearchContainer"} >
                <div className={"SearchIcon"}/>
                <input className={"Search"} type={"text"} placeholder={"search"} required
                       minLength="4"
                       maxLength="8" size="10"/>
            </div>
        </div>
    );
}