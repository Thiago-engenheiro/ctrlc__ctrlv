import './links.css';

const Card = ({ id, titulo, descricao, url, imagem, categoria, Subcategoria }) => {

    const getIconImage = (categoria) => {

        switch (categoria.toLowerCase()) {
            case 'codigo':
                return '/imagens/iconeTag/code-svgrepo-com.svg';
            case 'sites':
                return '/imagens/iconeTag/website-svgrepo-com.svg';
            case 'entretenimento':
                return '/imagens/iconeTag/entretenimento.svg';
            case 'youtube':
                return '/imagens/iconeTag/youtube.svg';    
            
            default:
                return '/imagens/iconeTag/question-sign.png'; 
        }
    };

    return (
        <div className="card">
            <div className="Continerimg">
                <video 
                    className="img" 
                    src={imagem} 
                    type="video/mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    alt={titulo}
                ></video>
            </div>

            <div className={`containerIconeImg ${categoria.toLowerCase()}`}> 
                <img
                    className="iconeImgCard"
                    src={getIconImage(categoria)}
                    alt="Ícone"
                />
            </div>

            <span>{titulo}</span>

            <p className="info">
                {descricao}
            </p>

            <a className="linkCard" href={url} target="_blank" rel="noopener noreferrer">
                Link para o código
            </a>
        </div>
    );
};

export default Card;