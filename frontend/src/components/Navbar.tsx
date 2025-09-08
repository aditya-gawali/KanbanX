import { Link } from "react-router"

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 glass-dark transition-all duration-300" id="navbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-white">
                                Kanban<span className="text-green-400">X</span>
                            </h1>
                        </div>
                        <div className="hidden md:block ml-10">
                            <div className="flex items-baseline space-x-4">
                                <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Features</a>
                                <a href="#demo" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Demo</a>
                                <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Pricing</a>
                                <a href="#testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Testimonials</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button id="themeToggle" className="text-gray-300 hover:text-white transition">
                            <i className="fas fa-moon"></i>
                        </button>
                        {/* <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                            Login
                        </Link> */}
                        <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                            Get Started
                        </Link>
                        <button id="mobileMenu" className="md:hidden text-gray-300 hover:text-white">
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobileMenuContent" className="hidden md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-dark">
                    <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
                    <a href="#demo" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Demo</a>
                    <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
                    <a href="#testimonials" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar