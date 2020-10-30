import './App.css';
import React, { usestate, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./components/DashboardGame"
import SideBar from "./components/sideBar"
import styled from "styled-components";
import _ from 'lodash';
import { BsFillAwardFill} from "react-icons/bs"
import { setCard,changeBoardSize,restarImage,selectCard,hideAllimg,rightPair} from "./redux/actions/redux-action"

const App = () => {
  const Listimages = useSelector((state) => state.gameControle.ListCards);
  const   testimage = useSelector((state) => state.gameControle.testimage);
  const   tries = useSelector((state) => state.gameControle.tries);
  const   score = useSelector((state) => state.gameControle.score);
  const [num,steNum]=useState(10)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setCard())
  
  }, [])


  const sizeChange = (e) => {
    if (e) {
      steNum(e.target.value)
      dispatch(changeBoardSize(e.target.value))
      dispatch(restarImage())
     
    }
  };
  useEffect(() => {
    
    
    if(testimage.length>=2){
      if(testimage[0].image === testimage[1].image){
      dispatch(rightPair())}else{
      setTimeout(()=>dispatch(hideAllimg()), 500);}}
    
  },[testimage])
  
  return (


    <Wrapper >
      <DesktopHd>
        <Header>
          <Title>Find the pairs</Title>
          {(num== score) ?<Winnermessage>
          <BsFillAwardFill  className="winnermessage"/> Winner score :  {num}/{num}  and Tries : {tries} 
          </Winnermessage>:""}
        </Header>
        <WrapperDashboard>
        <Dashboard Listimages={Listimages} selectCard={e=>dispatch(selectCard(e))} />
        </WrapperDashboard>
        
<SideBar tries={tries} num={num} sizeChange={e=>sizeChange(e)} score={score} restarImage={e=>dispatch(restarImage())} />
      </DesktopHd>
    </Wrapper>


  );
}


const Winnermessage= styled.div`
position: relative;
width: 500px;
height: 20px;
left: -90px;
top: 70px;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 21px;
line-height: 22px;
color:green;
.winnermessage{
  color:green;
  font-size: 25px;
}



`

const Wrapper = styled.div`
position: relative;
width: 1440px;
height: 900px;
left: 200px;



background: #FFFFFF;
`
const DesktopHd = styled.div`
position: absolute;
width: 1440px;
height: 900px;
left: 0px;
top: 0px;

background: linear-gradient(110.99deg, #FDFBFB 0%, #EBEDEE 98.71%);



`

const Header = styled.div`

position: absolute;
width: 254px;
height: 54px;
left: 593px;
top: 56px;


`
const Title = styled.span`
position: absolute;
height: 55px;
left: 0%;
right: 0%;
top: calc(50% - 55px/2 + 0.5px);

font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 55px;
/* identical to box height */


color: #232527;
`

const WrapperDashboard= styled.div`
position: absolute;
width: 800px;
height: 1000px;
left: 178px;
top: 120px;

`
export default App;
