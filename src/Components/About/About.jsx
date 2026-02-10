import React, { useState , useEffect } from 'react'
import styles from './About.module.css' 



import { Phone, MessageCircle, Shield, Award, Users, Truck, Clock, Heart } from "lucide-react";
import shopTeam from "../../assets/shop-team.jpg"; // عدل المسار حسب مشروعك
import logo from "../../assets/logo.png"; // عدل المسار حسب مشروعك

const values = [
  { icon: Shield, title: "جودة مضمونة", description: "بنختار لحومنا بعناية من أجود المصادر. كل قطعة لحم بتمر بفحص دقيق عشان نضمنلك أحسن جودة." },
  { icon: Award, title: "خبرة سنين", description: "خبرة طويلة في مجال الجزارة والمشويات. نعرف ازاي نختار ونحضر اللحمة صح." },
  { icon: Users, title: "آلاف العملاء", description: "ثقة آلاف الأسر في الإسكندرية اللي بتعتمد علينا في احتياجاتها من اللحوم." },
  { icon: Truck, title: "توصيل سريع", description: "نوصلك طلبك لحد البيت في أسرع وقت. التوصيل متاح لجميع مناطق الإسكندرية." },
  { icon: Clock, title: "متاحين دايمًا", description: "موجودين من 8 الصبح لـ 12 بالليل كل يوم عشان نخدمك في أي وقت." },
  { icon: Heart, title: "خدمة بقلب", description: "بنحب شغلنا وبنحب نخدم عملائنا. رضاك هو هدفنا الأول." },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 py-12 text-center text-white">
        <img src={logo} alt="جزارة الغربية" className="h-24 w-auto mx-auto mb-4 bg-white rounded-xl p-2" />
        <h1 className="text-4xl font-black mb-4">من نحن</h1>
        <p className="text-lg max-w-2xl mx-auto">جزارة الغربية - اسم يعني الثقة - ملوك اللحمة البلدي في مصر</p>
      </section>

      {/* Story */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
            <p className="text-gray-700 mb-4">
              جزارة الغربية - اسم يعني الثقة. بدأنا رحلتنا بهدف واحد بسيط: نقدم للعميل لحمة بلدي طازة بجودة عالية وسعر مناسب.
            </p>
            <p className="text-gray-700 mb-4">
              تحت إدارة <strong>خلف محمد خالد</strong>، أصبحنا ملوك اللحمة البلدي في مصر. نفتخر بتقديم أجود أنواع اللحوم الطازة لعملائنا في الإسكندرية.
            </p>
            <p className="text-gray-700 mb-4">
              النهارده، إحنا فخورين بثقة آلاف الأسر اللي بتعتمد علينا يوميًا. وده اللي بيدفعنا نستمر ونطور أكتر.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="tel:19026" className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-600 transition">
                <Phone className="w-5 h-5" /> الخط الساخن 19026
              </a>
              <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition">
                <MessageCircle className="w-5 h-5" /> واتساب
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl blur-2xl opacity-20"></div>
            <img src={shopTeam} alt="فريق جزارة الغربية" className="relative rounded-2xl shadow-lg w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">ليه تختارنا؟</h2>
          <p className="text-gray-600 mb-4">القيم اللي بتميزنا وبتخلي عملائنا يرجعولنا</p>
          <div className="h-1 w-20 bg-yellow-500 rounded-full mx-auto"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <h2 className="text-3xl font-bold mb-4">جاهز تجرب؟</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">اتصل بينا دلوقتي واطلب أول طلب. هنوريك الفرق بنفسك!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:19026" className="px-6 py-3 bg-yellow-500 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-600 transition">
            <Phone className="w-6 h-6" /> الخط الساخن 19026
          </a>
          <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-500 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition">
            <MessageCircle className="w-6 h-6" /> واتساب
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
