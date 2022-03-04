import "./Convert.css";
import {useState} from "react";

export default function Convert() {

    return (<div className={"Convert"}>
            <div className={"InputContainer"}>
                <div className={"InputBox"}><span className={"letter"}>search</span><input type={"text"} required
                                                                                           minLength="4"
                                                                                           maxLength="8" size="10"/>
                </div>
                <div className={"InputBox"}><span className={"letter"}>From<input type={"text"}/></span></div>
                <div className={"InputBox"}><span className={"letter"}>To</span><input type={"text"}/></div>
            </div>
        </div>
    );
}