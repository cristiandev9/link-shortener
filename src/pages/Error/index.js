import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './error.css';

export default function Error() {
    return (
        <div className="error">
            <div className="notFound">
                <img src="././not-found.png" className='img-error' />
                <h1>Página não encontrada</h1>
                <Link to="/"><button><FiArrowLeft /> Voltar à página inicial</button></Link>
            </div>
        </div>
    )
}