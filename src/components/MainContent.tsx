import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, MapPin } from "lucide-react";

const MainContent = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Welcome to TaskNova Solutions Pvt. Ltd.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We're growing our Communications & Fulfillment team in Noida (on-site). Entry-level, full-time role with paid training and a clear growth path.
          </p>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-elegant"
          >
            Explore Roles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growing Company</h3>
              <p className="text-muted-foreground">Join a dynamic team that's expanding rapidly in the communications sector.</p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paid Training</h3>
              <p className="text-muted-foreground">Entry-level positions with comprehensive training programs and growth opportunities.</p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Noida Location</h3>
              <p className="text-muted-foreground">On-site opportunities in Noida with a collaborative work environment.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;