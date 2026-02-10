import React, { useState , useEffect } from 'react'
import styles from './ProductsPreview.module.css' 







import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import meatSlices from "../../../assets/meat-380.jpg";
import kabab from "../../../assets/kabab-420.jpg";
import ketf from "../../../assets/ketf-350.jpg";
import sogo2 from "../../../assets/sogo2-330.jpg";
const categories = [
  { id: 1, title: "لحم مليس", description: "لحم بلدي طازة بدون عظم", image: meatSlices, price: "380 جنيه/كيلو" },
  { id: 2, title: "كباب حلة", description: "قطع كباب مميزة للطبخ", image: kabab, price: "420 جنيه/كيلو" },
  { id: 3, title: "كتف", description: "لحم كتف طازة", image: ketf, price: "350 جنيه/كيلو" },
  { id: 4, title: "سجق", description: "سجق بلدي طازة", image: sogo2, price: "330 جنيه/كيلو" },
];

const ProductsPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">منتجاتنا</h2>
          <p className="text-gray-600 text-lg">تشكيلة متنوعة من اللحوم الطازة والمشويات اللذيذة</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/products"
              className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-md">
                    {category.price}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-green-600 transition"
          >
            شوف كل المنتجات
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;

