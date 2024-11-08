import styled from 'styled-components';

const ContainerSwiper = styled.div`
padding:1rem;
overflow:hidden;
background-color: ${(props) => (props.translate > 0 ? '#c00' : '#fff')};
`;

const CardsWrapper = styled.div`
  border:2px solid red;
  display:grid;
  place-content:center;
`;

const Card = styled.div`
  height:400px;
  width:250px;
  background-color:black;
  border-radius:1rem;
  color:white;
`;

import { useState } from 'react';

const Swiper = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [translate, setTranslate] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartPosition(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const currentPosition = event.clientX;
      setTranslate(currentPosition - startPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTranslate(0);
  };

  return (
    <ContainerSwiper>
      <CardsWrapper
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Card
          style={{
            transform: `translateX(${translate}px) rotate(${
              translate / 10
            }deg)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          {/* {startPosition} */}
          {translate}
        </Card>
      </CardsWrapper>
    </ContainerSwiper>
  );
};

export { Swiper };
