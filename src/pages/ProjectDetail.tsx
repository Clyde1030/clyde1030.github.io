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

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4 bg-card border-border">
          <h3 className="font-semibold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project?.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-sm rounded bg-secondary/50 text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>

        <Card className="p-4 bg-card border-border">
          <h3 className="font-semibold mb-3">Key Features</h3>
          <ul className="space-y-1">
            {project?.features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                • {feature}
              </li>
            ))}
          </ul>
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
