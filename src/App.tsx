
import "./App.css";
import Chatbot from "./componnents/Chat/Chatbot.tsx";
import SlidebarPatrocinadores from "./componnents/architecture/SlidebarPartners.tsx";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Bem-vindo ao Projeto Cancer AI</h1>
                <p>
                    Explorando o futuro do tratamento do câncer com Inteligência
                    Artificial.
                </p>
            </header>

            <section className="about">
                <h2>Sobre o Projeto</h2>
                <p>
                    Nossa missão é utilizar IA para acelerar a descoberta de tratamentos
                    inovadores para o câncer.
                </p>
            </section>

            <section className="research">
                <h2>Pesquisas Recentes</h2>
                <ul>
                    <li>Estudo de IA para Diagnóstico Precoce do Câncer de Mama</li>
                    <li>Pesquisa sobre Terapias Genéticas e IA</li>
                    <li>AI e Imunoterapia no Tratamento de Câncer</li>
                </ul>
            </section>

            <section className="projects">
                <h2>Projetos em Andamento</h2>
                <div className="project-card">
                    <h3>Projeto de Diagnóstico Precoce</h3>
                    <p>Aplicando IA para detectar câncer em estágios iniciais.</p>
                </div>
            </section>
            <SlidebarPatrocinadores/>
            <Chatbot/>
            <footer>
                <p>&copy; 2025 Cancer AI - Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default App;
