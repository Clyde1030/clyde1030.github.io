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
];
