import styled from 'styled-components';

import { Post } from '../components';

const ReswipeLogo = styled.h2`
text-align:center;
`;

const ContainerFeed = styled.div`
  padding:1rem;
  `;

const PostsWrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap:1rem;
`;

const Feed = () => {
  return (
    <ContainerFeed>
      <ReswipeLogo>RESWIPE</ReswipeLogo>
      <PostsWrapper>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsWrapper>
    </ContainerFeed>
  );
};

export { Feed };
