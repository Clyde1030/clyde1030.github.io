import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import profileImage from "@/assets/profile2.png";

const Projects = () => {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="w-full max-w-7xl mx-auto flex gap-8">
        {/* Left Sidebar */}
        <aside className="hidden md:block w-48 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            {/* Profile Photo */}
            <div>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover border-2 border-primary/20"
              />
            </div>
            
            {/* Name & Title */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground">Clyde Lee</h3>
              <p className="text-sm text-muted-foreground">Data Scientist & Engineer</p>
            </div>
            
            {/* Social Links */}
            <div className="space-y-2">
              <a 
                href="https://www.linkedin.com/in/yushengclydelee/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Clyde1030" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a 
                href="https://medium.com/@yushenglee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">Medium</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map(project => (
              <Card key={project.title} className="p-6 bg-card border-border hover:border-primary transition-all group">
                <div className="space-y-4">
                  <Link to={`/projects/${project.id}`}>
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <a href="https://github.com/Clyde1030" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Github className="w-5 h-5 mr-2" />
                View All on GitHub
              </Button>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;