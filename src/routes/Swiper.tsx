import styled, { css, keyframes } from "styled-components";

import {useState } from 'react';

const CardsWrapper = styled.div`
  border:2px solid red;
  display:grid;
  place-content:center;
  height:400px;
  width:250px;
  position:relative;
`

const SwiperContainer = styled.div`
  padding:1rem;
  overflow:hidden;
  display:grid;
  place-content:center;
`
// Animação para desaparecer para a direita ou esquerda
const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0;}
`;

 const StyledCard = styled.div.attrs<{ translateX: number; released: boolean; isTopCard: boolean }>(
   ({ translateX, isTopCard }) => ({
     style: {
       transform: isTopCard? `translateX(${translateX}px) rotate(${translateX / 10}deg)` : undefined,
     },
   })
 )<{ isTopCard: boolean; released: boolean }>`
   width: 100%;
   height: 100%;
   background-color: gray;
   position: absolute;

   ${({ released, isTopCard }) =>
     released && isTopCard &&
     css`
       transition: 0.2s ease;
       animation: ${fadeOut} 0.2s ease forwards;
     `}
 `;




const Swiper = () => {

  const [isDragging , setIsDragging] = useState<boolean>(false)
  const [isReleased, setIsReleased] = useState<boolean>(false)
  const [translateX , setTranslateX] = useState<number>(0)
  const [startPosition, setStartPosition] = useState<number>(0);

  const [cards, setCards] = useState(["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"]);


  const handleMouseDown = (e:any) =>{
    setStartPosition(e.clientX)
    setIsDragging(true)
    setIsReleased(false)
  }

  const handleMouseMove = (e:any) =>{
    if (isDragging) {
      const currentPosition = e.clientX;
      setTranslateX(currentPosition - startPosition);
    }
  }


  const handleMouseUp = (e:any) =>{
    setIsDragging(false)
    setTranslateX(0)
        
    //se moveu o suficiente release
    if(translateX < -120 ){
      setIsReleased(true)
      alert('is released left')
      handleRemoveCard()
      
    }

    if(translateX > 120 ){
      setIsReleased(true)
      alert('is released rigth')
      handleRemoveCard()
    }
    
  }

  // Remover a carta do topo
  const handleRemoveCard = () => {

    setTimeout(() => {
      setCards((prevCards) => prevCards.slice(1));
    }, 1000);
  };


  return(
    <SwiperContainer>
      <p>{translateX}</p>
      
      <CardsWrapper
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        
      >

        {cards.map((card, index)=>(
          <StyledCard
          key ={index}
          translateX={translateX}
          isTopCard={index === 0} // Indica se é o card do topo
          released={isReleased}
          style = {{
            zIndex: cards.length - index,
          }}
          >
            <p>{card}</p>
            <p>{index}</p>
          </StyledCard>
        ))}
      </CardsWrapper>

    </SwiperContainer>
  )
}
  
export { Swiper }
