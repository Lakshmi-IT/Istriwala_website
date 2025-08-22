import { Phone, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">Isthri Wala</h1>
            <span className="text-muted-foreground">Professional Laundry Service</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;