import { FiArrowLeft, FiTrash, FiLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './links.css';
import { ReturnLinks } from '../../services/linkStorage';
import { useEffect, useState } from 'react';
import LinkItem from '../../components/LinkItem';

export default function Links() {

    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function GetLinks() {
            const gLinks = await ReturnLinks('bitly-short');

            if (gLinks.lenght === 0) {
                console.log('Lista Vazia')
            }
            setMyLinks(gLinks);
        }
        GetLinks();
    }, []);

    function ExecuteItem(link) {
        setData(link);
        setShowModal(true);

    }

    return (
        <div className="links">
            <div className='container-initial'>
                <div className='content'>
                    <div className="nav">
                        <Link to="/">
                            <FiArrowLeft size={26} color="#509CE9" className='icon-link' />
                        </Link>
                        <h1>Meus Links</h1>
                    </div>
                    <div className='div-itens-link'>

                        {
                            myLinks.map(
                                (llink) => (
                                    <div key={llink.id} className='links-item' onClick={dataItem => ExecuteItem(llink)}>
                                        <span className='span-link'>{llink.long_url}</span>
                                        <FiTrash size={17} color="#FF5454" className='icon-trash' />
                                    </div>
                                )
                            )
                        }
                    </div>


                </div>
            </div>


            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )

            }
        </div>
    )
}