import "./TargetInput.css";

import React, {useState} from "react";

function TargetInput() {
    const [kind, setKind] = useState("")
    const kinds = ["shoe-US(man)", "shoe-US(woman)", "shoe-JP", "shoe-EU(man)", "shoe-EU(woman)", "shoe-UK(man)", "shoe-UK(woman)"];

    window.addEventListener("resize",(e)=>{
        console.log(window.innerWidth)
    })

    return (
        <div id={"mainInputs"}>
            <input type="text" id="name" name="name" required
                   minLength="4" maxLength="8" size="10"/>

            <p className={"subText"}>to</p>

            <select name="kinds" id="kinds" onChange={(e)=>{setKind(e.target.value)
            console.log(kind)}}>{/*추가 console.log는 너 확인 해보셈*/}
                {kinds.map((kind,idx) => <option key={idx} value={kind}>{kind}</option>)}
                {/*mapping할 때는 key값 넣어줘야 오류메시지 안 뜸*/}
            </select>
        </div>)
}

export default TargetInput