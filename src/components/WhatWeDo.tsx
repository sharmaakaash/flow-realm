import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, BarChart3, Users, CreditCard, Smartphone, Cloud } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Point of Sale",
    description: "Complete POS solution with inventory management, order processing, and real-time analytics"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Deep insights into sales performance, customer behavior, and business trends"
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Build lasting relationships with comprehensive customer profiles and loyalty programs"
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Accept all payment methods with secure, fast transaction processing"
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Take your business anywhere with mobile POS capabilities and offline functionality"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamlessly sync data across all locations with reliable cloud infrastructure"
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive POS solutions tailored to streamline your business operations and drive growth across all touchpoints
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border shadow-card hover:shadow-card-hover transition-smooth group cursor-pointer h-full"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;