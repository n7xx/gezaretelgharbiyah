import React, { useState , useEffect } from 'react'
import styles from './Home.module.css' 
import { Link } from 'react-router-dom'
import CtaSection from './CtaSection/CtaSection'
import HeroSection from './HeroSection/HeroSection'
import FeaturesSection from './FeaturesSection/FeaturesSection'
import OffersSection from './OffersSection/OffersSection'
import ProductsPreview from './ProductsPreview/ProductsPreview'
import DeliverySection from './DeliverySection/DeliverySection'
import TestimonialsSection from './TestimonialsSection/TestimonialsSection'

export default function Home() {
    const [Home, setHome] = useState()
  return (
    <div>
   <div className="font-sans bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <OffersSection />
      <TestimonialsSection />
      <DeliverySection />
      <CtaSection />
    </div>

    </div>
  )
}
