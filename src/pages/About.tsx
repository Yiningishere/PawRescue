import { Heart, Users, Award, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  const stats = [
    {
      value: "2,500+",
      label: "Dogs Rescued",
      icon: <Heart className="w-6 h-6 text-primary" />,
    },
    {
      value: "500+",
      label: "Active Volunteers",
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      value: "10+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6 text-primary" />,
    },
    {
      value: "100%",
      label: "Commitment",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
      bio: "With over 15 years of animal rescue experience, Sarah founded PawRescue to make a lasting impact on stray dog welfare.",
    },
    {
      name: "Michael Chen",
      role: "Head Veterinarian",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2787&auto=format&fit=crop",
      bio: "Dr. Chen brings his expertise in veterinary medicine to ensure all rescued dogs receive the best medical care.",
    },
    {
      name: "Emily Rodriguez",
      role: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2787&auto=format&fit=crop",
      bio: "Emily manages our network of dedicated volunteers and ensures smooth operation of our rescue programs.",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-muted-foreground">
            At PawRescue, we are dedicated to rescuing, rehabilitating, and rehoming stray dogs,
            while working towards a future where every dog has a loving home.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  {stat.icon}
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg">
            <p className="text-muted-foreground mb-4">
              Founded in 2014, PawRescue began as a small group of passionate animal lovers
              determined to make a difference in the lives of stray dogs in our community.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a handful of volunteers has grown into a comprehensive rescue
              organization with a dedicated team of staff, volunteers, and supporters.
            </p>
            <p className="text-muted-foreground">
              Today, we operate a network of foster homes, partner with local veterinarians,
              and run educational programs to promote responsible pet ownership and reduce
              the stray dog population.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <p className="text-center text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Compassion</h3>
              <p className="text-muted-foreground">
                We treat every dog with love and care, ensuring their well-being is our top priority.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with transparency and honesty in all our actions and decisions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-muted-foreground">
                We believe in the power of community collaboration to create lasting change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}