import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:user",
        excerpt: "👋 Howdy! I'm Pakagrong Lebel —— full-stack developer..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "fintrackr",
        title: "Fintrackr",
        file: "https://raw.githubusercontent.com/pakagronglb/fintrackr-finance-saas/main/README.md",
        icon: "i-heroicons-solid:banknotes",
        excerpt: "A modern, full-stack financial management platform...",
        link: "https://github.com/pakagronglb/fintrackr-finance-saas"
      },
      {
        id: "portfolio-macos",
        title: "Portfolio macOS",
        file: "https://raw.githubusercontent.com/Renovamen/playground-macos/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://github.com/Renovamen/playground-macos"
      },
      {
        id: "x-twitter-clone",
        title: "Twitter Clone",
        file: "https://raw.githubusercontent.com/pakagronglb/x-twitter-clone/main/README.md",
        icon: "i-ri:twitter-fill",
        excerpt: "A modern social media platform clone that serves no purpose...",
        link: "https://github.com/pakagronglb/x-twitter-clone"
      },
      {
        id: "tesla-3d-showcase",
        title: "Tesla 3D Slideshow",
        file: "https://raw.githubusercontent.com/pakagronglb/tesla-3d-showcase/main/README.md",
        icon: "i-fa-solid:car",
        excerpt: "An interactive 3D slideshow of Tesla models using Three.js...",
        link: "https://github.com/pakagronglb/tesla-3d-showcase"
      },
      {
        id: "reddit-scraper",
        title: "Reddit Scraper",
        file: "https://raw.githubusercontent.com/pakagronglb/reddit-scraper/main/README.md",
        icon: "i-fa-brands:reddit",
        excerpt: "A powerful Reddit data scraping tool with Streamlit interface...",
        link: "https://github.com/pakagronglb/reddit-scraper"
      },
      {
        id: "3d-book-slider",
        title: "3D Book Slider",
        file: "https://raw.githubusercontent.com/pakagronglb/animated-book-slider-threejs/main/README.md",
        icon: "i-fa-solid:book",
        excerpt: "An immersive 3D Book Slider landing page built with Three.js and React...",
        link: "https://github.com/pakagronglb/animated-book-slider-threejs"
      },
      {
        id: "full-stack-school-management",
        title: "EduSphere",
        file: "https://raw.githubusercontent.com/pakagronglb/full-stack-school-management/main/README.md",
        icon: "i-fa-solid:globe",
        excerpt: "A comprehensive School Management System built with Next.js....",
        link: "https://github.com/pakagronglb/full-stack-school-management"
      },
      {
        id: "figpro",
        title: "Figpro",
        file: "https://raw.githubusercontent.com/pakagronglb/figpro-figma-clone/main/README.md",
        icon: "i-fa-brands:figma",
        excerpt: "A Figma clone built with modern web technologies....",
        link: "https://github.com/pakagronglb/figpro-figma-clone"
      },
      {
        id: "weather-agent-pydanticAI",
        title: "AI Weather Agent",
        file: "https://raw.githubusercontent.com/pakagronglb/weather-agent-pydanticAI/main/README.md",
        icon: "i-fa-solid:cloud-sun",
        excerpt: "PydanticAI combines geocoding and weather data api...",
        link: "https://github.com/pakagronglb/weather-agent-pydanticAI"
      },
      {
        id: "notion-clone",
        title: "Jotion",
        file: "https://raw.githubusercontent.com/pakagronglb/notion-clone/main/README.md",
        icon: "i-cib:notion",
        excerpt: "A full-featured Notion-like workspace application...",
        link: "https://github.com/pakagronglb/notion-clone"
      },
      {
        id: "ai-image-generator-python",
        title: "AI Image Generator",
        file: "https://raw.githubusercontent.com/pakagronglb/ai-image-generator-python/main/README.md",
        icon: "i-fa-solid:image",
        excerpt: "Welcome to the Stable Diffusion pipeline integration!...",
        link: "https://github.com/pakagronglb/ai-image-generator-python"
      },
      {
        id: "flow-scrape",
        title: "FlowScrape",
        file: "https://raw.githubusercontent.com/pakagronglb/flowscrape-ai-webscraper/main/README.md",
        icon: "i-fa-solid:spider",
        excerpt: "A web scraper using reactflow to scrape data from websites...",
        link: "https://github.com/pakagronglb/flowscrape-ai-webscraper"
      },
      {
        id: "tasky-ai",
        title: "Tasky AI",
        file: "https://raw.githubusercontent.com/pakagronglb/tasky-ai-task-management-app/main/README.md",
        icon: "i-fa-solid:robot",
        excerpt: "An task management system that uses AI to help you get things done...",
        link: "https://github.com/pakagronglb/tasky-ai-task-management-app"
      }
    ]
  }
];

export default bear;
