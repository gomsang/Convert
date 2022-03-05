import "./Convert2.css";
import TargetInput from "./TargetInput";

export default function Convert() {

    return (<div className={"Convert"}>
            <div className={"InputContainer"}>
                <div className={"InputBox"}><span className={"letter"} style={{borderBottom: "orange 3px solid"}}>search</span><TargetInput/>
                </div>
                <div className={"InputBox"}><span className={"letter"} style={{borderBottom: "blue 3px solid"}}>From</span><input type={"text"}  className={"InputClass"} disabled/></div>
                <div className={"InputBox"}><span className={"letter"} style={{borderBottom: "green 3px solid"}}>To</span><input type={"text"}  className={"InputClass"} /></div>
            </div>
        </div>
    );
}