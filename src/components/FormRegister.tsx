import{useState} from 'react'

// Definindo a interface dos dados do formulário de Cadastro
interface RegisterUserFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword:string;
    birthdate: Date;
  }

const FormRegister = () =>{

    const handleSubmitRegister = async (e:React.FormEvent) =>{
        e.preventDefault()
    
        // Validação simples
        if ( !formDataRegister.name||!formDataRegister.email || !formDataRegister.password) {
          setError('Todos os campos são obrigatórios.');
          return;
        }
    
        console.log(JSON.stringify(formDataRegister))
    
        setError(null); // Limpa mensagens de erro, se houver
    
        try{
          const response = await fetch('http://localhost:3001/auth/register',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataRegister)
          })
    
          if (!response.ok) {
            throw new Error('Erro na submissão do formulário');
          }
          const data = await response.json();
          console.log('Usuário logado com sucesso:', data);
    
          setFormDataRegister({name:'', email: '', password: '' ,confirmPassword:'', birthdate:''});
    
          // faz o login com os dados do usuario novo
          
        } catch (error) {
          console.error('Erro:', error);
          setError('Ocorreu um erro ao enviar o formulário.');
        }
      }
    
    // Estado para os dados do formulário de Registro
    const [formDataRegister, setFormDataRegister] = useState<RegisterUserFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword:'',
        birthdate:''
    })

    // Estado para a mensagem de erro
    const [error, setError] = useState<string | null>(null);


    // Função para lidar com mudanças nos campos do formulário de Registro
    const handleChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormDataRegister({
        ...formDataRegister,
        [name]: value,
        });
    };



    return(
        <form className='formRegister' onSubmit={handleSubmitRegister}>
                <div className="inputWrapper">
                  <label htmlFor="">Name</label>
                  <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formDataRegister.name}
                  onChange={handleChangeRegister} 
                  
                  />
                </div>


                <div className="inputWrapper">
                  <label htmlFor="">Email</label>
                  <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formDataRegister.email}
                  onChange={handleChangeRegister} 
                  
                  />
                </div>

                <div className="inputWrapper">
                  <label htmlFor="">Senha</label>
                  <input 
                  type="password"
                  id="password"
                  name="password"
                  value={formDataRegister.password}
                  onChange={handleChangeRegister} 
                  />
                </div>

                <div className="inputWrapper">
                  <label htmlFor="">Confirmar Senha</label>
                  <input 
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formDataRegister.confirmPassword}
                  onChange={handleChangeRegister} 
                  />
                </div>

                <div className="inputWrapper">
                  <label htmlFor="">Data Nascimento</label>
                  <input 
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={formDataRegister.birthdate}
                  onChange={handleChangeRegister} 
                  />
                </div>

                <button type="submit">Register</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
             </form>
    )
}

export {FormRegister}