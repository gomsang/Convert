import React, {useState} from "react";
import styled from "styled-components";
import selectArrow from "../background/down_arrow.png";

const ToolBox = styled.div`
  position: relative;
  top: 5rem;
  padding: 1.5rem;
`

const Select = styled.select`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px 10px 5px;
  font-size: 1.5rem;
  width: 8rem;
  color: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: dimgray url(${selectArrow}) no-repeat 93% 50%/20px auto;
  ::-ms-expand{
    display: none;
  }
  
`

const Input = styled.input`
  outline: none;
  border: none;
`

const InputCountry = styled(Input)`
    font-size: 1.2rem;
`

const InputSize = styled(Input)`
    
`

function Tools() {
    const [country, setCountry] = useState("");
    const [size, setSize] = useState("");
    const onChangeCountry = (e)=>{setCountry(e.target.value)}
    const onChangeSize = (e)=>{setSize(e.target.value)}
    const onChangeList = (e)=>{console.log(e.target.value)}

    return (
        <ToolBox>
            <Select name="language" onChange={onChangeList}>
                <option value="man">man</option>
                <option value="women">women</option>
                <option value="shoe">shoe</option>
            </Select>
            <InputCountry value={country} onChange={onChangeCountry}/>
            <InputSize value={size} onChange={onChangeSize}/>
        </ToolBox>
    );
}

export default Tools;
