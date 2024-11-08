import { Outlet, Link } from 'react-router-dom';
import { Navigation } from '../components/';

const Root = () => {
  return (
    <div className="RootRoute">
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
