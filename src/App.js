import './App.css';
import MainPage from "./pages/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/a" element={<div>a</div>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
