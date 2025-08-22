import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Droplets, Wind, Zap } from 'lucide-react';
import ironingImage from '../assets/ironing-service.jpg';
import dryCleaningImage from '../assets/dry-cleaning.jpg';

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Washing & Cleaning",
      description: "Deep cleaning for all types of fabrics with premium detergents and fabric care.",
      image: dryCleaningImage,
      features: ["Stain removal", "Fabric softening", "Color protection", "Gentle cleaning"]
    },
    {
      icon: Wind,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate and special garments that need expert care.",
      image: dryCleaningImage,
      features: ["Delicate fabrics", "Suit cleaning", "Formal wear", "Special materials"]
    },
    {
      icon: Zap,
      title: "Ironing & Pressing",
      description: "Crisp, professional ironing that makes your clothes look brand new every time.",
      image: ironingImage,
      features: ["Steam pressing", "Crease removal", "Professional finish", "Quick service"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive laundry solutions for all your clothing needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth cursor-pointer border-0 shadow-card">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-smooth"></div>
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;