import {useState} from 'react'

const Login = () =>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [birthDate, setBirthDate] = useState<Date>();

    const [message, setMessage] = useState("");

    // const handleLogin = async (e) =>{
    //     e.preventDefault()
    //     try{
    //         const response = await fetch("https://localhost:3001/api",{
    //             method:"POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //               },
    //             body: JSON.stringify(`"name":${username}; "password":${password}`),
    //         })


    //         if (response.ok) {
    //             const data = await response.json();
    //             setMessage(data.message);
    //             // Armazene o token no localStorage ou state para autenticação futura
    //             localStorage.setItem("token", data.token);
    //           } else {
    //             const errorData = await response.json();
    //             setMessage(errorData.message);
    //           }

    //     }catch (error) {
    //         console.error("Erro ao fazer login:", error);
    //         setMessage("Erro ao fazer login");
    //       }
    // }

    return(
        <form onSubmit={handleLogin}>
            <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
            <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export {Login}