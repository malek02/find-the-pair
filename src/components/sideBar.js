import React, { useState } from 'react'
import styled from "styled-components"
const SideBar=(props)=> {
    


    return (
        <WrapperSide>
<SocoreBox>
Score
    <Note> {props.score}/{props.num}</Note>
    <Tries>Tries: {props.tries}</Tries>
</SocoreBox>
            <Card>
                <Options>Options</Options>
          <Label htmlFor="size">
        Size:
      </Label>
      <Select
        name="size"
       
     
        onChange={e=>props.sizeChange(e)}
      >
        
        <option value="10">10 pairs</option>
        <option value="16">16 pairs</option>
        <option value="21">21 pairs</option>
        
      </Select>
      <Button type="submit" onClick={e=>props.restarImage(e)} >Restart</Button>
      </Card>
        </WrapperSide>
    )
}



const WrapperSide= styled.div`

position: absolute;
width: 262px;
height: 383px;
left: 1000px;
top: 168px;
background: #FBFBFB;
border-radius: 4px;

`
const Card = styled.div`
position: absolute;
width: 220px;
height: 152px;
left: 20px;
top: 210px;

`
const Select = styled.select`
position: absolute;
width: 106px;
height: 32px;
left: 60px;
top: 50px;

background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.15);
box-sizing: border-box;
border-radius: 2px;
`
const Label = styled.label`
position: absolute;
width: 106px;
height: 32px;
left: 10px;
top: 55px;
`;
const Button= styled.button`

position: absolute;
width: 74px;
height: 38px;
left: 1px;
top: 112px;
background: #1890FF;
border-radius: 2px;
font-family: 'Open Sans';
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */

text-align: center;

color: #FFFFFF;

`

const Options= styled.div`

position: absolute;
width: 60px;
height: 25px;
left: 0px;
top: 0px;
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 27px;

color: #232527;



`
const SocoreBox = styled.div`

position: absolute;
width: 146px;
height: 150px;
left: 20px;
top: 10px;


font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 27px;

color: #232527;
`
const Note = styled.div`
position: absolute;
width: 106px;
height: 110px;
left: 25px;
top: 50px;
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 48px;
/* identical to box height */


color: #1890FF;

`
const Tries = styled.div`
position: absolute;

left: 10px;
top: 120px;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
/* identical to box height */


color: #232527;
`

export default SideBar

