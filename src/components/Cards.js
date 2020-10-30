import React from 'react'
import styled, { css } from "styled-components"
import { BsCheck } from "react-icons/bs"
const Cards = ({ image,isfliped,cardNumber,handleClick,activeimage,rightPair}) => {



    return (
        <WrapperCard cardNumber={cardNumber}>
           { rightPair==1?<Win><BsCheck className="icons"/></Win>: <Card  onClick={handleClick}
            show={isfliped} activeimage={activeimage} rightPair={rightPair}>
                <Back className="my__unique" > 
<Content>?</Content>
                </Back>
                <Image image={image} />
            </Card>}
        </WrapperCard>
    )
}

function setMaxWidth(props) {
    
    switch (props.cardNumber) {
      case 16:
        return '137px';
      case 32:
        return '80px';
      case 42:
        return '98px'
      default:
        return '137px'
        ;
    }
  }
  function setMaxHeight(props) {
    
    switch (props.cardNumber) {
      case 16:
        return '146px';
      case 32:
        return '110px';
      case 42:
        return '90px'
      default:
        return '146px'
        ;
    }
  }
  function activetedCrad(props) {
      if(props.activeimage||props.rightPair==1){
          return 'rotateY(0)';
      }
      return 'rotateY(180deg)';
  }


const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 500px;
  width: ${p => setMaxWidth(p)};
  height: ${p => setMaxHeight(p)};

  margin:0.3rem
`
const Content = styled.div`
 
 
position: absolute;
height: 68px;
left: 41.61%;
right: 41.61%;
top: calc(50% - 68px/2);

font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 50px;
line-height: 68px;

color: #FFFFFF;


`
const Card = styled.div`
position:relative;
width: 100%;
height: 100%;
transform: ${x => activetedCrad(x)};
border-radius: 4px;
user-select: none;
cursor: ${x=>x.rightPair? "":'pointer'};
transform-style: preserve-3d;
transition: transform 300ms;
 .my__unique:hover {
  padding:0.1rem 0.1rem 0.1rem 0.1rem;
 
  text-decoration:none;
  background:white;
  ${Content}{
    
    color:black;
    font-size: 80px;
  }

}
`
const CradFace = css`
position: absolute;
height: 100%;
width: 100%;
backface-visibility: hidden;
border-radius: 4px;
`
const Image = styled.div`
/* ... */
${CradFace}
background-image: url("${props => props.image}");
background-size: cover;
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-position: center center;
transition: transform 1s;
transform-style: preserve-3d;
  
`

const Back = styled.div`
  ${CradFace }
 
    transform:rotateY(180deg);
    font-family: 'Lobster', cursive;
    font-weight: initial;
    background: #1890FF;
box-shadow: 0px 4px 30px rgba(8, 55, 72, 0.21);
  }
 
`

const Win=styled.div`
background-image: linear-gradient(110.99deg, #FDFBFB 0%, #EBEDEE 98.71%);
background-size: cover;
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-position: center center;
.icons{
  position: absolute;
height: 140px;
left: 20.61%;
right: 80.61%;
 color:green;
 font-size: 80px;
}
`

export default Cards;