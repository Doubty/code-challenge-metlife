import './style.css'
import { useNavigate } from 'react-router-dom';

function Header({ name }: { name: string }) {

    const navigate = useNavigate();

    return (
        <>
            <header onClick={() => name === 'Pyschonauts - tela principal' ? navigate('/favoriteList') : navigate('/')} className="headerContent">
                <span>{name}</span>
            </header>
        </>
    );
}

export default Header;
