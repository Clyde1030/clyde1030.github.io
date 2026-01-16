import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import contactImage from "@/assets/contactme.png";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "yushenglee@berkeley.edu",
      href: "mailto:yushenglee@berkeley.edu",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yushengclydelee",
      href: "https://www.linkedin.com/in/yushengclydelee/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Clyde1030",
      href: "https://github.com/Clyde1030",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Irvine, CA",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Image Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        
        <div className="relative z-10 flex flex-col items-center gap-8 w-full">
          <div className="relative w-full overflow-hidden shadow-[0_0_60px_hsl(var(--primary)/0.3)]">
            <img 
              alt="Contact me" 
              src={contactImage} 
              className="w-full h-auto border-0 opacity-90 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center px-8">
                <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Contact Me
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Let's connect and collaborate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="min-h-screen flex items-start justify-center px-4 py-16">
        <div className="w-full max-w-4xl space-y-12">
          <Card className="p-8 md:p-12 bg-card border-border">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-semibold">Let's Connect</h2>
                <p className="text-muted-foreground">
                  Whether you have a question, want to collaborate on a project, or just want to say hi, 
                  feel free to reach out through any of these channels.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method) => (
                  <div 
                    key={method.label}
                    className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        {method.href ? (
                          <a 
                            href={method.href}
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-mono text-sm hover:text-primary transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="font-mono text-sm">{method.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Resume Download Box */}
                <div className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary transition-colors group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <FileDown className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Resume</p>
                        <p className="font-mono text-sm">Download my CV/Resume</p>
                      </div>
                    </div>
                    <a href="https://media.licdn.com/dms/document/media/v2/D562DAQFCv5z69CZWPg/profile-treasury-document-pdf-analyzed/B56ZvH_FcjHsAg-/0/1768586764578?e=1769644800&v=beta&t=8CL55CHb_AZJeV8Ci4zawVUyJx6KSgYulQIl8jMo7aU&acrobatPromotionSource=linkedin_chrome-post_view" target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        <FileDown className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <a href="mailto:yushenglee@berkeley.edu">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
