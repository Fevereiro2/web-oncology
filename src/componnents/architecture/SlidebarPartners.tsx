import  { useState, useRef, useEffect } from "react";
import "./SlidebarPatrocinadores.css";

const patrocinadores = [
    "https://cdn.discordapp.com/attachments/574651092533641232/1350278601647329393/IMG_4299.png?ex=67d6d131&is=67d57fb1&hm=81fb6e1672510703a6cb70e2ffe2e7aa0e0f40db2cde5893097a5f523d3131f2&?text=Patrocinador+1",
    "https://via.placeholder.com/150?text=Patrocinador+2",
    "https://via.placeholder.com/150?text=Patrocinador+3",
    "https://via.placeholder.com/150?text=Patrocinador+4",
    "https://via.placeholder.com/150?text=Patrocinador+5",
    // Adicione mais imagens de patrocinadores aqui
];

const SlidebarPatrocinadores = () => {
    const slidebarRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Movimento do mouse
    const handleMouseDown = (e: MouseEvent) => {
        if (slidebarRef.current) {
            setDragging(true);
            setStartX(e.clientX - slidebarRef.current.offsetLeft);
            setScrollLeft(slidebarRef.current.scrollLeft);
            slidebarRef.current.style.cursor = "grabbing"; // Muda o cursor enquanto arrasta
        }
    };

    const handleMouseLeave = () => {
        setDragging(false);
        if (slidebarRef.current) slidebarRef.current.style.cursor = "grab"; // Retorna ao cursor normal
    };

    const handleMouseUp = () => {
        setDragging(false);
        if (slidebarRef.current) slidebarRef.current.style.cursor = "grab"; // Retorna ao cursor normal
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!dragging || !slidebarRef.current) return;

        const x = e.clientX - slidebarRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Controle de velocidade
        slidebarRef.current.scrollLeft = scrollLeft - walk; // Atualiza a posição do scroll
    };

    useEffect(() => {
        if (slidebarRef.current) {
            slidebarRef.current.addEventListener("mousedown", handleMouseDown);
            slidebarRef.current.addEventListener("mouseleave", handleMouseLeave);
            slidebarRef.current.addEventListener("mouseup", handleMouseUp);
            slidebarRef.current.addEventListener("mousemove", handleMouseMove);

            // Limpeza ao desmontar o componente
            return () => {
                if (slidebarRef.current) {
                    slidebarRef.current.removeEventListener("mousedown", handleMouseDown);
                    slidebarRef.current.removeEventListener("mouseleave", handleMouseLeave);
                    slidebarRef.current.removeEventListener("mouseup", handleMouseUp);
                    slidebarRef.current.removeEventListener("mousemove", handleMouseMove);
                }
            };
        }
    }, [dragging, startX, scrollLeft]);

    // Auto-scroll para movimento contínuo
    useEffect(() => {
        const interval = setInterval(() => {
            if (slidebarRef.current) {
                slidebarRef.current.scrollLeft += 1; // Movimento contínuo
                // Se o scroll chega ao final, reinicia o movimento
                if (slidebarRef.current.scrollLeft >= slidebarRef.current.scrollWidth - slidebarRef.current.clientWidth) {
                    slidebarRef.current.scrollLeft = 0; // Reinicia
                }
            }
        }, 30); // Ajuste para controlar a velocidade do movimento

        // Limpeza ao desmontar o componente
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slidebar-container">
            <div className="slidebar" ref={slidebarRef}>
                {patrocinadores.map((logo, index) => (
                    <div className="patrocinador" key={index}>
                        <img src={logo} alt={`Patrocinador ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlidebarPatrocinadores;
