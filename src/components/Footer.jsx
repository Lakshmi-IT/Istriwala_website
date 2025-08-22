import { Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Isthri Wala</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for professional laundry services. We handle your clothes with care and deliver excellence every time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-smooth">Washing & Cleaning</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Dry Cleaning</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Ironing & Pressing</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Free Pickup & Delivery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@isthriwala.com</span>
              </div>
              <p className="text-sm">
                Operating Hours:<br />
                Mon-Sun: 7:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Isthri Wala. All rights reserved. | Professional Laundry Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;