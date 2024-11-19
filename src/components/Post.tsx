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

const Post = ({postAuthor, postContent, dateCreation, likes, comments, saves, postId}) => {
  
  const handleLike = async () =>{

    try {
      // Supondo que o ID do usuário seja "user123", você pode ajustar conforme necessário.
      const userId = "user123";
      const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      
    } catch (error) {
      console.error("Erro ao dar like:", error);
    }
  }
  
  return (
    <PostWrapper>
      <PostHeader>
        <PostHeaderIcon />
        <PostHeaderUser>Autor:{postAuthor}</PostHeaderUser>
        <p>{postId}</p>
      </PostHeader>

      <p>
        {postContent}
      </p>
      <small>
        {new Date(dateCreation).toLocaleDateString()}
      </small>

      <PostImageArea />

      <InteractiveWrapper>
        <button onClick={handleLike}>likes {likes.length}</button>
        <button>comments {comments.length}</button>
        <button>saves {saves.length}</button>
      </InteractiveWrapper>
    </PostWrapper>
  );
};

export { Post };
