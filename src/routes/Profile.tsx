import{useState, useEffect} from 'react'

interface Recipe {
  _id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  createdBy: string;
  createdAt: string;
}

const Profile = () => {

  const [data, setData] = useState<Recipe[]>([]);

   useEffect(() => {
       fetch("http://localhost:3001/recipes/listRecipes")
       .then((response) => response.json())
       .then((data :Recipe[]) => setData(data))
       .catch((error) => console.error("Erro ao buscar dados:", error));
   }, []);
  return (
    <>
      <div className="App">
        {/* <h2>Perfil usuario</h2>
        <p>minhas receitas</p>
        <p>minhas receitas salvas</p>
        <p>publicar receita</p>
        <p>medalhas</p>
        <p>configurações e privacidade</p>
        <p>sair da conta</p>
        <p>cozinheiros seguidos</p>
        <p>cozinheiros seguidores</p> */}

        {
          data.map((recipe)=>(
            <div>
              <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Created By:</strong> {recipe.createdBy}</p>
            <p><strong>Created At:</strong> {new Date(recipe.createdAt).toLocaleDateString()}</p>
            <p>ID: {recipe._id}</p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export { Profile };
