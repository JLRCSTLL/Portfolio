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
  projects: "5+",
  experience: "1",
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

export const certificates = [
  {
    id: 1,
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "2022",
    description: "Validates knowledge of networking fundamentals including IP addressing, subnetting, network protocols, and basic routing and switching concepts.",
    skills: ["Networking Fundamentals", "IP Addressing", "Subnetting", "Routing", "Switching", "Network Protocols"],
    verifyUrl: "https://www.credly.com/badges/62f1823b-fd1c-40d4-8d4d-833b742173e2"
  },
  {
    id: 2,
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "2023",
    description: "Demonstrates knowledge and skills in switching, routing, and wireless networks, including VLANs, inter-VLAN routing, static and dynamic routing, and wireless LAN concepts.",
    skills: ["Switching", "Routing", "Wireless LAN", "VLANs", "Inter-VLAN Routing", "Dynamic Routing Protocols"],
    verifyUrl: "https://www.credly.com/badges/ac7ba1bf-b45e-4c2f-b285-cce08d8b931a/accept"
  },
  {
    id: 3,
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    date: "2023",
    description: "Validates knowledge of enterprise networking concepts, network security, and automation, including WAN technologies, QoS, VPNs, ACLs, and the use of automation tools for network management.",
    skills: ["Enterprise Networking", "Network Security", "Automation", "WAN Technologies", "VPN", "ACLs", "QoS"],
    verifyUrl: "https://www.credly.com/badges/b4e2c0b6-6449-4d36-9732-8d108c6afa21/accept"
  },
  {
    id: 4,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2023",
    description: "Provides foundational knowledge of cybersecurity concepts, including cyber threats, attack vectors, security principles, and the importance of cybersecurity in the digital world.",
    skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Attack Vectors", "Security Principles", "Network Security Basics", "Cyber Defense"],
    verifyUrl: "https://www.netacad.com/certificates?issuanceId=f6d6a1d6-9bc2-4b21-b506-87aa08f07b21"
  },
  {
    id: 5,
    title: "Cyber Threat Management",
    issuer: "Cisco",
    date: "2023",
    description: "Covers the identification, analysis, and mitigation of cyber threats, focusing on risk management, incident response, and the implementation of security policies and best practices.",
    skills: ["Threat Analysis", "Incident Response", "Risk Management", "Security Policies", "Cyber Defense", "Network Security"],
    verifyUrl: "https://www.credly.com/badges/4c92f32c-3e5d-443d-9416-13e4e01c2a35"
  },
  {
    id: 6,
    title: "Endpoint Security",
    issuer: "Cisco",
    date: "2023",
    description: "Covers the identification, analysis, and mitigation of cyber threats, focusing on risk management, incident response, and the implementation of security policies and best practices.",
    skills: ["Threat Analysis", "Incident Response", "Risk Management", "Security Policies", "Cyber Defense", "Network Security"],
    verifyUrl: "https://www.credly.com/badges/4c92f32c-3e5d-443d-9416-13e4e01c2a35"
  },
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

