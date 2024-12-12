import LogoImage from '../../assets/react-core-concepts.png';
import './header.css';

export default function Header(){
    return (
        <header>
            <img src={LogoImage} alt="Stylized atom" />
            <h1>React Essentials 123</h1>
            <p>
            Fundamental React concepts you will need for almost any app you are
            going to build!
            </p>
        </header>
    )
}