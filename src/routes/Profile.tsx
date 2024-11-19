import{useState, useEffect} from 'react'

import {FormLogin, FormRegister} from '../components'

const Profile = () => {

  const [isLogged, setIsLogged] = useState<boolean>(!!localStorage.getItem("authToken") || false)

  const handleLogout = () =>{
    localStorage.removeItem("authToken")
    setIsLogged(false)
  }

  

  return (
    <>
      <div className="App">
        
        {
          isLogged? (
            <>
              <h1>logado</h1>
              <button onClick={handleLogout}>logout</button>
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
