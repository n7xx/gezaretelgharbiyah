import React, { useState , useEffect } from 'react'
import styles from './ContactUs.module.css' 






import { Phone, MessageCircle, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import logo from "../../assets/logo.png"; // عدل المسار حسب مشروعك

const ContactUs = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 py-12 text-center text-white">
        <img src={logo} alt="جزارة الغربية" className="h-20 w-auto mx-auto mb-4 bg-white rounded-xl p-2" />
        <h1 className="text-4xl font-black mb-4">تواصل معنا</h1>
        <p className="text-lg max-w-2xl mx-auto">نحن هنا لخدمتك - اتصل أو ابعتلنا في أي وقت</p>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">معلومات التواصل</h2>

            <div className="space-y-6">
              {/* Phone */}
              <a href="tel:19026" className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">الخط الساخن</h3>
                  <p className="text-2xl font-black" dir="ltr">19026</p>
                  <p className="text-sm text-gray-500">اضغط للاتصال مباشرة</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">واتساب</h3>
                  <p className="text-gray-600 text-lg">ابعتلنا رسالة</p>
                  <p className="text-sm text-gray-500">رد سريع على جميع الاستفسارات</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">العنوان</h3>
                  <p className="text-gray-600">الإسكندرية</p>
                  <p className="text-sm text-gray-500">توصيل لجميع مناطق الإسكندرية</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">مواعيد العمل</h3>
                  <p className="text-gray-600">يوميًا من 8 صباحًا - 12 منتصف الليل</p>
                  <p className="text-sm text-gray-500">متاحين 7 أيام في الأسبوع</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-bold mb-4">تابعنا على</h3>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=100088041447494" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-800 hover:text-white transition">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="tel:19026" className="flex-1 px-4 py-3 bg-yellow-500 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-600 transition">
                <Phone className="w-5 h-5" /> الخط الساخن 19026
              </a>
              <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-3 bg-green-500 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition">
                <MessageCircle className="w-5 h-5" /> واتساب
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold mb-6">موقعنا</h2>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109375.65772649!2d29.86180839999999!3d31.2000682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع جزارة الغربية في الإسكندرية"
              />
            </div>
            <p className="text-gray-500 text-sm mt-4 text-center">
              نوصل لجميع مناطق الإسكندرية - اتصل بينا لمعرفة تفاصيل التوصيل
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
