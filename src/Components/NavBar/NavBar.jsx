import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import Logo from "../../assets/logo.png";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/products", label: "المنتجات" },
    { href: "/offers", label: "العروض" },
    { href: "/about", label: "من نحن" },
    { href: "/contactUs", label: "تواصل معنا" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-200 py-2">
        <div className="container-rtl flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:19026"
              className="flex items-center gap-1 hover:text-yellow-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-bold">الخط الساخن: 19026</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-gray-300">
            <MapPin className="w-4 h-4" />
            <span>الإسكندرية - توصيل لجميع المناطق</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-rtl py-1.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="جزارة الغربية - اسم يعني الثقة"
              className="h-14 w-auto object-contain drop-shadow-md"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
              🌙 / ☀️
            </button>

            {/* Cart */}
            <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
              🛒 Cart
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              واتساب
            </a>

            {/* Call */}
            <a
              href="tel:19026"
              className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition flex items-center gap-1"
            >
              <Phone className="w-4 h-4" /> 19026
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex gap-2 mt-4">
              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-1 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 transition"
              >
                واتساب
              </a>
              <a
                href="tel:19026"
                className="flex-1 px-3 py-1 bg-yellow-500 text-white rounded-lg text-center hover:bg-yellow-600 transition flex items-center justify-center gap-1"
              >
                <Phone className="w-4 h-4" /> 19026
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
