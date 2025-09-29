import { useState, useEffect } from 'react';
import {
    FaRegEnvelope,
    FaMobile,
    FaFile,
    FaBars,
    FaTimes,
    FaCopy,
    FaCheck
} from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import { IoMailOutline, IoCallOutline } from 'react-icons/io5';
import navIcon1 from '../assets/img/nav-icon1.jpg';
import navIcon2 from '../assets/img/nav-icon00.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('about');
    const [scrolled, setScrolled] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [copiedField, setCopiedField] = useState(null);

    const email = "llamasjocelyn@outlook.com";
    const phone = "4181189299";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    }, [scrolled]);

    const copyToClipboard = async (text, label, field) => {
        try {
            await navigator.clipboard.writeText(text);
            setToastMessage(`${label} copiado al portapapeles ✔️`);
            setShowToast(true);
            setCopiedField(field);

            setTimeout(() => {
                setShowToast(false);
                setCopiedField(null);
            }, 3000);
        } catch (err) {
            setToastMessage('Error al copiar ❌');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/CV-JocelynLlamas.pdf';
        link.setAttribute('download', 'CV-JocelynLlamas.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
    ];

    return (
        <>
            <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2 border-b border-gray-100'
                    : 'bg-white/80 backdrop-blur-lg py-3'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center me-2">
                            <span className="text-white font-bold text-sm">JL</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            Jocelyn Llamas
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navItems.map(item => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setActiveLink(item.id)}
                                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${activeLink === item.id
                                        ? 'text-gray-900 bg-gray-100/80'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'
                                    }`}
                            >
                                {item.label}
                                {activeLink === item.id && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                                )}
                            </a>
                        ))}
                    </nav>


                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="px-4 py-4 border-t border-gray-100 bg-white/95 backdrop-blur-xl">
                        <nav className="flex flex-col space-y-2">
                            {navItems.map(item => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => {
                                        setActiveLink(item.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${activeLink === item.id
                                            ? 'text-gray-900 bg-blue-50 border-l-4 border-blue-500'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                       
                    </div>
                </div>
            </header>

            {/* Toast Notification Mejorado */}
            {showToast && (
                <div className="fixed top-5 right-5 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl z-50 text-sm animate-fade-in-out backdrop-blur-sm border border-gray-700">
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>{toastMessage}</span>
                    </div>
                </div>
            )}
        </>
    );
};