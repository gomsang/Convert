import Header from "../components/Header";
import ConvertPage from "./ConvertPage";
import "../pages/MainPage.css";

function MainPage() {
    return (<div className={"main"}>
        <Header/>
        <ConvertPage/>
    </div>)
}

export default MainPage;