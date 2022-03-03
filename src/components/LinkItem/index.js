import { FiX, FiClipboard } from 'react-icons/fi';
import './link-item.css';

export default function LinkItem({ closeModal, content }) {

    async function CopyLink() {
        await navigator.clipboard.writeText(content.link);
        alert("Url copiada com sucesso");
    }

    return (
        <div className="modal-tab">
            <div className='div-row-one'>
                <h2>Link Encurtado</h2>
                <button className='btn-close-modal' onClick={closeModal}>
                    <FiX />
                </button>
            </div>
            <div className='div-row-two'>
                <span className='div-row-two-span'>{content.long_url}</span>

            </div>
            <div className='div-button'>
                <span>{content.link}</span>
                <button onClick={CopyLink}><FiClipboard color="#fff" /></button>
            </div>
        </div>
    )
} 