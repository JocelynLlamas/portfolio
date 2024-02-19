import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon00.jpg';
import { FaRegEnvelope, FaMobile, FaFile } from 'react-icons/fa';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [email, setEmail] = useState("llamasjocelyn@outlook.com");
    const [phone, setPhone] = useState("4181189299");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setAlertMessage(`"${email}" was copy to clipboard`);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const handleCopyPhone = () => {
        navigator.clipboard.writeText(phone);
        setAlertMessage(`"${phone}" was copy to clipboard`);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const DownloadButton = () => {
        // const fileUrl = '../assets/cv/CV-JocelynLlamas.pdf'; // URL del archivo que deseas descargar
        // const link = document.createElement('a');
        // link.href = URL.createObjectURL(new Blob([fileUrl]));
        // link.setAttribute('download', 'CV-JocelynLlamas.pdf'); // Nombre del archivo que se descargará
        // document.body.appendChild(link);
        // link.click();

        const fileName = 'bgA.jpg'; // Nombre del archivo que deseas descargar
        const fileUrl = `../assets/img/${fileName}` // Ruta relativa del archivo
        const link = document.createElement('a');
        console.log(link);
        link.href = URL.createObjectURL(new Blob([fileUrl]));
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/mar%C3%ADa-jocelyn-llamas-de-la-torre-08aa36251/'><img src={navIcon1} alt='' /></a>
                            <a href='https://github.com/JocelynLlamas'><img src={navIcon2} alt='' /></a>
                            <a onClick={handleCopy} className="iconLink">
                                <FaRegEnvelope />
                            </a>

                            <a onClick={handleCopyPhone} className="iconLink">
                                <FaMobile />
                            </a>
                            <a onClick={DownloadButton} className="iconLink">
                                <FaFile />
                            </a>
                            {showAlert && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    {alertMessage}
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() => setShowAlert(false)}
                                    ></button>
                                </div>
                            )}
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

