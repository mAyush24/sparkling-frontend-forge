import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      description: "Modern e-commerce solution with advanced analytics and user management."
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development", 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      description: "Secure and intuitive mobile banking application with biometric authentication."
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise Software",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      description: "Comprehensive healthcare management platform for hospitals and clinics."
    },
    {
      title: "Real Estate Portal",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      description: "Full-featured real estate platform with virtual tours and AI-powered recommendations."
    },
    {
      title: "Logistics Dashboard",
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Real-time logistics tracking and analytics dashboard for supply chain optimization."
    },
    {
      title: "EdTech Learning Platform",
      category: "Education Technology",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      description: "Interactive learning platform with AI-powered personalized learning paths."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">Our Work</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful projects across various industries. 
              Each project showcases our commitment to excellence and innovation.
            </p>
          </div>

          {/* Project Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-card border shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-card rounded-lg p-8 border">
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;