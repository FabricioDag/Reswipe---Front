import { Outlet, Link } from 'react-router-dom';
import { Navigation } from '../components/';

import { useEffect, useState } from "react";

const Root = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3001/api")
  //     .then((response) => response.json())
  //     .then((data) => setData(data.message))
  //     .catch((error) => console.error("Erro ao buscar dados:", error));
  // }, []);

  return (
    <div className="RootRoute">
       <p>Mensagem do Backend: {data}</p>
      {/* <h1>Root</h1>
      <Link to={`/profile`}>Profile</Link>
      <Link to={`/recipe`}>Recipe</Link>
      <Link to={`/recipeForm`}>Recipe Form</Link>
      <Link to={`/feed`}>Feed</Link>
      <Link to={`/`}>Root</Link> */}

      {/* <div>
        <h2>Pagina inicial</h2>
        <p>login</p>
        <p>random recipe</p>
        <p>filters</p>
      </div> */}

      <Outlet />
      <Navigation />
    </div>
  );
};

export { Root };
