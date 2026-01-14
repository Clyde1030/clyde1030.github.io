import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Database, Brain, Code2, TrendingUp, Cloud } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile2.png";
const skills = [{
  icon: Brain,
  title: "Machine Learning",
  description: "Building predictive models and implementing ML algorithms"
}, {
  icon: Database,
  title: "Data Engineering",
  description: "Designing and optimizing data pipelines and architectures"
}, {
  icon: Code2,
  title: "Programming",
  description: "Python, R, SQL, and modern data science tools"
}, {
  icon: TrendingUp,
  title: "Analytics",
  description: "Statistical analysis and data visualization"
}, {
  icon: Cloud,
  title: "Cloud Platform",
  description: "Building cloud infrastructure on AWS, GCP. Leveraging IaC like Terraform"
}];
const Home = () => {
  return <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

        <div className="relative z-10 flex flex-col items-center gap-8 w-full">
          <div className="relative w-full overflow-hidden shadow-[0_0_60px_hsl(var(--primary)/0.3)]" style={{
          maxHeight: "90%"
        }}>
            <img alt="Data Science Workspace" className="w-full h-auto border-0 opacity-85 object-cover object-top" src="/lovable-uploads/fd56ed54-d3cf-4adb-9750-4abcc3b7d01f.png" style={{
            marginBottom: "-10%"
          }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Hi! I'm Clyde
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  A passionate data detective who loves building data pipelines, turning data to clear action by ML, and visualizations.
                </p>
                <Link to="/about">
                  <Button size="lg" className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                    About Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-blue-200">
        <div className="max-w-4xl w-full text-center space-y-8 py-16">
          <div className="flex justify-center mb-6">
            <Avatar className="h-80 w-80 border-4 border-primary/20 shadow-glow">
              <AvatarImage src={profileImage} alt="Profile" className="object-cover object-[center_20%]" />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-foreground/90">Stepping into data science domain as an insurance data analyst, I believe data can inform us to make better decisions. As I grew deeper interest in the tech field, I am exploring ways to leverage modern technology to boost productivity, including Machine learning, data engineering, and Large Language Models. My goal is to make technology and the underlying machine learning techniques more accessible and easier for people to understand and to apply in practice. That's why I am pursuing a Master’s degree at the School of Information at UC Berkeley to broaden my horizon and expand my skill sets in data science.</p>
          </div>

          {/* Skills & Expertise Section */}
          <div className="w-full bg-white rounded-xl p-8 mt-8">
            <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map(skill => <Card key={skill.title} className="p-6 bg-card border-border hover:border-primary transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{skill.title}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <Link to="/projects">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Get in Touch
              </Button>
            </Link>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a href="https://github.com/Clyde1030" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/yushengclydelee/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:yushenglee@berkeley.edu" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;