"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Server,
  Database,
  Smartphone,
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Rocket,
  MapPin,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "React",
      "Nextjs",
      "TypeScript",
      "Tailwind CSS",
      "Javascript",
      "Figma",
      "ShadCn",
      "Bootstrap",
    ],
    backend: [
      "Node",
      "ExpressJS",
      "Python",
      "GraphQL",
      "trpc",
      "Websocket",
      "Clerk",
      "Zod",
      "Prisma ORM",
      "Django",
      "Go",
    ],
    database: ["MongoDB", "Postgress", "SQL", "Redis", "NOSQL", "CDN", "S3"],
    tools: [
      "Git/Github",
      "Docker",
      "C++",
      "Deep Learning",
      "AWS",
      "Kafka",
      "Kubernetes",
      "Nginx",
      "Linux",
      "CCW",
      "SCADA",
      "PLC",
      "HMI",
    ],
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: skills.frontend,
      color: "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40",
    },
    {
      title: "Backend",
      icon: Server,
      skills: skills.backend,
      color: "bg-green-500/10 border-green-500/20 hover:border-green-500/40",
    },
    {
      title: "Database",
      icon: Database,
      skills: skills.database,
      color: "bg-amber-500/10 border-amber-500/20 hover:border-amber-500/40",
    },
    {
      title: "Tools & Others",
      icon: Smartphone,
      skills: skills.tools,
      color: "bg-orange-500/10 border-orange-500/20 hover:border-orange-500/40",
    },
  ];

  const experiences = [
    {
      id: 1,
      title: "FullStack Developer",
      company: "BRO PG",
      location: "Dwarka, Delhi",
      duration: "June 2024 - July 2024",
      description: [
        "Developed and maintained React-based web application serving 100+ users",
        "Help in reducing the load of owner by arranging things online",
        "The PG-Owner can see the Complaints posted by his guests and can update the status of the problem",
        "Implemented REST APIs using Node.js and Express framework",
        "Create listing of the properties of the PG Owner",
      ],
      technologies: [
        "React",
        "Node.js",
        "Expressjs",
        "MongoDB",
        "Framer-Motion",
      ],
      current: true,
    },
    {
      id: 2,
      title: "Research Intern",
      company: "World Quantz",
      location: "Remote, US Based",
      duration: "June 2025 - July 2025",
      description: [
        "Simulate alphas to refine and improve their predictive performance improving test pass rates from 78% to 87%.",
        "Researched behavioral finance principles by examining 80+ trading case studies.",
        "Competited in the International Quant Championship 2025.",
        "Promoted to Research Consultant.",
      ],
      technologies: ["Expressional Language"],
      current: true,
    },
    {
      id: 3,
      title: "Instrumentation Intern",
      company: "Bry Air(ASIA)",
      location: "Gurgaon",
      duration: "June 2025 - July 2025",
      description: [
        "Explored industrial dehumidifiers and their integration into automation systems.",
        "Worked with contactors, relays, RTDs, and sensors for motor control and process automation.",
        "Programmed PLCs using CCW and built basic HMI control logics.",
        "Learned to read electrical drawings and observed machine calibration and testing.",
      ],
      technologies: [
        "PLC Programming",
        "HMI Programming",
        "Dehumidification",
        "Reactjs",
        "RTDs",
        "SCADA",
        "Electrical Drawing",
        "Electronics Equipments",
        "Relays",
        "Thyristors",
        "SMPS",
      ],
      current: true,
    },
  ];

  const education = [
    {
      degree: "BTech in Instrumentation and Control Engineering",
      school: "Netaji Subhas University of Technology",
      location: "Dwarka, Delhi",
      duration: "2022 - Present",
      description:
        "Relevant coursework: Data Structures & Algorithm, Software Engineering, Web Development, Deep Learning Enthusiast",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "BroCars",
      description:
        "Developed a full-stack web application that streamlined the online car sale and purchase process. Built with Next.js, Shadcn, TypeScript, Express.js (integrated with DDoS protection), and MongoDB, the platform ensures high performance and robust security. The app features secure authentication for smooth and reliable account management. Users can request test drives, upload their car listings, and filter vehicles based on brand, model, and price. An admin dashboard was created to manage and moderate car submissions and test drive requests, along with interactive sales reports and analytics tools.",
      image: "/broCars.png",
      technologies: [
        "Expressjs",
        "Nextjs",
        "Typescript",
        "MongoDB",
        "Shadcn",
        "Cloudinary",
      ],
      github:
        "https://github.com/prajwal2301negi/BroCars-Full_Stack_Car_Marketplace",
      live: "https://bro-cars.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "Code Hatch",
      description:
        "CodeHatch is a dedicated educational platform meticulously designed to serve as the ultimate centralized resource for college students pursuing technology careers. The project successfully aggregates and curates over 60 high-quality coding and computer science resources across 13 crucial categories, from mastering Data Structures & Algorithms (DSA) to building expertise in advanced fields like AI/ML, DevOps, and System Design. Its core feature is the 4-Year Coding Journey — a structured, syllabus-driven roadmap and success timeline explicitly crafted to guide users from a foundational understanding to becoming competitive, industry-ready software developers.",
      image: "/codeHatch.png",
      technologies: ["React.js", "Nextjs"],
      github: "https://github.com/prajwal2301negi/CodeHatch-Tech_Resource_Hub",
      live: "https://www.codehatch.live/",
      featured: true,
    },
    {
      id: 3,
      title: "AI Fashion Analyzer",
      description:
        "Built an AI-powered web application using Next.js, TypeScript, Shadcn, and Gemini to enhance user engagement and drive sales. Integrated modern and secure authentication through Clerk, along with robust middleware protections, leading to improved user trust and retention. The app introduced a cutting-edge AI-driven style assessment feature that analyzes user-uploaded photos to predict age and body measurements with high accuracy, enabling highly personalized shopping experiences.",
      image: "/AIFashionAnalyzer.png",
      technologies: ["Reactjs", "Typescript", "Clerk", "Shadcn", "Gemini"],
      github:
        "https://github.com/prajwal2301negi/StyleIQ-AI_Powered_Fashion_Assistant",
      live: "https://ai-fashion-analyzer.vercel.app",
      featured: true,
    },
    {
      id: 4,
      title: "LawScope",
      description:
        "Developed Lawscope, an intelligent legal assistant web app built with Next.js, TypeScript, Shadcn, and Gemini. The platform empowers users to upload PDFs or plain text documents, which AI then analyzes & simplifies into clear, easy-to-understand language—making complex legal terms accessible to everyone. Lawscope also offers a feature where users can describe their real-life legal situations while taking on roles such as landlord, renter, employee, employer etc.",
      image: "/lawscope.png",
      technologies: ["Nextjs", "Typescript", "Shadcn", "Gemini"],
      github:
        "https://github.com/prajwal2301negi/Lawscope-AI-Powered_Legal_Assistant",
      live: "https://lawscope.vercel.app",
      featured: true,
    },
    {
      id: 5,
      title: "Savi Collection",
      description:
        "A comprehensive e-commerce platform for selling toys online. Built with modern web technologies to provide seamless shopping experience with product catalogs. Features include product filtering, contact us functionality, and order management system.",
      image: "/saviCollection.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/prajwal2301negi/SaviCollection_Client",
      live: "https://savi-collection.vercel.app/",
      featured: true,
    },
    {
      id: 6,
      title: "Golden Era Gym",
      description:
        "A modern gym website featuring membership plans, trainer profiles, class schedules, and online booking system. Designed to enhance gym's digital presence and streamline member onboarding process. Includes responsive design for mobile and desktop users.",
      image: "/goldenEraGym.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/prajwal2301negi/GoldenEraGymRohini",
      live: "https://golden-era-gym.vercel.app/",
      featured: true,
    },
    {
      id: 10,
      title: "Coffee Machine using Hand Gesture Recognition",
      description:
        "This interactive virtual coffee machine utilizes hand tracking to allow users to make coffee selections using finger gestures without any physical touch. Using a webcam feed, the system detects specific finger patterns to navigate through multiple selection stages such as choosing the type of coffee, sugar quantity, and milk preference.",
      image: "/coffeeMachine.jpg",
      technologies: ["Python", "OpenCV"],
      github: "https://github.com/prajwal2301negi/OpenCVProjects",
      featured: false,
    },
    {
      id: 11,
      title: "Volume Control Using Hand Gestures",
      description:
        "This real-time computer vision project enables users to control system volume using simple hand gestures—specifically the distance between the thumb and index finger. By tracking hand landmarks with a webcam, it dynamically adjusts the volume based on finger distance, displaying a visual bar and percentage overlay.",
      image: "/volume.png",
      technologies: ["Python", "OpenCV"],
      github: "https://github.com/prajwal2301negi/OpenCVProjects",
      featured: false,
    },
    {
      id: 12,
      title: "Virtual Keyboard",
      description:
        "This project implements a virtual keyboard that allows users to type by interacting with an on-screen QWERTY keyboard using hand gestures captured from a webcam. Using computer vision and hand landmark detection, it tracks finger positions to detect which key the user is 'hovering' over and simulates key presses when a pinch gesture is detected.",
      image: "/virtualKeyboard.jpeg",
      technologies: ["Python", "OpenCV"],
      github: "https://github.com/prajwal2301negi/OpenCVProjects",
      featured: false,
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="fixed top-0 w-full backdrop-blur-md bg-background/80 border-b border-border z-40">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.h1>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {["about", "skills", "experience", "projects", "contact"].map(
                (item, i) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => scrollToSection(item)}
                    className="capitalize hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </motion.button>
                )
              )}
            </div>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>
        </nav>
      </header>

      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-clip-text text-transparent">
                Prajwal Negi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Building scalable web applications and automation systems with
              modern technologies. Passionate about creating innovative
              solutions that bridge software and hardware.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                <Rocket className="mr-2 h-5 w-5" />
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </motion.div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg text-muted-foreground mb-6">
                  I&apos;m a BTech student at Netaji Subhas University of
                  Technology. My journey combines the precision of automation
                  with the creativity of full-stack development.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  I&apos;ve worked on diverse projects ranging from AI-powered
                  web applications to industrial automation systems, always
                  striving to create solutions that are both technically robust
                  and user-friendly.
                </p>
                <p className="text-lg text-muted-foreground">
                  When I&apos;m not coding, you&apos;ll find me exploring deep
                  learning, competing in quant championships, or experimenting
                  with computer vision projects.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {education.map((edu, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.school}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.duration}
                        </div>
                        <p className="mt-4 text-sm">{edu.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card
                    className={`h-full ${category.color} transition-all duration-300`}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <category.icon className="h-5 w-5" />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Briefcase className="h-5 w-5" />
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold mt-1">
                            {exp.company}
                          </CardDescription>
                        </div>
                        {exp.current && (
                          <Badge variant="default">Current</Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start"
                          >
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">
              Featured Projects
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in full-stack
              development, AI integration, and computer vision.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                      {/* <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-green-500/10 flex items-center justify-center relative overflow-hidden">
                      <Code className="h-20 w-20 text-muted-foreground/20 group-hover:scale-110 transition-transform" />
                    </div> */}
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={450}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 line-clamp-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          {project.live && (
                            <Button size="sm" asChild>
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>

            <h3 className="text-2xl font-bold mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full group hover:shadow-lg transition-all">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="prajwalnegi21112@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/prajwal2301negi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://in.linkedin.com/in/prajwal-negi-19797724b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2025 Prajwal Negi.</p>
        </div>
      </footer>
    </div>
  );
}
