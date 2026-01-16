import { Card } from "@/components/ui/card";
import { ChefHat, Github, Linkedin, BookOpen, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImage from "@/assets/profile2.png";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Profile Left, Introduction Right */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-center">
            {/* Profile Photo */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <Avatar className="h-64 w-64 border-4 border-primary/20 shadow-glow">
                <AvatarImage src={profileImage} alt="Profile" className="object-cover object-[center_20%]" />
                <AvatarFallback>CL</AvatarFallback>
              </Avatar>
              
              {/* Social Links */}
              <div className="flex gap-6 justify-center w-64">
                <a href="https://github.com/Clyde1030" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/yushengclydelee/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://medium.com/@yushenglee" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <BookOpen className="w-6 h-6" />
                </a>
                <a href="mailto:yushenglee@berkeley.edu" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Self Introduction */}
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Hi, I'm Clyde
              </h1>
              <p className="text-xl text-primary font-medium">
                A passionate data detective who loves building data pipelines, turning data to clear action by ML, and visualizations.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Stepping into data science domain as an insurance data analyst, I believe data can inform us to make better decisions. As I grew deeper interest in the tech field, I am exploring ways to leverage modern technology to boost productivity, including Machine learning, data engineering, and Large Language Models. My goal is to make technology and the underlying machine learning techniques more accessible and easier for people to understand and to apply in practice. That's why I am pursuing a Master's degree at the School of Information at UC Berkeley to broaden my horizon and expand my skill sets in data science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Flight Delay Analysis */}
            <Link to="/projects/data-viz-dashboard">
              <Card className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-lg group h-full">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Flight Delay Analysis
                  </h3>
                  <p className="text-muted-foreground">
                    Predict departure delay with multiple ML models - XGBoost, Random Forest, Logistic Regression, and Multilayer Perceptron.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">Databricks</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">PySpark</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">Big Data</span>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Congressional Stock Transactions */}
            <Link to="/projects/ml-pipeline">
              <Card className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-lg group h-full">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Analyzing Congressional Stock Transactions with Graph Algorithms
                  </h3>
                  <p className="text-muted-foreground">
                    Use graph algorithms to detect potential congressional equity transaction anomaly and exploring the use case for document store and cache databases.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">Neo4j</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">PostgreSQL</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">MongoDB</span>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* My Story Timeline Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl space-y-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-center mb-12">My Story</h2>
            
            {/* Timeline Item 1 - Image Left */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
                <Card className="p-6 bg-card border-border overflow-hidden">
                  <img alt="Early interest in data" className="w-full h-64 object-cover rounded-lg" src="/lovable-uploads/432403e8-b809-4598-9210-2eb1db8a85b8.png" />
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Houbi Taiwan is where I am from</h3>
                <p className="text-foreground/90 leading-relaxed">I am originally from Houbi District, Taiwan, a region surrounded by green rice fields and shaped by a long tradition of agriculture. I moved to California with my family in 2016.</p>
              </div>
            </div>

            {/* Timeline connector line */}
            <div className="hidden md:block w-0.5 h-16 bg-primary/30 mx-auto" />

            {/* Timeline Item 2 - Image Right */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="relative order-1 md:order-2">
                <div className="absolute -left-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
                <Card className="p-6 bg-card border-border overflow-hidden">
                  <img alt="Learning and development" className="w-full h-64 object-cover object-top rounded-lg" src="/lovable-uploads/5672ad74-496d-40d7-af05-19ab6d4ba63a.jpg" />
                </Card>
              </div>
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-primary">UCSB and the Actuarial field</h3>
                <p className="text-foreground/90 leading-relaxed">After graduating from UC Santa Barbara, I began my professional path as an actuarial student. I passed 3 actuarial exams while working at insurance companies located in Portland, Oregon, and St. Louis, MO. During this time, I became increasingly interested in the tools and technologies that powered our financial reporting processes. </p>
              </div>
            </div>

            {/* Timeline connector line */}
            <div className="hidden md:block w-0.5 h-16 bg-primary/30 mx-auto" />

            {/* Timeline Item 3 - Image Left */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
                <Card className="p-6 bg-card border-border overflow-hidden">
                  <img alt="Building projects" className="w-full h-64 object-cover rounded-lg" src="/lovable-uploads/110ab2e8-3b5d-4360-8ca2-62b5c8527f8c.jpg" />
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Stepping into Data Field</h3>
                <p className="text-foreground/90 leading-relaxed">Working in actuarial and financial reporting gave me a lot of exposure in data. While my initial focus was on actuarial modeling, I found myself fascinated by the behind-the-scenes systems that made everything run — from Python scripts and SQL queries to VBA macros automating Excel reports. My journey in data science began with a fascination for uncovering patterns in complex datasets. </p>
              </div>
            </div>

            {/* Timeline connector line */}
            <div className="hidden md:block w-0.5 h-16 bg-primary/30 mx-auto" />

            {/* Timeline Item 4 - Image Right */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="relative order-1 md:order-2">
                <div className="absolute -left-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
                <Card className="p-6 bg-card border-border overflow-hidden">
                  <img alt="Internship experience" className="w-full h-64 object-cover rounded-lg" src="/lovable-uploads/6fc55fb9-6dbf-4bb7-9459-c0e6c9c27089.jpg" />
                </Card>
              </div>
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-primary">Started my Journey with MIDS program</h3>
                <p className="text-foreground/90 leading-relaxed">My curiosity about data quickly turned into a passion for leveraging it to solve real-world problems. Currently pursuing a MIDS degree at UC Berkeley, I focus on advanced statistical methods, machine learning algorithms, and modern data engineering practices. My coursework includes deep learning, natural language processing, and big data technologies. Through various projects in machine learning pipelines, data visualization dashboards, and NLP applications, I've developed expertise in transforming complex data into actionable insights that drive decision-making.</p>
              </div>
            </div>

            {/* Timeline connector line */}
            <div className="hidden md:block w-0.5 h-16 bg-primary/30 mx-auto" />

            {/* Timeline Item 5 - Image Left */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
                <Card className="p-6 bg-card border-border overflow-hidden">
                  <img alt="Future goals" className="w-full h-64 object-cover rounded-lg" src="/lovable-uploads/a1afefb7-6fe6-45c7-8c44-7053d6c2434e.jpg" />
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Future Goals</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Looking ahead, I aim to bridge the gap between data science and engineering, 
                  building scalable systems that turn insights into action. I'm passionate about 
                  leveraging AI and machine learning to solve complex problems and create meaningful 
                  impact in the tech industry.
                </p>
              </div>
            </div>
          </div>

          {/* Beyond Data Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-center mb-8">Beyond Data</h2>
            <Card className="p-8 bg-card border-border">
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary shrink-0">
                    <ChefHat className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Cooking Enthusiast</h3>
                    <p className="text-foreground/90 leading-relaxed">
                      When I'm not analyzing data or training models, you'll find me in the kitchen experimenting with new recipes and flavors. I enjoy exploring international cuisines! From understanding the Maillard reaction to perfecting fermentation processes, cooking provides a delicious intersection of art and science that keeps me engaged outside of my professional work.  
                    </p>
                  </div>
                </div>
                
                {/* Food Photo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/8611e992-b978-44f8-aa44-1123eba4d38a.jpg" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/091789ce-da31-44ab-8d88-a9adee75511a.jpg" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/0de7dc45-eb8a-4452-a8ad-6196a1b4dcb9.jpg" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/1b6a69e2-c94d-43ea-8fd5-43802d194518.jpg" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/0306a359-f19e-4521-bccf-dd571b6e285c.jpg" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/4eb70d69-fdc6-46ce-96e9-f9867b6ebee4.jpg" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/3ca2ae77-6003-4deb-9e99-b5ca33e4e234.jpg" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/41d623fc-9185-4094-8f8f-4b944fc0b901.jpg" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 9" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/72478604-c384-4995-91aa-7b9fb50a188d.jpg" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 10" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/1e44d738-1862-4dac-ba1c-90159c4d9d05.jpg" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
