import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, DollarSign, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "Stay ahead with regular updates and cutting-edge features that evolve with your business needs."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. Clear, competitive pricing that grows with your business."
  },
  {
    icon: Zap,
    title: "Simplicity",
    description: "Intuitive interface designed for ease of use. Get your team up and running in minutes, not hours."
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock expert support to ensure your business never skips a beat."
  }
];

const WhyClientsLoveUs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Our Clients Love Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our POS solution the preferred choice for businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border shadow-card hover:shadow-card-hover transition-smooth group cursor-pointer"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClientsLoveUs;