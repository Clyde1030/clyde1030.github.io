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
    description: "Built an end-to-end ML pipeline for predictive analytics with automated model training and deployment.",
    tags: ["Python", "Scikit-learn", "Docker"],
    github: "https://github.com/yourusername/project1",
    longDescription: "A comprehensive machine learning pipeline that automates the entire process from data ingestion to model deployment. The system handles data preprocessing, feature engineering, model training, validation, and deployment with continuous monitoring.",
    features: [
      "Automated data preprocessing and cleaning",
      "Feature engineering and selection",
      "Multiple model training and comparison",
      "Hyperparameter tuning with cross-validation",
      "Model versioning and deployment",
      "Real-time monitoring and alerting"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "Docker", "MLflow", "FastAPI"]
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
      "Data pipeline development with Delta Lake",
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
  {
    id: "nlp-sentiment",
    title: "NLP Sentiment Analysis",
    description: "Natural language processing project analyzing sentiment in social media data using transformer models.",
    tags: ["Python", "PyTorch", "BERT"],
    github: "https://github.com/yourusername/project3",
    longDescription: "A sophisticated NLP system that analyzes sentiment in social media posts using state-of-the-art transformer models. The system can process large volumes of text data and provide detailed sentiment insights.",
    features: [
      "Multi-class sentiment classification",
      "Entity recognition and extraction",
      "Emotion detection beyond positive/negative",
      "Batch processing for large datasets",
      "Fine-tuned BERT models for accuracy",
      "API for real-time sentiment analysis"
    ],
    technologies: ["Python", "PyTorch", "Transformers", "BERT", "FastAPI", "MongoDB"]
  },
  {
    id: "etl-pipeline",
    title: "ETL Data Pipeline",
    description: "Scalable ETL pipeline processing large datasets with Apache Spark and cloud infrastructure.",
    tags: ["Spark", "AWS", "Python"],
    github: "https://github.com/yourusername/project4",
    longDescription: "A robust ETL pipeline designed to handle large-scale data processing in the cloud. The system efficiently extracts data from multiple sources, transforms it according to business rules, and loads it into data warehouses for analysis.",
    features: [
      "Distributed data processing with Apache Spark",
      "Support for multiple data sources and formats",
      "Data quality validation and cleansing",
      "Incremental data loading",
      "Error handling and recovery mechanisms",
      "Scheduled job execution and monitoring"
    ],
    technologies: ["Apache Spark", "Python", "AWS S3", "AWS Glue", "PostgreSQL", "Airflow"]
  }
];
