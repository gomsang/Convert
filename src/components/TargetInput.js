import "./TargetInput.css";

import React, {useState} from "react";

function TargetInput() {
    const [kind, setKind] = useState("")
    const kinds = ["shoe-US(man)", "shoe-US(woman)", "shoe-JP", "shoe-EU(man)", "shoe-EU(woman)", "shoe-UK(man)", "shoe-UK(woman)"];


    return (
        <div id={"mainInputs"}>
            <input type="text" id="name" name="name" required
                   minLength="4" maxLength="8" size="10"/>
            <p className={"subText"}>to</p>

            <select name="kinds" id="kinds">
                {kinds.map(kind => <option value={kind}>{kind}</option>)}
            </select>
        </div>)
}

export default TargetInput