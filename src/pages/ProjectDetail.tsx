import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, FileText, BookOpen } from "lucide-react";
import { projects } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import flightDelayDiagram from "@/assets/flight-delay-diagram.png";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  // Dummy images for demonstration - replace with actual project images
  const dummyImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
  ];

  const renderProjectLayout = () => {
    if (!project) return null;

    switch (project.id) {
      case "ml-pipeline":
        return renderStoryLayout();
      case "data-viz-dashboard":
        return renderCarouselLayout();
      case "nlp-sentiment":
        return renderMasonryLayout();
      case "etl-pipeline":
        return renderTimelineLayout();
      default:
        return renderStoryLayout();
    }
  };

  // Layout 1: Story Sections (for ml-pipeline)
  const renderStoryLayout = () => (
    <div className="space-y-8">
      <Card className="p-6 bg-card border-border">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {project?.longDescription}
        </p>
        <img 
          src={dummyImages[0]} 
          alt="Project overview" 
          className="w-full rounded-lg shadow-lg"
        />
      </Card>

      <Card className="p-6 bg-card border-border">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img 
            src={dummyImages[1]} 
            alt="Implementation details" 
            className="w-full rounded-lg shadow-lg order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project?.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project?.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 rounded-lg bg-secondary/50 text-secondary-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
        <img 
          src={dummyImages[2]} 
          alt="Technology stack" 
          className="w-full rounded-lg shadow-lg"
        />
      </Card>
    </div>
  );

  // Layout 2: Carousel + Sections (for data-viz-dashboard / Flight Delay Analysis)
  const renderCarouselLayout = () => (
    <div className="space-y-8">
      <Card className="p-6 bg-card border-border">
        <img 
          src={flightDelayDiagram} 
          alt="Flight Delay Analysis Pipeline Diagram" 
          className="w-full rounded-lg shadow-lg"
        />
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border-border">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project?.longDescription}
          </p>
        </Card>

        <Card className="p-6 bg-card border-border">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-2">
            {project?.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border">
        <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project?.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 rounded-lg bg-secondary/50 text-secondary-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );

  // Layout 3: Grid Masonry (for nlp-sentiment)
  const renderMasonryLayout = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-border">
        <h2 className="text-2xl font-semibold mb-4">Project Story</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project?.longDescription}
        </p>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="md:col-span-2 md:row-span-2 overflow-hidden">
          <img 
            src={dummyImages[0]} 
            alt="Main project view" 
            className="w-full h-full object-cover"
          />
        </Card>
        
        <Card className="p-4 bg-card border-border">
          <h3 className="font-semibold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-1">
            {project?.technologies.slice(0, 3).map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 text-xs rounded bg-secondary/50 text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>

        <Card className="overflow-hidden">
          <img 
            src={dummyImages[1]} 
            alt="Detail view" 
            className="w-full h-full object-cover"
          />
        </Card>

        <Card className="md:col-span-2 p-4 bg-card border-border">
          <h3 className="font-semibold mb-3">Key Features</h3>
          <div className="grid grid-cols-2 gap-2">
            {project?.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="text-sm text-muted-foreground">
                • {feature}
              </div>
            ))}
          </div>
        </Card>

        <Card className="overflow-hidden">
          <img 
            src={dummyImages[2]} 
            alt="Additional view" 
            className="w-full h-full object-cover"
          />
        </Card>
      </div>
    </div>
  );

  // Layout 4: Timeline Flow (for etl-pipeline)
  const renderTimelineLayout = () => (
    <div className="space-y-8">
      <Card className="p-6 bg-card border-border">
        <h2 className="text-2xl font-semibold mb-4">Project Journey</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project?.longDescription}
        </p>
      </Card>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
        
        <div className="space-y-8">
          <div className="relative pl-20">
            <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background" />
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-3">Phase 1: Planning & Design</h3>
              <img 
                src={dummyImages[0]} 
                alt="Planning phase" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <ul className="space-y-1">
                {project?.features.slice(0, 2).map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="relative pl-20">
            <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background" />
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-3">Phase 2: Implementation</h3>
              <img 
                src={dummyImages[1]} 
                alt="Implementation phase" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <ul className="space-y-1">
                {project?.features.slice(2, 4).map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="relative pl-20">
            <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background" />
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-3">Phase 3: Deployment & Results</h3>
              <img 
                src={dummyImages[2]} 
                alt="Deployment phase" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <ul className="space-y-1">
                {project?.features.slice(4).map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Card className="p-6 bg-card border-border">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project?.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 rounded-lg bg-secondary/50 text-secondary-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );

  if (!project) {
    return (
      <div className="min-h-screen py-24 px-4 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <Button onClick={() => navigate("/projects")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl space-y-8 animate-slide-up">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/projects")}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </a>
              {project.id === "data-viz-dashboard" && (
                <a 
                  href="https://github.com/Clyde1030/Flight-Delay-Prediction/blob/main/Project%20Phase%203.ipynb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <FileText className="w-4 h-4 mr-2" />
                    View Paper
                  </Button>
                </a>
              )}
              {project.mediumPost && (
                <a 
                  href={project.mediumPost} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View on Medium
                  </Button>
                </a>
              )}
            </div>
          </div>

          {renderProjectLayout()}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
