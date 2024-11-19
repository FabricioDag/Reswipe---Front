import{useState} from 'react'

// Definindo a interface dos dados do formulário de login
interface LoginUserFormData {
    email: string;
    password: string;
  }

  const FormLogin = ({setIsLogged}) => {

  const handleSubmitLogin = async (e: React.FormEvent) =>{ // Envia requisição para fazer Login Usuario
    e.preventDefault()

    // alert(JSON.stringify(formData))
    
    // Validação simples
    if (!formDataLogin.email || !formDataLogin.password) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    setError(null); // Limpa mensagens de erro, se houver


    try{
      const response = await fetch('http://localhost:3001/auth/loginUser',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataLogin)
      })

      if (!response.ok) {
        throw new Error('Erro na submissão do formulário');
      }
      const data = await response.json();
      console.log('Usuário logado com sucesso:', data);
      localStorage.setItem("authToken", data.token)
      setIsLogged(true)

      // Limpa o formulário após o envio bem-sucedido
      setFormDataLogin({email: '', password: '' });
      
    } catch (error) {
      console.error('Erro:', error);
      setError('Ocorreu um erro ao enviar o formulário.');
    }
  }

   // Estado para os dados do formulário de login
   const [formDataLogin, setFormDataLogin] = useState<LoginUserFormData>({
    email: '',
    password: '',
  });

  // Estado para a mensagem de erro
  const [error, setError] = useState<string | null>(null);

  // Função para lidar com mudanças nos campos do formulário de login
  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataLogin({
      ...formDataLogin,
      [name]: value,
    });
  };

  return (
    <form className='formLogin' onSubmit={handleSubmitLogin}>

                <div className="inputWrapper">
                  <label htmlFor="">Email</label>
                  <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formDataLogin.email}
                  onChange={handleChangeLogin} 
                  
                  />
                </div>

                <div className="inputWrapper">
                  <label htmlFor="">Senha</label>
                  <input 
                  type="password"
                  id="password"
                  name="password"
                  value={formDataLogin.password}
                  onChange={handleChangeLogin} 
                  />
                </div>

                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
             </form>
  )
  

}

export {FormLogin}