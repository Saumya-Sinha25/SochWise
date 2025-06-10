
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Tours = () => {
  const tours = [
    {
      id: 1,
      title: "Northern Lights Adventure",
      description: "Experience the magical aurora borealis in Iceland's pristine wilderness.",
      duration: "3 days",
      price: "$899"
    },
    {
      id: 2,
      title: "Golden Circle Classic",
      description: "Discover Iceland's most famous natural wonders in one incredible day.",
      duration: "1 day",
      price: "$299"
    },
    {
      id: 3,
      title: "Glacier Hiking Expedition",
      description: "Walk on ancient ice formations and explore crystal blue ice caves.",
      duration: "2 days",
      price: "$649"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Adventures</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Embark on unforgettable journeys through Iceland's most spectacular landscapes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="group cursor-pointer">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {tour.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Duration: <span className="font-semibold">{tour.duration}</span>
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {tour.price}
                    </div>
                  </div>
                  <button className="mt-4 flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
