// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-irv-lab",
    title: "IRV-Lab",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-professor",
          title: "Professor",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/professor/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-lectures",
          title: "Lectures",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-joining-us",
          title: "Joining Us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/joining/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-about-rgb-thermal-semantic-segmentation-accepted-to-icra-2024-oral",
          title: 'Our paper about RGB-Thermal semantic segmentation accepted to ICRA 2024 (Oral).',
          description: "",
          section: "News",},{id: "news-our-paper-about-rl-based-camera-exposure-control-accepted-to-cvpr-2024",
          title: 'Our paper about RL-based camera exposure control accepted to CVPR 2024.',
          description: "",
          section: "News",},{id: "news-intelligent-robotics-and-vision-lab-has-been-established-at-the-gachon-university",
          title: 'Intelligent Robotics and Vision Lab has been established at the Gachon University.',
          description: "",
          section: "News",},{id: "news-our-paper-about-multi-spectral-depth-estimation-accepted-to-icra-2025-oral",
          title: 'Our paper about Multi-spectral depth estimation accepted to ICRA 2025 (Oral).',
          description: "",
          section: "News",},{id: "news-minseok-choi-minseo-kim-and-eonji-lim-joined-our-lab-as-an-undergraduate-intern-welcome",
          title: 'Minseok Choi, Minseo Kim, and Eonji Lim joined our lab as an undergraduate...',
          description: "",
          section: "News",},{id: "news-chunwoong-park-joined-our-lab-as-an-master-student-welcome",
          title: 'Chunwoong Park joined our lab as an master student. Welcome!',
          description: "",
          section: "News",},{id: "news-prof-lee-was-invited-to-talk-on-reinforcement-learning-and-llm-based-robotics-at-ieie",
          title: 'Prof. Lee was invited to talk on “Reinforcement Learning and LLM-based Robotics” at...',
          description: "",
          section: "News",},{id: "news-prof-lee-gave-a-talk-on-reinforcement-learning-for-real-world-applications-at-yonsei-univeristy",
          title: 'Prof. Lee gave a talk on “Reinforcement Learning for Real-world Applications” at yonsei...',
          description: "",
          section: "News",},{id: "news-prof-lee-gave-a-talk-on-reinforcement-learning-with-sim-to-real-approaches-at-ack",
          title: 'Prof. Lee gave a talk on “Reinforcement learning with Sim-to-Real Approaches” at ACK....',
          description: "",
          section: "News",},{id: "news-prof-lee-gave-a-talk-on-reinforcement-learning-for-robotics-at-university-of-seoul",
          title: 'Prof. Lee gave a talk on “Reinforcement Learning for Robotics” at University of...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-curriculum-learning-and-pattern-aware-highly-efficient-privacy-preserving-scheme-for-mixed-data-outsourcing-with-minimal-utility-loss-was-published",
          title: 'Our paper titled “Curriculum Learning and Pattern-Aware Highly Efficient Privacy-Preserving Scheme for Mixed...',
          description: "",
          section: "News",},{id: "news-prof-lee-gave-a-talk-on-introduction-to-reinforcement-learning-at-multimedia-society",
          title: 'Prof. Lee gave a talk on “Introduction to Reinforcement Learning” at Multimedia Society....',
          description: "",
          section: "News",},{id: "news-prof-lee-gave-a-talk-on-anomaly-detection-for-semiconductor-packaging-at-keti",
          title: 'Prof. Lee gave a talk on “Anomaly Detection for Semiconductor Packaging” at KETI....',
          description: "",
          section: "News",},{id: "news-prof-lee-gave-a-talk-on-reinforcement-learning-for-new-researchers-at-kaist",
          title: 'Prof. Lee gave a talk on “Reinforcement Learning for New Researchers” at KAIST....',
          description: "",
          section: "News",},{id: "news-prof-lee-gave-a-talk-on-simulation-to-real-gap-problems-in-reinforcement-learning-at-seoultech",
          title: 'Prof. Lee gave a talk on “Simulation-to Real Gap Problems in Reinforcement Learning”...',
          description: "",
          section: "News",},{id: "news-sahun-hong-joined-our-lab-as-an-undergraduate-intern-welcome",
          title: 'Sahun Hong joined our lab as an undergraduate intern. Welcome!',
          description: "",
          section: "News",},{id: "news-prof-lee-gave-a-talk-on-introduction-to-reinforcement-learning-at-hanyang-university",
          title: 'Prof. Lee gave a talk on “Introduction to Reinforcement Learning” at Hanyang University....',
          description: "",
          section: "News",},{id: "news-prof-lee-gave-a-guest-lecture-for-graduate-students-on-introduction-to-deep-learning-for-semiconductor-researchers-at-yonsei-university",
          title: 'Prof. Lee gave a guest lecture for graduate students on “Introduction to Deep...',
          description: "",
          section: "News",},{id: "news-sangwon-yu-joined-our-lab-as-an-undergraduate-intern-welcome",
          title: 'Sangwon Yu joined our lab as an undergraduate intern. Welcome!',
          description: "",
          section: "News",},{id: "news-wonmo-kang-joined-our-lab-as-an-undergraduate-intern-welcome",
          title: 'Wonmo Kang joined our lab as an undergraduate intern. Welcome!',
          description: "",
          section: "News",},{id: "news-jeongsu-ko-and-geonhee-lee-joined-our-lab-as-undergraduate-researchers-welcome",
          title: 'Jeongsu Ko and Geonhee Lee joined our lab as undergraduate researchers. Welcome!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
