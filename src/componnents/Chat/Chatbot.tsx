import { useState } from "react";

const Chatbot = () => {
    const [mensagem, setMensagem] = useState<string>("");
    const [respostas, setRespostas] = useState<string[]>([]);

    const responderPergunta = (input: string) => {
        let resposta = "";
        if (input.includes("câncer")) {
            resposta = "O câncer é uma doença caracterizada pelo crescimento descontrolado de células.";
        } else if (input.includes("IA")) {
            resposta = "A Inteligência Artificial pode ser utilizada para detectar padrões em imagens médicas, ajudando no diagnóstico precoce.";
        } else {
            resposta = "Desculpe, não entendi sua pergunta.";
        }
        setRespostas([...respostas, `Você: ${input}`, `Bot: ${resposta}`]);
    };

    const handleEnviar = () => {
        if (mensagem.trim()) {
            responderPergunta(mensagem);
            setMensagem("");
        }
    };

    return (
        <div className="chatbot-container">
            <h2>Chatbot Científico</h2>
            <div className="chat-container">
                {respostas.map((resposta, index) => (
                    <p key={index}>{resposta}</p>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite sua pergunta..."
                />
                <button onClick={handleEnviar}>Enviar</button>
            </div>
        </div>
    );
};

export default Chatbot;
