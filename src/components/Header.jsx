import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "../assets/logo-transparent.png";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about-us" },
        { label: "Our Services", to: "/services", hasDropdown: true },
        { label: "Our Work", to: "/work" },
        { label: "Contact Us", to: "/contact" },
        { label: "Blog", to: "/blog" },
    ];

    const serviceItems = [
        { label: "Web Design & Development", to: "/services/web-design" },
        { label: "Search Engine Optimization", to: "/services/seo" },
        { label: "Local Maps Optimization", to: "/services/local-maps" },
        { label: "Social Media Marketing", to: "/services/social-media" },
        { label: "PPC Management", to: "/services/ppc" },
        { label: "Content Writing", to: "/services/content-writing" },
    ];

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md transition-shadow duration-300 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Sky Lift Marketing"
                            className="w-40 h-20 object-contain md:w-40 transition-transform duration-300"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map(({ label, to, hasDropdown }) =>
                            hasDropdown ? (
                                <div
                                    key={label}
                                    className="relative group"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    <Link
                                        to={to}
                                        className="text-sm font-medium text-gray-700 hover:text-[#00A693] transition-colors flex items-center gap-1"
                                    >
                                        {label} <ChevronDown className="w-4 h-4" />
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    {isServicesOpen && (
                                        <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden animate-fadeIn pointer-events-auto z-50">
                                            {serviceItems.map(({ label, to }) => (
                                                <li key={label}>
                                                    <Link
                                                        to={to}
                                                        onClick={() => setIsServicesOpen(false)}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A693]"
                                                    >
                                                        {label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={label}
                                    to={to}
                                    className={`text-sm font-medium transition-colors ${location.pathname === to ? "text-[#00A693]" : "text-gray-700 hover:text-[#00A693]"
                                        }`}
                                >
                                    {label}
                                </Link>
                            )
                        )}

                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-5">
                        <a
                            href="tel:5614293999"
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-[#00A693]"
                        >
                            <Phone className="mr-2 h-4 w-4 text-[#00A693]" />
                            (561) 429-3999
                        </a>
                        <Link
                            to="/contact"
                            className="bg-[#00A693] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#00947F] transition shadow-sm"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-700 hover:text-[#00A693] transition"
                    >
                        {isMenuOpen ? (
                            <X className="h-7 w-7 transition-transform duration-300 rotate-180" />
                        ) : (
                            <Menu className="h-7 w-7 transition-transform duration-300" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed top-0 left-0 h-screen w-full bg-white z-50 transform transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex items-center justify-between p-4 border-b">
                        <img src={logo} className="w-32 h-auto object-contain" />
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-red-500 hover:text-[#00A693] transition"
                        >
                            <X className="h-7 w-7" />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-4 p-6 text-lg overflow-y-auto h-[calc(100vh-80px)]">
                        {navItems.map(({ label, to, hasDropdown }) => (
                            <div key={label} className="relative">
                                <Link
                                    to={to}
                                    onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
                                    className={`font-medium ${location.pathname === to ? "text-[#00A693]" : "text-gray-700"}`}
                                >
                                    {label} {hasDropdown && <ChevronDown className="inline w-4 h-4 ml-1" />}
                                </Link>

                                {/* Mobile dropdown */}
                                {hasDropdown && (
                                    <div className={`${isServicesOpen ? "max-h-96" : "max-h-0"} overflow-hidden transition-all duration-300`}>
                                        <ul className="mt-2 space-y-2 pl-4">
                                            {serviceItems.map(({ label, to }) => (
                                                <li key={label}>
                                                    <Link
                                                        to={to}
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="block text-gray-700 hover:text-[#00A693]"
                                                    >
                                                        {label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}

                        <Link
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-[#00A693] text-white px-4 py-3 rounded-lg text-center text-base font-medium hover:bg-[#00947F] transition shadow-sm mt-4"
                        >
                            I’m Ready
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};
