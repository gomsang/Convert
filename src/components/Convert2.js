import "./Convert2.css";
import {useState} from "react";

export default function Convert() {

    return (<div className={"Convert"}>
            <div className={"InputContainer"}>
                <div className={"InputBox"}><span className={"letter"} style={{borderBottom: "orange 3px solid"}}>search</span><input type={"text"} required
                                                                                           minLength="4"
                                                                                           maxLength="8" size="10"/>
                </div>
                <div className={"InputBox"}><span className={"letter"} style={{borderBottom: "blue 3px solid"}}>From</span><input type={"text"} disabled/></div>
                <div className={"InputBox"}><span className={"letter"} style={{borderBottom: "green 3px solid"}}>To</span><input type={"text"}/></div>
            </div>
        </div>
    );
}