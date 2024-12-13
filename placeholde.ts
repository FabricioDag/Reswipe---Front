// Controle da movimentação das cartas
const [isDragging, setIsDragging] = useState(false);
const [isReleased, setIsReleased] = useState(false);

const [startPosition, setStartPosition] = useState(0);
const [translate, setTranslate] = useState<number>(0);


// Controle da ordem das cartas
const [cards, setCards] = useState(["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"]);
const [isAnimating, setIsAnimating] = useState(false); // Estado para controlar animação

const [animateOut, setAnimateOut] = useState<"left" | "right" | null>(null);

const handleMouseDown = (event:any) => {
  setIsDragging(true);
  setIsReleased(false)
  setStartPosition(event.clientX);
};

const handleMouseMove = (event:any) => {
  if (isDragging) {
    const currentPosition = event.clientX;
    setTranslate(currentPosition - startPosition);
  }
};

const handleMouseUp = () => {
  setIsDragging(false);
  setTranslate(0);
  
 // checa se moveu o suficiente (>120 ; <-120)
  if(translate < -120 || translate > 120){
    alert('moveu o suficiente')
  }
  

// Remover a carta do topo
const handleRemoveCard = () => {
  if (isAnimating) return; // Impede outra animação enquanto a atual não termina

  setIsAnimating(true); // anuncia que vai começar outra animação
  setTimeout(() => {
    setCards((prevCards) => prevCards.slice(1));// remove a carta do topo 
    setIsAnimating(false); // Reseta o estado de animação
  }, 500); // Tempo da animação deve coincidir com a duração em CSS Component
  setAnimateOut(null); // Resetar animação após a remoção
};


return (
  <ContainerSwiper>
    <p>Translate:{translate}</p>
    <p>Qt Cartas:{cards.length}</p>
    <CardsWrapper
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    > 
      
      

    </CardsWrapper>
  </ContainerSwiper>
);
};

const ContainerSwiper = styled.div`
padding:1rem;
overflow:hidden;
display:grid;
place-content:center;
`;

const CardsWrapper = styled.div`
  border:2px solid red;
  display:grid;
  place-content:center;
  height:400px;
  width:250px;
  position:relative;
`;


}


left:0;

&.attached {
  transform: ${({ translate }) => `translateX(${translate}px) rotate(${translate / 10}deg)`};
}

&.detached {
  transform: translateX(300px) ;
}

`;

export { Swiper };

transform: ${({ translateX }) => `translateX(${translateX}px) rotate(${translateX / 10}deg)`};

&.released{
    animation: ${({ animateOut }) =>
    animateOut === "left"
      ? fadeOutLeft
      : animateOut === "right"
      ? fadeOutRight
      : "none"} 0.5s forwards;
  }



  import styled from 'styled-components';

import { useState } from 'react';

const Swiper = () => {
  // Controle da movimentação das cartas
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [translate, setTranslate] = useState<number>(0);

  const cardData = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"]; // Dados das cartas

  // Controle da ordem das cartas
  const [cards, setCards] = useState(cardData);
  const [isAnimating, setIsAnimating] = useState(false); // Estado para controlar animação

  const [animateOut, setAnimateOut] = useState<"left" | "right" | null>(null);

  const handleMouseDown = (event:any) => {
    setIsDragging(true);
    setStartPosition(event.clientX);
  };

  const handleMouseMove = (event:any) => {
    if (isDragging) {
      const currentPosition = event.clientX;
      setTranslate(currentPosition - startPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTranslate(0);
    if(translate > 120  || translate < -120){
      handleMoveCard()
    }
  };

  // Remover a carta do topo
  const handleRemoveCard = () => {
    setCards((prevCards) => prevCards.slice(1));
    setAnimateOut(null); // Resetar animação após a remoção
  };

  const handleMoveCard = () => {
    if (isAnimating) return; // Impede outra animação enquanto a atual não termina
    
    setIsAnimating(true);

    // Temporizador para esperar a animação completar antes de mover a carta
    setTimeout(() => {
      setCards((prevCards) => {
        const [topCard, ...rest] = prevCards;
        return [...rest]; // remove a carta do topo 
      });
      setIsAnimating(false); // Reseta o estado de animação
    }, 500); // Tempo da animação deve coincidir com a duração em CSS
  };

  return (
    <ContainerSwiper>
      <p>Translate:{translate}</p>
      <p>Qt Cartas:{cards.length}</p>
      <CardsWrapper
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      > 
        
        {cards.map((card, index) => (
        <Card 
          key={index} 
          className={`${index === 0 ? "attached" : ""}`}
          translate={translate}
          style = {{
            zIndex: cards.length - index,
          }}
        >
          {card}
        </Card>
      ))}

      </CardsWrapper>
    </ContainerSwiper>
  );
};

const ContainerSwiper = styled.div`
padding:1rem;
overflow:hidden;
`;


  const handleMouseUp = () => {
    setIsDragging(false);
    setTranslate(0);
    if(translate > 120  || translate < -120){
      handleMoveCard()
    }
  };

  // Remover a carta do topo
  const handleRemoveCard = () => {
    setCards((prevCards) => prevCards.slice(1));
    setAnimateOut(null); // Resetar animação após a remoção
  };

  const handleMoveCard = () => {
    if (isAnimating) return; // Impede outra animação enquanto a atual não termina
    
    setIsAnimating(true);

    // Temporizador para esperar a animação completar antes de mover a carta
    setTimeout(() => {
      setCards((prevCards) => {
        const [topCard, ...rest] = prevCards;
        return [...rest]; // remove a carta do topo 
      });
      setIsAnimating(false); // Reseta o estado de animação
    }, 500); // Tempo da animação deve coincidir com a duração em CSS
  };

  return (
    <ContainerSwiper>
      <p>Translate:{translate}</p>
      <p>Qt Cartas:{cards.length}</p>
