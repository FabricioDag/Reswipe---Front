import{useState, useEffect} from 'react'

import {FormLogin, FormRegister} from '../components'

const Profile = () => {

  const [isLogged, setIsLogged] = useState<boolean>(!!localStorage.getItem("authToken") || false)
  const [userInfo, setUserInfo] = useState<any>(null);

  const handleLogout = () =>{
    localStorage.removeItem("authToken")
    setIsLogged(false)
  }

  useEffect(() => {
    if (isLogged) {
      const fetchUserInfo = async () => {
        try {
          const token = localStorage.getItem('authToken');

          const response = await fetch('http://localhost:3001/auth/profile', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`, // Incluindo o token JWT no cabeçalho.
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error('Erro ao buscar informações do usuário');
          }

          const data = await response.json();
          setUserInfo(data); // Atualizar o estado com as informações do usuário.
        } catch (error) {
          console.error('Erro:', error);
        }
      };

      fetchUserInfo();
    }
  }, [isLogged]);

  // testes :
  
  const createRecipe = async () => {
    const token = localStorage.getItem("authToken"); // Pega o token do localStorage

    const recipeData = {
        title: "Spaghetti Carbonara",
        description: "Uma receita clássica italiana de macarrão carbonara.",
        ingredients: [
            "200g de espaguete",
            "100g de bacon em cubos",
            "2 ovos",
            "50g de queijo parmesão ralado",
            "Sal e pimenta a gosto",
        ],
        instructions: "Cozinhe o espaguete. Frite o bacon. Misture os ovos e o queijo. Combine tudo.",
    };

    try {
        const response = await fetch("http://localhost:3001/recipes/createRecipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Inclui o token JWT
            },
            body: JSON.stringify(recipeData),
        });

        if (!response.ok) {
            throw new Error("Erro ao criar a receita");
        }

        const data = await response.json();
        console.log("Receita criada com sucesso:", data);
    } catch (error) {
        console.error("Erro:", error.message);
    }
};

  return (
    <>
      <div className="App">
        
        {
          isLogged? (
            <>
            <h1>Bem-vindo, {userInfo?.name || 'Usuário'}</h1>
            <p>Email: {userInfo?.email}</p>
            <p>createdAt:{userInfo?.createdAt}</p>
            <p>birthDate: {userInfo?.birthDate}</p>
            <h2>Minhas Receitas</h2>
                    {userInfo?.recipes.length > 0 ? (
                        <ul>
                            {userInfo?.recipes.map((recipe) => (
                                <li key={recipe._id}>
                                    <a href={`/recipes/${recipe._id}`}>{recipe.title}</a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Você ainda não criou nenhuma receita.</p>
                    )}
            <button onClick={createRecipe}>Postar receita teste</button>
            <button onClick={handleLogout}>Logout</button>
        </>
          ):
          (
            <>
              <h2>nao logado</h2>

             <FormLogin setIsLogged={setIsLogged}/>
             <FormRegister />
             
            </>
          )
        }
        
      </div>
    </>
  );
};

export { Profile };
