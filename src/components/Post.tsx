import styled from 'styled-components';

const PostWrapper = styled.div`
  border:2px solid red;
`;

const PostHeader = styled.div`
  display:flex;
  align-items:center;
  gap:1rem;
`;

const PostHeaderIcon = styled.div`
  height:40px;
  width:40px;
  background-color:red;
  border-radius:50%;
`;

const PostHeaderUser = styled.p`
  font-size:1rem
`;

const PostImageArea = styled.div`
  width:100%;
  height:150px;
  background-color:blue;
`;

const InteractiveWrapper = styled.div`
  display:flex;
  gap:1rem
`;

const Post = () => {
  return (
    <PostWrapper>
      <PostHeader>
        <PostHeaderIcon />
        <PostHeaderUser>Fabrício</PostHeaderUser>
      </PostHeader>

      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia
      </p>

      <PostImageArea />

      <InteractiveWrapper>
        <p>like</p>
        <p>comment</p>
        <p>save</p>
      </InteractiveWrapper>
    </PostWrapper>
  );
};

export { Post };
