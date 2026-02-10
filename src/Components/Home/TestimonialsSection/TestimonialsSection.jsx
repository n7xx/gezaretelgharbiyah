import React, { useState , useEffect } from 'react'
import styles from './TestimonialsSection.module.css' 
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "أحمد محمود",
    location: "سيدي جابر",
    rating: 5,
    text: "أفضل جزارة في إسكندرية بجد! اللحمة طازة جداً والخدمة ممتازة. التوصيل سريع ودايماً بيوصلوا في الميعاد.",
  },
  {
    id: 2,
    name: "سارة أحمد",
    location: "سموحة",
    rating: 5,
    text: "المشويات عندهم تحفة! الكباب والكفتة طعمهم مميز جداً. أنصح الكل يجربوا صينية المشويات المشكلة.",
  },
  {
    id: 3,
    name: "محمد عبدالله",
    location: "المنتزه",
    rating: 5,
    text: "بقالي سنين بتعامل معاهم والجودة ثابتة دايماً. الأسعار كويسة جداً مقارنة بالجودة اللي بتاخدها.",
  },
  {
    id: 4,
    name: "نورهان خالد",
    location: "جليم",
    rating: 5,
    text: "خدمة العملاء عندهم رائعة جداً! دايماً بيساعدوني أختار قطع اللحمة المناسبة للأكلة اللي هعملها.",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 h-full">
    <div className="mb-4">
      <Quote className="w-8 h-8 text-yellow-400" />
    </div>
    <div className="flex gap-1 mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
    <p className="text-gray-700 text-sm mb-4">{testimonial.text}</p>
    <div className="border-t border-gray-200 pt-4">
      <p className="font-bold text-gray-900">{testimonial.name}</p>
      <p className="text-gray-500 text-sm">{testimonial.location}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-500 rounded-full px-4 py-2 mb-4">
          <Star className="w-5 h-5" />
          <span className="font-semibold">آراء عملائنا</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">ليه عملاءنا بيحبونا؟</h2>
        <p className="text-gray-600 text-lg mb-12">
          آراء حقيقية من عملاء جربوا منتجاتنا وخدماتنا
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <div className="flex -space-x-2">
              {["أ", "س", "م", "ن"].map((letter, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-yellow-100 border-2 border-white flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-yellow-500">{letter}</span>
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-gray-900">+500</span>
              <span className="text-gray-500"> عميل سعيد</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

