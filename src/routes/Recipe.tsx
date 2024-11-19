import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Recipe {
  _id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  createdBy: string;
  createdAt: string;
}


const Recipe = () => {

  const { id } = useParams(); // Recebe o id da URL
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    fetch(`http://localhost:3001/api/recipes/${id}`)
      .then((response) => response.json())
      .then((data: Recipe) => setRecipe(data))
      .catch((error) => console.error("Erro ao buscar receita:", error));
  }, [id]);

  if (!recipe) return<p>id: {id}</p>; ;

  return (
    
      // <div className="App">
      //   <h2>Pagina da receita (read only)</h2>
      //   <p>tag receita</p>
      //   <p>salvar receita</p>
      //   <p>salvar receita no seu perfil</p>
      //   <p>adicionar itens a lista de compras</p>
      //   <p>avaliar</p>
      //   <p>comentar e postar foto</p>
      // </div>

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
    </div>
    
  );
};

export { Recipe };
