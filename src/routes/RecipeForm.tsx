import { useState } from 'react';

const RecipeForm = () => {
  const [addingIngredient, setAddingIngredient] = useState(false);

  const handleClick = () => {
    setAddingIngredient(true);
  };

  const [ingredients, setIngredients] = useState([
    {
      nome: 'Arroz',
      quantidade: '200',
      medida: 'g',
    },

    {
      nome: 'Feijao',
      quantidade: '250',
      medida: 'g',
    },
  ]);

  const [preparingSteps, setPreparingSteps] = useState([
    'Adicione tudo ao prato',
    'Misture bem!',
  ]);

  const [nameIngredient, setNameIngredient] = useState('');
  const [quantityIngredient, setQuantityIngredient] = useState('');
  const [measureIngredient, setMeasureIngredient] = useState('g');

  const handleAddIngredient = () => {
    setIngredients([
      ...ingredients,
      {
        nome: nameIngredient,
        quantidade: quantityIngredient,
        medida: measureIngredient,
      },
    ]);

    setAddingIngredient(false);
  };
  return (
    <>
      <div className="App">
        <h1>Receitas</h1>

        <div className="inputWrapper">
          <label htmlFor="">Titulo</label>
          <input type="text" />
        </div>

        <div className="ingredientsArea">
          <h2>Subtitulo</h2>
          {ingredients.map((ingredient) => (
            <div className="ingredientWrapper">
              <p>{ingredient.nome}</p>
              <p>{ingredient.quantidade}</p>
              <p>{ingredient.medida}</p>

              <button>...</button>
            </div>
          ))}

          {addingIngredient ? (
            <div className="ingredientInputWrapper">
              <input
                type="text"
                placeholder="ingrediente"
                onChange={(e) => setNameIngredient(e.target.value)}
              />
              <input
                type="number"
                placeholder="quantidade"
                onChange={(e) => setQuantityIngredient(e.target.value)}
              />
              <select
                name="select"
                value={measureIngredient}
                onChange={(e) => setMeasureIngredient(e.target.value)}
              >
                <option value="un">Un</option>
                <option value="ml">ml</option>
                <option value="g">g</option>
              </select>
              <button onClick={handleAddIngredient}>salvar</button>
              <button onClick={() => setAddingIngredient(false)}>
                excluir
              </button>
            </div>
          ) : (
            <button onClick={handleClick} className="addIngredientButton">
              +
            </button>
          )}
        </div>

        <div className="preparingArea">
          <h2>Preparing</h2>
          {preparingSteps.map((step) => (
            <li>{step}</li>
          ))}
          <div className="inputWrapper">
            <label htmlFor="">Step </label>
            <input type="text" />
          </div>
          <button>+</button>
        </div>

        <div className="infosArea">
          <p>dificuldade</p>
          <p>tempo</p>
          <p>serve pessoas</p>
          <p>custo</p>
          <p>tags</p>
        </div>

        <button>Publicar Receita</button>
      </div>
    </>
  );
};

export { RecipeForm };
