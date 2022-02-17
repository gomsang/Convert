import Header from "../components/Header";
import ConvertPage from "./ConvertPage";
import "../pages/MainPage.css"
//ㅁ어 들만줘

function MainPage() {
    return (<div className={"main"}>
        <Header/>
        <ConvertPage/>
    </div>)
}

export default MainPage;