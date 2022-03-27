import "./ConvertPage.css";
import Header from "../component/common/Header";
import SearchSize from "../component/searchsize/SearchSize";

export default function ConvertPage() {
    return (<div className={"Main"}>
        <Header/>
        <div className={"contents"}>
            <div className={"startSizeSearchPart"}><SearchSize/></div>
            <p id={"approxEqualSymbol"}>≈</p>
            <div className={"convertSizeSelectPart"}>convertSizePart</div>
        </div>
    </div>)
}