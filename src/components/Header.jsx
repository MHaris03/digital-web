import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
// import logo from "../assets/logo-transparent.png";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();
    let timeoutId = null;

    const navItems = [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about-us" },
        { label: "Our Services", to: "/services", hasDropdown: true },
        { label: "Our Work", to: "/work" },
        { label: "Contact Us", to: "/contact" },
        // { label: "Blog", to: "/blog" },
    ];

    const serviceItems = [
        { label: "Web Design & Development", to: "/services/web-design" },
        { label: "Search Engine Optimization", to: "/services/seo" },
        { label: "Local Maps Optimization", to: "/services/local-maps" },
        { label: "Social Media Marketing", to: "/services/social-media" },
        { label: "PPC Management", to: "/services/ppc-management" },
        { label: "Content Writing", to: "/services/content-writing" },
    ];

    const mobilenav = [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about-us" },
        { label: "Our Services", to: "/services" },
        { label: "Web Design & Development", to: "/services/web-design" },
        { label: "Search Engine Optimization", to: "/services/seo" },
        { label: "Local Maps Optimization", to: "/services/local-maps" },
        { label: "Social Media Marketing", to: "/services/social-media" },
        { label: "PPC Management", to: "/services/ppc-management" },
        { label: "Content Writing", to: "/services/content-writing" },
        { label: "Our Work", to: "/work" },
        { label: "Contact Us", to: "/contact" },

    ]

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
        setIsServicesOpen(false);
    }, [isMenuOpen, location.pathname]);


    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md transition-shadow duration-300 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/assets/logo-transparent.png"
                            alt="Sky Lift Group"
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
                                    onMouseEnter={() => {
                                        clearTimeout(timeoutId);
                                        setIsServicesOpen(true);
                                    }}
                                    onMouseLeave={() => {
                                        timeoutId = setTimeout(() => setIsServicesOpen(false), 200);
                                    }}
                                >
                                    <Link
                                        to={to}
                                        // className="text-sm font-medium text-gray-700 hover:text-[#00A693] transition-colors flex items-center gap-1"
                                        className={`text-sm font-medium transition-colors items-center gap-1 flex ${location.pathname.startsWith("/services")
                                            ? "text-[#00A693]"
                                            : "text-gray-700 hover:text-[#00A693]"
                                            }`}
                                    >
                                        {label} <ChevronDown className="w-4 h-4" />
                                    </Link>

                                    {isServicesOpen && (
                                        <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden animate-fadeIn pointer-events-auto z-50">
                                            {serviceItems.map(({ label, to }) => (
                                                <li key={label}>
                                                    <Link
                                                        to={to}
                                                        className={`block px-4 py-2 text-sm font-medium ${location.pathname === to
                                                            ? "bg-gray-100 text-[#00A693]"
                                                            : "text-gray-700 hover:bg-gray-200 hover:text-[#00A693]"
                                                            }`}
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
                                    className={`text-sm font-medium transition-colors ${location.pathname === to
                                        ? "text-[#00A693]"
                                        : "text-gray-700 hover:text-[#00A693]"
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
                            <X className="h-7 w-7 transition-transform duration-300 rotate-180 cursor-pointer" />
                        ) : (
                            <Menu className="h-7 w-7 transition-transform duration-300 cursor-pointer" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed top-0 left-0 h-screen w-full bg-white z-50 transform transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex items-center justify-between p-2 border-b">
                        <img src="/assets/logo-transparent.png" className="w-32 h-[32] object-contain" />
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-red-500 hover:text-[#00A693] transition cursor-pointer"
                        >
                            <X className="h-7 w-7" />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-4 p-6 text-lg overflow-y-auto h-[calc(100vh-80px)]">
                        {mobilenav.map(({ label, to }) => (
                            <div key={label} className="relative">
                                <Link
                                    to={to}
                                    onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
                                    className={`font-medium ${location.pathname === to ? "text-[#00A693]" : "text-gray-700"}`}
                                >
                                    {label}
                                </Link>
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
