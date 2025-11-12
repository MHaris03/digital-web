import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const navItems = [
        { label: "The Agency", to: "/agency" },
        { label: "Our Services", to: "/services", hasDropdown: true },
        { label: "Our Work", to: "/work" },
        { label: "Contact Us", to: "/contact" },
        { label: "Blog", to: "/blog" },
    ];

    const serviceItems = [
        "Web Design & Development",
        "Search Engine Optimization",
        "Local Maps Optimization",
        "Social Media Marketing",
        "PPC Management",
        "Content Writing",
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <span className="text-xl font-bold text-gray-900">
                            Digital Marketing <span className="font-semibold">DM</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
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
                                        className="text-sm font-medium text-gray-700 hover:text-[#00A693] transition-colors flex items-center"
                                    >
                                        {label}
                                        <svg
                                            className="ml-1 w-4 h-4 text-gray-600 group-hover:text-[#00A693] transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {isServicesOpen && (
                                        <div className="absolute left-0 mt-2 w-60 rounded-md bg-white shadow-lg border border-gray-100 animate-fade-in">
                                            <ul className="py-2">
                                                {serviceItems.map((item) => (
                                                    <li key={item}>
                                                        <Link
                                                            to="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A693]"
                                                        >
                                                            {item}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={label}
                                    to={to}
                                    className="text-sm font-medium text-gray-700 hover:text-[#00A693] transition-colors"
                                >
                                    {label}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-5">
                        <a
                            href="tel:571-370-3422"
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-[#00A693] transition"
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
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 mt-2 py-4 animate-fade-in">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map(({ label, to }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    className="text-sm font-medium text-gray-700 hover:text-[#00A693] transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="bg-[#00A693] text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-[#00947F] transition shadow-sm"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                I'm Ready
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
