import '../App.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (

        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'activo' : undefined)}>Inicio</NavLink> </li>
                    <li><NavLink to="/publicados" className={({ isActive }) => (isActive ? 'activo' : undefined)}>Animales Publicados</NavLink> </li>
                    <li><NavLink to="/perdidos" className={({ isActive }) => (isActive ? 'activo' : undefined)}>Denuncia Animal Perdido</NavLink> </li>
                    <li><NavLink to="/encontrados" className={({ isActive }) => (isActive ? 'activo' : undefined)}>Denuncia Animal Encontrado</NavLink> </li>
                    <li><NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'activo' : undefined)}>Sobre el proyecto</NavLink> </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;