import {Header} from '../../components/Header';
import background from "../../assets/background.png"
import './styles.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <div className='conteudo'>

                <img src={background} alt="github img" className='background'/>

                <div className='info'>
                    <div>
                        <input name='usuario' placeholder='@username'/>
                        <button>Buscas</button>
                    </div>

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

                </div>
                
            </div>
            
        </div>
    );
};

export default App;