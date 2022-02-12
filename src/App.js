import React, {useState} from "react";
import styled from "styled-components";
import './App.css';

const Select = styled.input`
  font-size: 36px;
  position: absolute;
  top: 50px;
  left: 125px;
  width: 200px;
`
const Output = styled.div`
  position: absolute;
  top: 200px;
  left: 150px;
  font-size: 36px;
`

const Base_size = styled.input`
  font-size: 36px;
  outline: none;
  border: none;
  border-bottom: darkgray solid 2px;
  width: 150px;
`

function App() {
    const [find, setFind] = useState("")
    //찾을 국가 선택 저장하는 텍스트 (inputBox에서 사용)

    const [size, setSize] = useState(0)

    const changeFind = (e) => {
        setFind(e.target.value)
    } //찾을 국가 변경 되면 find변수에 저장

    const changeSize = (e) => {
        setSize(e.target.value)
    } //찾을 국가 변경 되면 find변수에 저장

    const country_name = ["korea", "USA", "Italia"]
    //선택할 국가 저장할 배열
    const country = country_name.map((country) => <option value={country}/>)
    //위 배열의 국가들을 option 태그 내에 반복 시킴 (datalist에 저장한 뒤에 input박스에 list로 전달하면 콤보박스 처럼 이용 가능)

    return (
        <div className="App">
            <datalist id="country_list">{country}</datalist>
            <Select type="text" value={find} onChange={changeFind} list="country_list"/>
            <Output>
                <Base_size type="text" value={size} onChange={changeSize}/>이
                <span> {size}</span>으로 변환
            </Output>
        </div>
    );
}

export default App;
