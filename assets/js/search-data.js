// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects-and-publications",
          title: "Projects and publications",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects_and_publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-notes-on-writing-proofs",
        
          title: "Notes on writing proofs",
        
        description: "glossary of terms and techniques for constructing basic proofs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/notes_on_writing_proofs/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-database-assistant-agent",
          title: 'Database Assistant Agent',
          description: "A LangChain ReAct database agent that enables users to chat with a database using multi-hop reasoning and in-context learning to refine knowledge. It then produces the trail of SQL commands it used to extract knowledge.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_database_agent/";
            },},{id: "projects-computer-vision-explainability-in-safety-surveillance",
          title: 'Computer Vision Explainability in Safety Surveillance',
          description: "An explainability framework for safety surveillance, extending Eigen-CAM to YOLOv5 object detection with relevance-based layer selection for bias diagnosis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_pub_compviz_exp/";
            },},{id: "projects-classification-on-imbalanced-browse-node-data-using-transformers",
          title: 'Classification on Imbalanced Browse Node data using Transformers',
          description: "Customized DeBERTa with Focal Loss for large-scale e-commerce browse node classification, improving convergence, confidence, and performance on imbalanced product data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_browse_node/";
            },},{id: "projects-single-shot-localized-retrieval-using-yolov3",
          title: 'Single-Shot Localized Retrieval using YOLOv3',
          description: "A retrieval system that takes object selections as bounding box prompts from the user, given an image and retrievs similar objects from an image database.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_prodpeek/";
            },},{id: "projects-robustness-analysis-of-neural-networks",
          title: 'Robustness Analysis of Neural Networks',
          description: "Exploring techniques to analyze and robustify feature specific dissections of neural networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_robann/";
            },},{id: "projects-augmented-reality-enhanced-textbooks",
          title: 'Augmented Reality–Enhanced Textbooks',
          description: "Scalable augmented reality pipeline embedding AR markers in textbooks, delivering interactive 3D learning via affordable smartphones for low-income schools; TNSCST-funded.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_ar_tb/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%75%6D%61%72.%73%65%6C%76%61%6B.%32%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kumar-selvakumaran", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kumar-selva", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=pamBmPIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
