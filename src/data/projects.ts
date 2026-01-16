export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  mediumPost?: string;
}

export const projects: Project[] = [
  {
    id: "ml-pipeline",
    title: "Analyzing Congressional Stock Transactions with Graph Algorithms",
    description: "Use graph algorithms to detect potential congressional equity transaction anomaly and exploring the use case for document store and cache databases.",
    tags: ["Neo4j", "PostgreSQL", "Python"],
    github: "https://github.com/Clyde1030/Graph-Stock-Analysis",
    longDescription: "A data engineering project that leverages graph algorithms to detect potential anomalies in congressional equity transactions. The project explores use cases for document store and cache databases, combining relational, graph, and NoSQL technologies for comprehensive data analysis.",
    features: [
      "Graph-based anomaly detection for transaction patterns",
      "Integration of multiple database paradigms",
      "Document store implementation with MongoDB",
      "Cache layer optimization with Redis",
      "Graph traversal and community detection algorithms",
      "Data pipeline connecting PostgreSQL, Neo4j, MongoDB, and Redis"
    ],
    technologies: ["Python", "Pandas", "Neo4j", "PostgreSQL", "Graph Algorithms", "MongoDB", "Redis"]
  },
  {
    id: "data-viz-dashboard",
    title: "Flight Delay Analysis",
    description: "Predict departure delay with multiple ML models - XGBoost, Random Forest, Logistic Regression, and Multilayer Perceptron.",
    tags: ["Databricks", "PySpark", "Big Data"],
    github: "https://github.com/Clyde1030/Flight-Delay-Prediction",
    longDescription: "A big data analysis project using PySpark and Databricks to predict flight departure delays. The project handles 31M records with 200+ fields, implementing multiple machine learning models including XGBoost, Random Forest, Logistic Regression, and Multilayer Perceptron Neural Network. Leverages distributed computing and big data processing techniques with Delta Lake.",
    features: [
      "Handle large data with 31M records and 200+ fields",
      "Derive Graph-Based features using PageRank algorithm",
      "Large-scale data processing with PySpark and Databricks",
      "Time Series Analysis and derive time-based features",
      "Implement 4 ML models: Logistic Regression, Random Forest, XGBoost, and Multilayer Perceptron Neural Network",
      "Data pipeline development",
      "Data visualization with seaborn, matplotlib, and plotly"
    ],
    technologies: ["Databricks", "PySpark", "MLflow", "XGBoost", "Seaborn", "Matplotlib", "Plotly"],
    mediumPost: "https://medium.com/@yushenglee/predicting-flight-delay-at-scale-dd314cb34e77"
  },
  {
    id: "food-desert",
    title: "Food Desert Prediction using CNN and Tree Models",
    description: "Machine learning project processing large amounts of images and tabular data to predict food desert areas using CNN and tree-based models.",
    tags: ["Python", "CNN", "Machine Learning"],
    github: "https://github.com/yourusername/food-desert",
    longDescription: "An advanced machine learning project that combines image processing with tabular data analysis to predict whether geographic areas qualify as food deserts. The project leverages both Convolutional Neural Networks for image analysis and tree-based models for structured data.",
    features: [
      "Large-scale image data processing and augmentation",
      "Convolutional Neural Network architecture design",
      "Tree-based model implementation (Random Forest, XGBoost)",
      "Multi-modal data fusion techniques",
      "Model ensemble and comparison",
      "Geographic prediction and visualization"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "XGBoost", "OpenCV"]
  },
  {
    id: "nyc-collision",
    title: "NYC Vehicle Collision Analysis",
    description: "Exploratory data analysis project using Python Pandas to analyze vehicle collision patterns and showcase data visualization skills.",
    tags: ["Python", "Pandas", "Data Visualization"],
    github: "https://github.com/yourusername/nyc-collision",
    longDescription: "A comprehensive exploratory data analysis of NYC vehicle collision data, uncovering patterns and insights through effective data visualization techniques. This project demonstrates proficiency in data wrangling, statistical analysis, and creating compelling visual narratives from complex datasets.",
    features: [
      "Data cleaning and preprocessing of large collision datasets",
      "Statistical analysis of collision patterns by time and location",
      "Interactive visualizations for trend exploration",
      "Geographic mapping of collision hotspots",
      "Correlation analysis between various factors",
      "Actionable insights and recommendations"
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Jupyter Notebook"]
  },
  {
    id: "depression-modeling",
    title: "Descriptive Modeling for Depression and Physical Activities with Linear Regression",
    description: "Research project conducted in R examining the relationship between depression and physical activities using large sample linear models.",
    tags: ["R", "Linear Regression", "Statistics"],
    github: "https://github.com/yourusername/depression-modeling",
    longDescription: "A rigorous statistical research project investigating the relationship between depression and physical activity levels. Using large sample linear regression models in R, this study provides descriptive insights into how physical activities correlate with depression indicators.",
    features: [
      "Large sample data analysis and preprocessing",
      "Multiple linear regression modeling",
      "Assumption testing and diagnostics",
      "Statistical inference and hypothesis testing",
      "Effect size estimation and interpretation",
      "Comprehensive research documentation"
    ],
    technologies: ["R", "RStudio", "ggplot2", "dplyr", "tidyr", "Linear Regression"]
  },
];
