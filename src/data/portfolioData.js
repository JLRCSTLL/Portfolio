// Portfolio Data - Edit this file to update your portfolio content

export const personalInfo = {
  name: "John Lloyd Renzo R. Castillo",
  title: "AV Technical Support Specialist",
  subtitle: "Technical support specialist ensuring seamless AV experiences that make an impact.",
  location: "Taytay, Rizal",
  email: "jlr@microdata.com.ph",
  phone: "+639271126259",
  bio: [
    "I’m a dedicated AV Technical Support Specialist passionate about delivering seamless audio-visual experiences that combine technical precision with engaging presentation.",
    "With expertise in both hardware setup and software integration, I ensure systems run smoothly through efficient troubleshooting and innovative solutions.",
    "When I’m not working on AV systems, you’ll find me exploring new technologies, learning advanced AV tools, or planning creative system configurations."
  ]
};

export const stats = {
  projects: "50+",
  experience: "3+",
  passion: "100%"
};

export const skills = [
  {
    title: "AV Systems & Integration",
    description: "Setup, configuration, and troubleshooting of professional audio-visual systems for meetings, events, and presentations",
    technologies: ["Crestron", "Q-SYS", "Bosch", "Projectors", "Video Conferencing", "Sound Systems"]
  },
  {
    title: "IT Support & Maintenance", 
    description: "Providing first-level technical support, hardware troubleshooting, and system maintenance for end-users",
    technologies: ["Windows OS", "Networking", "Remote Support Tools", "Printer & Peripheral Setup", "System Updates"]
  },
  {
    title: "Robotics & Automation",
    description: "Designing and developing automation projects integrating AI, sensors, and control logic for innovative solutions",
    technologies: ["Raspberry Pi", "Python", "OpenCV", "Computer Vision", "Gesture Recognition"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Design of Image Soil Analysis for Robotic Nutrient Mapping System",
    description: "Developed a robotic nutrient mapping system with AI-driven image soil analysis to automate field soil sampling and analysis, improving efficiency and reusability.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "OpenCV", "Raspberry Pi", "AI/ML", "Computer Vision"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Design of Web Application with Interactive Virtual Tour",
    description: "Created a web application that allows users to navigate a virtual environment through 360° panoramic images and interactive elements.",
    image: "/api/placeholder/600/400",
    tags: ["JavaScript", "React", "360° Imaging", "Web Development"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Design of Hand Gesture Controlled Pick-and-Place for Two-Wheeled Robot Car",
    description: "Built a hand gesture recognition system to control a robot car without physical buttons, offering an intuitive and interactive control method.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "OpenCV", "Gesture Recognition", "Robotics"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const socialLinks = [
  {
    platform: "GitHub",
    url: "https://github.com/JLRCSTLL",
    icon: "Github"
  },
  {
    platform: "LinkedIn", 
    url: "https://www.linkedin.com/in/john-lloyd-renzo-castillo-57b338242",
    icon: "Linkedin"
  }
];

export const contactInfo = [
  {
    type: "email",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: "Mail"
  },
  {
    type: "phone",
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    icon: "Phone"
  },
  {
    type: "location",
    label: "Location",
    value: personalInfo.location,
    href: "#",
    icon: "MapPin"
  }
];

