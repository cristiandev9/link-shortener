import { FiLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './home.css';
import '../../components/LinkItem';
import '../../services/api';
import api from '../../services/api';
import { ReturnLinks, SaveLink } from '../../services/linkStorage';
import LinkItem from '../../components/LinkItem';

export default function Home() {
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    async function HandleShortLink() {

        try {
            const response = await api.post('/shorten', {
                long_url: link
            });
            setLink('');
            setShowModal(true);
            setData(response.data);
            SaveLink("bitly-short", response.data);
        } catch {
            alert('Ops... Algo deu errado');
        }
    }

    return (
        <div className="home">
            <div className='content-initial'>
                <div className="div-logo">
                    <img className="logoHome" src='./logo-link.png' />
                    <h1>Encurtador de Links</h1>
                </div>
                <div className="div-input">
                    <div className='s-input'>
                        <FiLink size={16} color="#509CE9" className='icon-link' />
                        <input
                            type="text"
                            placeholder="Digite seu link aqui!"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <button className="btn-enc-link" onClick={HandleShortLink}>Encurtar Link</button>

                    <Link to="Links"><FiLink size={20} color="#509CE9" className='access-link' /></Link>

                    {
                        showModal && (
                            <LinkItem
                                closeModal={() => setShowModal(false)}
                                content={data}
                            />
                        )
                    }

                </div>
            </div>
        </div>

    )
}