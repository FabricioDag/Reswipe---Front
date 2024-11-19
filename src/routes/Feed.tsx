import styled from 'styled-components';

import { Post } from '../components';

import{useState, useEffect} from 'react'

interface Post {
  _id: string;
  autor: string | { name: string }; // Ajustado para permitir que autor seja um objeto
  content: string;
  dateCreation: Date;
  likes: string[];
  comments: string[];
  saves: string[];
}

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
  const [data, setData] = useState<Post[]>([]);

   useEffect(() => {
       fetch("http://localhost:3001/posts")
       .then((response) => response.json())
       .then((data :Post[]) => setData(data))
       .catch((error) => console.error("Erro ao buscar dados:", error));
   }, []);

  return (
    <ContainerFeed>
      <ReswipeLogo>RESWIPE</ReswipeLogo>
      <PostsWrapper>
        {/* <Post />
        <Post />
        <Post />
        <Post /> */}

        {data.map((post) => (
          <Post
            key={post._id}
            postId={post._id}
            postAuthor={post.autor}
            postContent={post.content}
            dateCreation={post.dateCreation}
            likes={post.likes}
            comments={post.comments}
            saves={post.saves}
          />
        ))}
      </PostsWrapper>
    </ContainerFeed>
  );
};

export { Feed };
