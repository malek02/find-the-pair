import React,{useState} from 'react'
import styled from "styled-components"
import Cards from "./Cards"
const Dashboard=({Listimages,selectCard})=> {

 
    return (
      
            <Wapper cardNumber={Listimages.length}>
                 
            {Listimages.map(card=>
                <Cards key={card.id}
                handleClick={()=>selectCard(card.id)}
                cardNumber={Listimages.length}
                 image={card.image}
                 activeimage={card.activeimg}
                 rightPair={card.somecard}
                 hidden /> )}
                 </Wapper>
        
    )
}



function setMaxWidth(props) {
    
    switch (props.cardNumber) {
      case 16:
        return '400px';
      case 32:
        return '780px';
      case 42:
        return '800px'
      default:
        return '1000px'
        ;
    }
  }

const Wapper= styled.div`
display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width:${p => setMaxWidth(p)};
  margin: 3rem 0;
`;


export default Dashboard