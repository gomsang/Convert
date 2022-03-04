import "./Convert.css"
import {useState} from "react";

export default function Convert() {
    const [select, setSelect] = useState(0);


    return (<div className={"Convert"}>
            <form className={"ConvertMenu"} onChange={(e)=>{console.log(e.target.value)}}>
                <input className={"radioBtn"} type={"radio"} name={"choose"} value={"clothes"} id={"b0"}/><label
                htmlFor={"b0"} className={"ConvertMenuList"} style={{borderRadius: "5px 0 0 0"}}>clothes</label>
                <input className={"radioBtn"} type={"radio"} name={"choose"} value={"clothes_wm"} id={"b1"}/><label
                htmlFor={"b1"} className={"ConvertMenuList"}>clothes(women)</label>
                <input className={"radioBtn"} type={"radio"} name={"choose"} value={"shoes"} id={"b2"}/><label
                htmlFor={"b2"} className={"ConvertMenuList"}>shoes</label>
                <input className={"radioBtn"} type={"radio"} name={"choose"} value={"bed"} id={"b3"}/><label
                htmlFor={"b3"} className={"ConvertMenuList"} style={{borderRadius: "0 5px 0 0"}}>bed</label>
            </form>
        </div>
    );
}