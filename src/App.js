import './App.css';
import styled from "styled-components";
import backgroundImage from "./background/background02.jpg";
import Main from "./pages/main";

const S = styled.span`
  color: navajowhite;
`

const BG01 = styled.div`
  position: absolute;
  height: 100%;
  width: 70%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  z-index: 0;
`

const Title = styled.div`
  position: absolute;
  top: 2rem;
  left: 2.5rem;
  font-weight: bold;
  font-size: 2.5rem;
  z-index: 10;
`

const Box = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  min-width: 20rem;
  right: 0;
  background-color: white;
`

const Subtitle = styled.div`
  display: inline-block;
  position: absolute;
  left: 50%;
  bottom: 2rem;
  width: 100%;
  transform: translate(-50%,0);
  color: dimgray;
  text-align: center;
`

function App() {
    return (
        <div className="App">
            <BG01/>
            <Title><S>Size</S> Checker@</Title>
            <Box>
                <Main/>
                <Subtitle>made by Jeonhui & Gyeongrok</Subtitle>
            </Box>
        </div>
    );
}

export default App;
