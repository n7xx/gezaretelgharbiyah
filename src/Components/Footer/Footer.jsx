import React, { useState , useEffect } from 'react'
import styles from './Footer.module.css' 
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import Logo from "../../assets/logo.png";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={Logo} 
                alt="جزارة الغربية" 
                className="h-16 w-auto object-contain bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-2">
              جزارة الغربية - اسم يعني الثقة
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              ملوك اللحمة البلدي في مصر. لحوم طازة ومشويات مميزة بأفضل الأسعار.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/products", label: "المنتجات" },
                { href: "/offers", label: "العروض" },
                { href: "/about", label: "من نحن" },
                { href: "/contact", label: "تواصل معنا" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:19026"
                  className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span className="font-bold text-lg">الخط الساخن: 19026</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <span>الإسكندرية - توصيل لجميع المناطق</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span>يوميًا من 8 صباحًا - 12 منتصف الليل</span>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">تابعنا</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=100088041447494"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="فيسبوك"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
                aria-label="انستجرام"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-yellow-500 font-semibold mb-1">اطلب الآن!</p>
              <p className="text-sm text-gray-400">التوصيل متاح لجميع مناطق الإسكندرية</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} جزارة الغربية - خلف محمد خالد - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
