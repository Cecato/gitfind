import { useState } from 'react';
import {Header} from '../../components/Header';
import background from "../../assets/background.png"
import ItemList from '../../components/ItemList';
import './styles.css';

function App() {
    const [user, setUser] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [repos, setRepos] = useState(null);

    const handleGetData = async () => {
        const userData = await fetch(`https://api.github.com/users/${user}`);
        const newUser = await userData.json();

        if(newUser.name){
            const {avatar_url, name, bio} = newUser;
            setCurrentUser({avatar_url, name, bio});

            const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
            const newRepos = await reposData.json();

            if(newRepos.length){
                setRepos(newRepos);
            }
        }
        
    }

    return (
        <div className="App">
            <Header/>
            <div className='conteudo'>

                <img src={background} alt="github img" className='background'/>

                <div className='info'>
                    <div>
                        <input 
                            name='usuario' 
                            placeholder='@username'
                            value={user}
                            onChange={event => setUser(event.target.value)}
                            />
                        <button onClick={handleGetData}>Buscas</button>
                    </div>

                    {currentUser?.name ?(
                        <>
                        <div className='perfil'>
                            <img 
                                src="https://avatars.githubusercontent.com/u/69871760?v=4" 
                                className='profile' 
                                alt='profile'/>

                            <div>
                                <h3>Gustavo Cecato</h3>
                                <span>@gu_cecato</span>
                                <p>Descrição</p>
                            </div>
                        </div>
                        <hr/>
                        </>
                        
                    ): null}



                    {repos?.length ?(
                        <>
                        <div>
                            <h4 className='repositorio'>Repositório</h4>
                            <ItemList 
                                title="teste1" 
                                description="teste1"/>
                            <ItemList 
                                title="teste1" 
                                description="teste1"/>
                            <ItemList 
                                title="teste1" 
                                description="teste1"/>
                            <ItemList 
                                title="teste1" 
                                description="teste1"/>
                        </div>
                        </>
                    ): null}

                </div>
                
            </div>
            
        </div>
    );
};

export default App;