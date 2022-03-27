import './App.css';
import ConvertPage from "./ui/page/ConvertPage";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ConvertPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
