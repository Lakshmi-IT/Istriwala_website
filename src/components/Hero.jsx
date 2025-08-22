import { HeroButton } from './ui/hero-button';
import { CheckCircle, Clock, Shield } from 'lucide-react';
import heroImage from '../assets/hero-laundry.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Professional
              <span className="block text-accent">Laundry Service</span>
              You Can Trust
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Expert dry cleaning, washing, and ironing services for your precious clothes. 
              We handle your garments with the utmost care and attention to detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <HeroButton variant="hero">
                Book Service Now
              </HeroButton>
              <HeroButton variant="hero-outline">
                Call +91 98765 43210
              </HeroButton>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-blue-100">Free Pickup & Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-blue-100">24-48 Hour Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-blue-100">100% Safe & Secure</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Professional laundry service"
              className="rounded-lg shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;