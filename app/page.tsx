// "use client";

// import { useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Code,
//   Server,
//   Database,
//   Smartphone,
//   Moon,
//   Sun,
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
//   Briefcase,
//   GraduationCap,
//   Rocket,
//   MapPin,
//   Calendar,
//   ChevronDown,
// } from "lucide-react";
// import { useTheme } from "next-themes";
// import Image from "next/image";

// export default function Home() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const { scrollYProgress } = useScroll();
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const skills = {
//     frontend: [
//       "HTML",
//       "CSS",
//       "React",
//       "Nextjs",
//       "TypeScript",
//       "Tailwind CSS",
//       "Javascript",
//       "Figma",
//       "ShadCn",
//       "Bootstrap",
//     ],
//     backend: [
//       "Node",
//       "ExpressJS",
//       "Python",
//       "GraphQL",
//       "trpc",
//       "Websocket",
//       "Clerk",
//       "Zod",
//       "Prisma ORM",
//       "Django",
//       "Go",
//     ],
//     database: ["MongoDB", "Postgress", "SQL", "Redis", "NOSQL", "CDN", "S3"],
//     tools: [
//       "Git/Github",
//       "Docker",
//       "C++",
//       "Deep Learning",
//       "AWS",
//       "Kafka",
//       "Kubernetes",
//       "Nginx",
//       "Linux",
//       "CCW",
//       "SCADA",
//       "PLC",
//       "HMI",
//     ],
//   };

//   const skillCategories = [
//     {
//       title: "Frontend",
//       icon: Code,
//       skills: skills.frontend,
//       color: "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40",
//     },
//     {
//       title: "Backend",
//       icon: Server,
//       skills: skills.backend,
//       color: "bg-green-500/10 border-green-500/20 hover:border-green-500/40",
//     },
//     {
//       title: "Database",
//       icon: Database,
//       skills: skills.database,
//       color: "bg-amber-500/10 border-amber-500/20 hover:border-amber-500/40",
//     },
//     {
//       title: "Tools & Others",
//       icon: Smartphone,
//       skills: skills.tools,
//       color: "bg-orange-500/10 border-orange-500/20 hover:border-orange-500/40",
//     },
//   ];

//   const experiences = [
//     {
//       id: 1,
//       title: "FullStack Developer",
//       company: "BRO PG",
//       location: "Dwarka, Delhi",
//       duration: "June 2024 - July 2024",
//       description: [
//         "Developed and maintained React-based web application serving 100+ users",
//         "Help in reducing the load of owner by arranging things online",
//         "The PG-Owner can see the Complaints posted by his guests and can update the status of the problem",
//         "Implemented REST APIs using Node.js and Express framework",
//         "Create listing of the properties of the PG Owner",
//       ],
//       technologies: [
//         "React",
//         "Node.js",
//         "Expressjs",
//         "MongoDB",
//         "Framer-Motion",
//       ],
//       current: true,
//     },
//     {
//       id: 2,
//       title: "Research Intern",
//       company: "World Quantz",
//       location: "Remote, US Based",
//       duration: "June 2025 - July 2025",
//       description: [
//         "Simulate alphas to refine and improve their predictive performance improving test pass rates from 78% to 87%.",
//         "Researched behavioral finance principles by examining 80+ trading case studies.",
//         "Competited in the International Quant Championship 2025.",
//         "Promoted to Research Consultant.",
//       ],
//       technologies: ["Expressional Language"],
//       current: true,
//     },
//     {
//       id: 3,
//       title: "Instrumentation Intern",
//       company: "Bry Air(ASIA)",
//       location: "Gurgaon",
//       duration: "June 2025 - July 2025",
//       description: [
//         "Explored industrial dehumidifiers and their integration into automation systems.",
//         "Worked with contactors, relays, RTDs, and sensors for motor control and process automation.",
//         "Programmed PLCs using CCW and built basic HMI control logics.",
//         "Learned to read electrical drawings and observed machine calibration and testing.",
//       ],
//       technologies: [
//         "PLC Programming",
//         "HMI Programming",
//         "Dehumidification",
//         "Reactjs",
//         "RTDs",
//         "SCADA",
//         "Electrical Drawing",
//         "Electronics Equipments",
//         "Relays",
//         "Thyristors",
//         "SMPS",
//       ],
//       current: true,
//     },
//   ];

//   const education = [
//     {
//       degree: "BTech in Instrumentation and Control Engineering",
//       school: "Netaji Subhas University of Technology",
//       location: "Dwarka, Delhi",
//       duration: "2022 - Present",
//       description:
//         "Relevant coursework: Data Structures & Algorithm, Software Engineering, Web Development, Deep Learning Enthusiast",
//     },
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: "BroCars",
//       description:
//         "Developed a full-stack web application that streamlined the online car sale and purchase process. Built with Next.js, Shadcn, TypeScript, Express.js (integrated with DDoS protection), and MongoDB, the platform ensures high performance and robust security. The app features secure authentication for smooth and reliable account management. Users can request test drives, upload their car listings, and filter vehicles based on brand, model, and price. An admin dashboard was created to manage and moderate car submissions and test drive requests, along with interactive sales reports and analytics tools.",
//       image: "/broCars.png",
//       technologies: [
//         "Expressjs",
//         "Nextjs",
//         "Typescript",
//         "MongoDB",
//         "Shadcn",
//         "Cloudinary",
//       ],
//       github:
//         "https://github.com/prajwal2301negi/BroCars-Full_Stack_Car_Marketplace",
//       live: "https://bro-cars.vercel.app/",
//       featured: true,
//     },
//     {
//       id: 2,
//       title: "Code Hatch",
//       description:
//         "CodeHatch is a dedicated educational platform meticulously designed to serve as the ultimate centralized resource for college students pursuing technology careers. The project successfully aggregates and curates over 60 high-quality coding and computer science resources across 13 crucial categories, from mastering Data Structures & Algorithms (DSA) to building expertise in advanced fields like AI/ML, DevOps, and System Design. Its core feature is the 4-Year Coding Journey — a structured, syllabus-driven roadmap and success timeline explicitly crafted to guide users from a foundational understanding to becoming competitive, industry-ready software developers.",
//       image: "/codeHatch.png",
//       technologies: ["React.js", "Nextjs"],
//       github: "https://github.com/prajwal2301negi/CodeHatch-Tech_Resource_Hub",
//       live: "https://www.codehatch.live/",
//       featured: true,
//     },
//     {
//       id: 3,
//       title: "AI Fashion Analyzer",
//       description:
//         "Built an AI-powered web application using Next.js, TypeScript, Shadcn, and Gemini to enhance user engagement and drive sales. Integrated modern and secure authentication through Clerk, along with robust middleware protections, leading to improved user trust and retention. The app introduced a cutting-edge AI-driven style assessment feature that analyzes user-uploaded photos to predict age and body measurements with high accuracy, enabling highly personalized shopping experiences.",
//       image: "/AIFashionAnalyzer.png",
//       technologies: ["Reactjs", "Typescript", "Clerk", "Shadcn", "Gemini"],
//       github:
//         "https://github.com/prajwal2301negi/StyleIQ-AI_Powered_Fashion_Assistant",
//       live: "https://ai-fashion-analyzer.vercel.app",
//       featured: true,
//     },
//     {
//       id: 4,
//       title: "LawScope",
//       description:
//         "Developed Lawscope, an intelligent legal assistant web app built with Next.js, TypeScript, Shadcn, and Gemini. The platform empowers users to upload PDFs or plain text documents, which AI then analyzes & simplifies into clear, easy-to-understand language—making complex legal terms accessible to everyone. Lawscope also offers a feature where users can describe their real-life legal situations while taking on roles such as landlord, renter, employee, employer etc.",
//       image: "/lawscope.png",
//       technologies: ["Nextjs", "Typescript", "Shadcn", "Gemini"],
//       github:
//         "https://github.com/prajwal2301negi/Lawscope-AI-Powered_Legal_Assistant",
//       live: "https://lawscope.vercel.app",
//       featured: true,
//     },
//     {
//       id: 5,
//       title: "Savi Collection",
//       description:
//         "A comprehensive e-commerce platform for selling toys online. Built with modern web technologies to provide seamless shopping experience with product catalogs. Features include product filtering, contact us functionality, and order management system.",
//       image: "/saviCollection.png",
//       technologies: ["React", "Node.js", "MongoDB", "Express"],
//       github: "https://github.com/prajwal2301negi/SaviCollection_Client",
//       live: "https://savi-collection.vercel.app/",
//       featured: true,
//     },
//     {
//       id: 6,
//       title: "Golden Era Gym",
//       description:
//         "A modern gym website featuring membership plans, trainer profiles, class schedules, and online booking system. Designed to enhance gym's digital presence and streamline member onboarding process. Includes responsive design for mobile and desktop users.",
//       image: "/goldenEraGym.png",
//       technologies: ["React", "Tailwind CSS", "Framer Motion"],
//       github: "https://github.com/prajwal2301negi/GoldenEraGymRohini",
//       live: "https://golden-era-gym.vercel.app/",
//       featured: true,
//     },
//     {
//       id: 10,
//       title: "Coffee Machine using Hand Gesture Recognition",
//       description:
//         "This interactive virtual coffee machine utilizes hand tracking to allow users to make coffee selections using finger gestures without any physical touch. Using a webcam feed, the system detects specific finger patterns to navigate through multiple selection stages such as choosing the type of coffee, sugar quantity, and milk preference.",
//       image: "/coffeeMachine.jpg",
//       technologies: ["Python", "OpenCV"],
//       github: "https://github.com/prajwal2301negi/OpenCVProjects",
//       featured: false,
//     },
//     {
//       id: 11,
//       title: "Volume Control Using Hand Gestures",
//       description:
//         "This real-time computer vision project enables users to control system volume using simple hand gestures—specifically the distance between the thumb and index finger. By tracking hand landmarks with a webcam, it dynamically adjusts the volume based on finger distance, displaying a visual bar and percentage overlay.",
//       image: "/volume.png",
//       technologies: ["Python", "OpenCV"],
//       github: "https://github.com/prajwal2301negi/OpenCVProjects",
//       featured: false,
//     },
//     {
//       id: 12,
//       title: "Virtual Keyboard",
//       description:
//         "This project implements a virtual keyboard that allows users to type by interacting with an on-screen QWERTY keyboard using hand gestures captured from a webcam. Using computer vision and hand landmark detection, it tracks finger positions to detect which key the user is 'hovering' over and simulates key presses when a pinch gesture is detected.",
//       image: "/virtualKeyboard.jpeg",
//       technologies: ["Python", "OpenCV"],
//       github: "https://github.com/prajwal2301negi/OpenCVProjects",
//       featured: false,
//     },
//   ];

//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 origin-left z-50"
//         style={{ scaleX: scrollYProgress }}
//       />

//       <header className="fixed top-0 w-full backdrop-blur-md bg-background/80 border-b border-border z-40">
//         <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
//           <motion.h1
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
//           >
//             Portfolio
//           </motion.h1>
//           <div className="flex items-center gap-6">
//             <div className="hidden md:flex gap-6">
//               {["about", "skills", "experience", "projects", "contact"].map(
//                 (item, i) => (
//                   <motion.button
//                     key={item}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     onClick={() => scrollToSection(item)}
//                     className="capitalize hover:text-blue-500 transition-colors"
//                   >
//                     {item}
//                   </motion.button>
//                 )
//               )}
//             </div>
//             {mounted && (
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               >
//                 {theme === "dark" ? (
//                   <Sun className="h-5 w-5" />
//                 ) : (
//                   <Moon className="h-5 w-5" />
//                 )}
//               </Button>
//             )}
//           </div>
//         </nav>
//       </header>

//       <section className="min-h-screen flex items-center justify-center relative pt-20">
//         <motion.div
//           style={{ opacity, scale }}
//           className="container mx-auto px-6 text-center"
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-bold mb-6">
//               Hi, I&apos;m{" "}
//               <span className="bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-clip-text text-transparent">
//                 Prajwal Negi
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8">
//               Full Stack Developer
//             </p>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
//               Building scalable web applications and automation systems with
//               modern technologies. Passionate about creating innovative
//               solutions that bridge software and hardware.
//             </p>
//             <div className="flex gap-4 justify-center">
//               <Button size="lg" onClick={() => scrollToSection("projects")}>
//                 <Rocket className="mr-2 h-5 w-5" />
//                 View Projects
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 onClick={() => scrollToSection("contact")}
//               >
//                 <Mail className="mr-2 h-5 w-5" />
//                 Contact Me
//               </Button>
//             </div>
//           </motion.div>
//         </motion.div>
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-10"
//         >
//           <ChevronDown className="h-8 w-8 text-muted-foreground" />
//         </motion.div>
//       </section>

//       <section id="about" className="py-20 bg-muted/30">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
//             <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <p className="text-lg text-muted-foreground mb-6">
//                   I&apos;m a BTech student at Netaji Subhas University of
//                   Technology. My journey combines the precision of automation
//                   with the creativity of full-stack development.
//                 </p>
//                 <p className="text-lg text-muted-foreground mb-6">
//                   I&apos;ve worked on diverse projects ranging from AI-powered
//                   web applications to industrial automation systems, always
//                   striving to create solutions that are both technically robust
//                   and user-friendly.
//                 </p>
//                 <p className="text-lg text-muted-foreground">
//                   When I&apos;m not coding, you&apos;ll find me exploring deep
//                   learning, competing in quant championships, or experimenting
//                   with computer vision projects.
//                 </p>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <GraduationCap className="h-5 w-5" />
//                       Education
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     {education.map((edu, index) => (
//                       <div key={index}>
//                         <h3 className="font-semibold text-lg">{edu.degree}</h3>
//                         <p className="text-muted-foreground">{edu.school}</p>
//                         <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
//                           <MapPin className="h-4 w-4" />
//                           {edu.location}
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                           <Calendar className="h-4 w-4" />
//                           {edu.duration}
//                         </div>
//                         <p className="mt-4 text-sm">{edu.description}</p>
//                       </div>
//                     ))}
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section id="skills" className="py-20">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold mb-12 text-center">
//               Skills & Technologies
//             </h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//               {skillCategories.map((category, index) => (
//                 <motion.div
//                   key={category.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Card
//                     className={`h-full ${category.color} transition-all duration-300`}
//                   >
//                     <CardHeader>
//                       <CardTitle className="flex items-center gap-2">
//                         <category.icon className="h-5 w-5" />
//                         {category.title}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="flex flex-wrap gap-2">
//                         {category.skills.map((skill) => (
//                           <Badge key={skill} variant="secondary">
//                             {skill}
//                           </Badge>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section id="experience" className="py-20 bg-muted/30">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
//             <div className="max-w-4xl mx-auto space-y-6">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={exp.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Card className="hover:shadow-lg transition-shadow">
//                     <CardHeader>
//                       <div className="flex items-start justify-between">
//                         <div>
//                           <CardTitle className="flex items-center gap-2">
//                             <Briefcase className="h-5 w-5" />
//                             {exp.title}
//                           </CardTitle>
//                           <CardDescription className="text-lg font-semibold mt-1">
//                             {exp.company}
//                           </CardDescription>
//                         </div>
//                         {exp.current && (
//                           <Badge variant="default">Current</Badge>
//                         )}
//                       </div>
//                       <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
//                         <span className="flex items-center gap-1">
//                           <MapPin className="h-4 w-4" />
//                           {exp.location}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Calendar className="h-4 w-4" />
//                           {exp.duration}
//                         </span>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <ul className="space-y-2 mb-4">
//                         {exp.description.map((item, i) => (
//                           <li
//                             key={i}
//                             className="text-muted-foreground flex items-start"
//                           >
//                             <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                       <div className="flex flex-wrap gap-2">
//                         {exp.technologies.map((tech) => (
//                           <Badge key={tech} variant="outline">
//                             {tech}
//                           </Badge>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section id="projects" className="py-20">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold mb-4 text-center">
//               Featured Projects
//             </h2>
//             <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//               A collection of projects showcasing my expertise in full-stack
//               development, AI integration, and computer vision.
//             </p>
//             <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
//               {projects
//                 .filter((p) => p.featured)
//                 .map((project, index) => (
//                   <motion.div
//                     key={project.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ y: -5 }}
//                   >
//                     <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
//                       {/* <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-green-500/10 flex items-center justify-center relative overflow-hidden">
//                       <Code className="h-20 w-20 text-muted-foreground/20 group-hover:scale-110 transition-transform" />
//                     </div> */}
//                       <div className="aspect-video overflow-hidden">
//                         <Image
//                           src={project.image}
//                           alt={project.title}
//                           width={800}
//                           height={450}
//                           className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
//                         />
//                       </div>
//                       <CardHeader>
//                         <CardTitle>{project.title}</CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-muted-foreground mb-4 line-clamp-4">
//                           {project.description}
//                         </p>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                           {project.technologies.map((tech) => (
//                             <Badge key={tech} variant="secondary">
//                               {tech}
//                             </Badge>
//                           ))}
//                         </div>
//                         <div className="flex gap-2">
//                           <Button variant="outline" size="sm" asChild>
//                             <a
//                               href={project.github}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               <Github className="mr-2 h-4 w-4" />
//                               Code
//                             </a>
//                           </Button>
//                           {project.live && (
//                             <Button size="sm" asChild>
//                               <a
//                                 href={project.live}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 <ExternalLink className="mr-2 h-4 w-4" />
//                                 Live Demo
//                               </a>
//                             </Button>
//                           )}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//             </div>

//             <h3 className="text-2xl font-bold mb-8 text-center">
//               Other Projects
//             </h3>
//             <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
//               {projects
//                 .filter((p) => !p.featured)
//                 .map((project, index) => (
//                   <motion.div
//                     key={project.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ y: -5 }}
//                   >
//                     <Card className="h-full group hover:shadow-lg transition-all">
//                       <CardHeader>
//                         <CardTitle className="text-lg">
//                           {project.title}
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
//                           {project.description}
//                         </p>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                           {project.technologies.map((tech) => (
//                             <Badge
//                               key={tech}
//                               variant="secondary"
//                               className="text-xs"
//                             >
//                               {tech}
//                             </Badge>
//                           ))}
//                         </div>
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           className="w-full"
//                           asChild
//                         >
//                           <a
//                             href={project.github}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             <Github className="mr-2 h-4 w-4" />
//                             View Code
//                           </a>
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section id="contact" className="py-20 bg-muted/30">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <h2 className="text-4xl font-bold mb-6">
//               Let&apos;s Work Together
//             </h2>
//             <p className="text-xl text-muted-foreground mb-12">
//               I&apos;m always open to discussing new projects, creative ideas,
//               or opportunities to be part of your vision.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <Button size="lg" asChild>
//                 <a href="prajwalnegi21112@gmail.com">
//                   <Mail className="mr-2 h-5 w-5" />
//                   Email Me
//                 </a>
//               </Button>
//               <Button size="lg" variant="outline" asChild>
//                 <a
//                   href="https://github.com/prajwal2301negi"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Github className="mr-2 h-5 w-5" />
//                   GitHub
//                 </a>
//               </Button>
//               <Button size="lg" variant="outline" asChild>
//                 <a
//                   href="https://in.linkedin.com/in/prajwal-negi-19797724b"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Linkedin className="mr-2 h-5 w-5" />
//                   LinkedIn
//                 </a>
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <footer className="border-t border-border py-8">
//         <div className="container mx-auto px-6 text-center text-muted-foreground">
//           <p>&copy; 2025 Prajwal Negi.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  Cpu,
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
  Terminal,
  Layers,
  Zap,
  Globe,
  Star,
  Award,
  Activity,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

/* ─── Animated Counter ─── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── Typing effect ─── */
function TypeWriter({ strings }: { strings: string[] }) {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullText = strings[current];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(fullText.slice(0, text.length + 1));
        if (text.length === fullText.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(fullText.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setCurrent((c) => (c + 1) % strings.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, deleting, current, strings]);

  return (
    <span>
      {text}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.92]);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const sections = ["about", "skills", "experience", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = ["about", "skills", "experience", "projects", "contact"];

  const stats = [
    { value: 1500, suffix: "+", label: "DSA Problems" },
    { value: 9, suffix: "%", label: "Alpha Accuracy Gain" },
    { value: 6, suffix: "+", label: "Microservices Built" },
    { value: 10, suffix: "+", label: "Projects Shipped" },
  ];

  const skills = {
    Languages: ["C++", "TypeScript", "JavaScript", "Python", "SQL", "Go"],
    Backend: ["Node.js", "Express.js", "REST APIs", "RabbitMQ", "BullMQ", "Docker", "Nginx", "CI/CD", "GraphQL", "Websocket", "Zod", "Prisma ORM", "Django"],
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "ShadCN", "Framer Motion", "Bootstrap", "Figma"],
    "Data & DB": ["PostgreSQL", "MongoDB", "Redis", "NeonDB", "DB Replication", "Caching", "S3", "CDN"],
    Observability: ["Grafana Loki", "Prometheus", "Winston", "Swagger"],
    Concepts: ["System Design", "Microservices", "Event-Driven Arch.", "DSA", "OS", "DBMS", "Computer Networks"],
  };

  const skillCategories = [
    { title: "Languages", icon: Code, skills: skills["Languages"], accent: "#22d3ee" },
    { title: "Backend", icon: Server, skills: skills["Backend"], accent: "#34d399" },
    { title: "Frontend", icon: Layers, skills: skills["Frontend"], accent: "#a78bfa" },
    { title: "Data & DB", icon: Database, skills: skills["Data & DB"], accent: "#fb923c" },
    { title: "Observability", icon: Activity, skills: skills["Observability"], accent: "#f472b6" },
    { title: "Concepts", icon: Cpu, skills: skills["Concepts"], accent: "#facc15" },
  ];

  const experiences = [
    {
      id: 1,
      title: "Research Intern → Research Consultant",
      company: "WorldQuant",
      location: "Remote, US",
      duration: "May – Jul 2025",
      description: [
        "Developed 10+ quantitative alphas using statistical modeling, improving predictive accuracy from 78% to 87% — a 9 percentage point gain.",
        "Analyzed 80+ behavioral-finance case studies, applying data-driven research methodologies to equity signal generation.",
        "Competed in the International Quant Championship 2025.",
        "Promoted to Research Consultant upon internship completion.",
      ],
      technologies: ["Statistical Modeling", "Quantitative Finance", "Expressional Language", "Alpha Research"],
    },
    {
      id: 2,
      title: "FullStack Developer",
      company: "BRO PG",
      location: "Dwarka, Delhi",
      duration: "Jun – Jul 2024",
      description: [
        "Developed and maintained React-based web application serving 100+ users.",
        "Built complaint management system — guests post issues, owner updates resolution status in real-time.",
        "Implemented REST APIs using Node.js and Express, with property listing management for PG owners.",
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Framer Motion"],
    },
    {
      id: 3,
      title: "Instrumentation Intern",
      company: "Bry-Air (Asia)",
      location: "Gurgaon",
      duration: "Jun – Jul 2025",
      description: [
        "Explored industrial dehumidifiers and integration into automation systems.",
        "Worked with contactors, relays, RTDs, and sensors for motor control and process automation.",
        "Programmed PLCs using CCW and built basic HMI control logics.",
        "Read electrical drawings and observed machine calibration and testing.",
      ],
      technologies: ["PLC Programming", "HMI", "SCADA", "Electrical Systems", "RTDs"],
    },
  ];

  const education = {
    degree: "B.Tech — Instrumentation & Control Engineering",
    school: "Netaji Subhas University of Technology (NSUT)",
    location: "Delhi",
    duration: "Nov 2022 – Aug 2026",
    description: "Data Structures & Algorithms · System Design · Software Engineering · Deep Learning · Web Development",
  };

  const projects = [
    {
      id: 1,
      title: "NextHire",
      subtitle: "Job Portal & Recruitment Platform",
      description: "Architected a scalable microservices-based job portal with 5 independent REST API services (auth, user, jobs, payments, uploads) using Node.js & TypeScript. Engineered JWT + Redis token management, RBAC, and secure password reset via Nodemailer. Integrated Stripe for premium subscriptions, Cloudinary for media, Gemini AI resume analyzer, BullMQ async email queuing, rate limiting & DDoS protection. Configured Nginx API gateway for path-based routing across all services, read/write DB separation via Neon replicas, CI/CD with GitHub Actions, and centralized logging with Grafana Loki + Winston. Full Swagger API documentation.",
      image: "/nexthire.png",
      technologies: ["Node.js", "TypeScript", "Next.js", "PostgreSQL", "Redis", "BullMQ", "Stripe", "Nginx", "GitHub Actions", "Grafana Loki", "Gemini AI"],
      github: "https://github.com/prajwal2301negi",
      live: "https://next-hire-phi.vercel.app/",
      featured: true,
      tag: "Microservices",
      highlights: ["5 Independent Services", "Nginx API Gateway", "BullMQ + Gemini AI"],
    },
    {
      id: 2,
      title: "MuscleKart",
      subtitle: "Supplement E-Commerce & Delivery Platform",
      description: "Built a production-grade microservices platform for on-demand gym supplement ordering & delivery across 6 services (Auth, Store, Rider, Payment, Realtime, Job) using Node.js, TypeScript & MongoDB. Engineered event-driven architecture using RabbitMQ for async inter-service communication across payment, order & rider assignment pipelines with retry logic & fault-tolerance. Implemented real-time rider tracking, MongoDB geospatial queries for proximity-based store discovery, and Haversine distance calculation across 3 user roles (Customer, Rider, Owner/Admin). Integrated Stripe payments, JWT RBAC, deployed across Vercel, Render, CloudAMQP & MongoDB Atlas.",
      image: "/musclekart.png",
      technologies: ["Node.js", "TypeScript", "React", "MongoDB", "RabbitMQ", "Stripe", "Cloudinary", "Vercel", "Render"],
      github: "https://github.com/prajwal2301negi",
      live: "https://muscle-kart.vercel.app/",
      featured: true,
      tag: "Event-Driven",
      highlights: ["6 Microservices", "RabbitMQ Event Bus", "Real-Time Geolocation"],
    },
    {
      id: 3,
      title: "BroCars",
      subtitle: "Full-Stack Car Marketplace",
      description: "Built a full-stack car marketplace using Next.js, ShadCN, TypeScript, Express.js (with DDoS protection) & MongoDB, ensuring 99.9% uptime and scalable performance. Enabled secure authentication, test drive requests, car listings with image uploads, and advanced filtering by brand, model & price. Developed a role-based admin dashboard managing 100% of listings & test drive requests, with interactive sales analytics improving operational oversight by 70%. Digitized 90% of traditional dealership processes, increasing verified sales conversions by 60%.",
      image: "/broCars.png",
      technologies: ["Express.js", "Next.js", "TypeScript", "MongoDB", "ShadCN", "Cloudinary"],
      github: "https://github.com/prajwal2301negi/BroCars-Full_Stack_Car_Marketplace",
      live: "https://bro-cars.vercel.app/",
      featured: true,
      tag: "Full Stack",
      highlights: ["DDoS Protection", "70% Better Oversight", "60% Sales Conversion↑"],
    },
    {
      id: 4,
      title: "LawScope",
      subtitle: "AI-Powered Legal Assistant",
      description: "Built a legal assistant web app using Next.js, TypeScript, ShadCN & Gemini AI that bridges the legal knowledge gap by simplifying complex legal documents uploaded as PDFs or plain text into clear, actionable language. Enables users to describe real-life legal scenarios (e.g., renter, employer) and receive AI-generated legal advice with relevant sections and recommended next steps.",
      image: "/lawscope.png",
      technologies: ["Next.js", "TypeScript", "ShadCN", "Gemini AI"],
      github: "https://github.com/prajwal2301negi/Lawscope-AI-Powered_Legal_Assistant",
      live: "https://lawscope.vercel.app",
      featured: true,
      tag: "AI/LLM",
      highlights: ["PDF Legal Analysis", "Role-Based AI Advice", "Gemini Integration"],
    },
    {
      id: 5,
      title: "CodeHatch",
      subtitle: "Tech Resource Hub for Students",
      description: "Solved unstructured learning by curating a 4-year roadmap (DSA → MERN → ML/DL → Cybersecurity → Blockchain) trusted by 500+ students. Aggregates 60+ curated categories and 600+ hours of high-quality coding resources. Guides users from fundamentals to placement-ready through structured projects, hackathon prep, and industry-aligned learning paths.",
      image: "/codeHatch.png",
      technologies: ["React.js", "Next.js"],
      github: "https://github.com/prajwal2301negi/CodeHatch-Tech_Resource_Hub",
      live: "https://www.codehatch.live/",
      featured: false,
      tag: "EdTech",
    },
    {
      id: 6,
      title: "BookMySalon",
      subtitle: "Online Salon Appointment Booking App",
      description: "Cross-platform mobile app (Android & iOS) for real-time salon appointment booking using Flutter & Firebase. Implemented secure Firebase Authentication, Firestore-powered real-time booking management, dynamic service listings with pricing & availability, and responsive UI screens covering onboarding, service details, order tracking & profile management.",
      image: "/broCars.png",
      technologies: ["Flutter", "Dart", "Firebase Auth", "Firestore"],
      github: "https://github.com/prajwal2301negi",
      live: "",
      featured: false,
      tag: "Mobile",
    },
    {
      id: 7,
      title: "OpenCV Vision Suite",
      subtitle: "Hand Gesture Control Projects",
      description: "Collection of real-time computer vision projects: virtual coffee machine with finger-pattern navigation, system volume control via thumb-index distance tracking, and a virtual QWERTY keyboard with pinch-gesture typing — all using webcam hand landmark detection.",
      image: "/coffeeMachine.jpg",
      technologies: ["Python", "OpenCV"],
      github: "https://github.com/prajwal2301negi/OpenCVProjects",
      live: "",
      featured: false,
      tag: "Computer Vision",
    },
  ];

  const achievements = [
    { icon: Star, text: "1500+ DSA problems — LeetCode, GFG & Codeforces" },
    { icon: Award, text: "1st Place — Drone Race, ESYA 2023 (IIT Delhi Tech Fest)" },
    { icon: Award, text: "3rd Place — National-Level Grappling Competition" },
    { icon: Zap, text: "Hackathons: SIH, Walmart Sparkathon 2025, Bajaj Finserv, Code for Bharat S2" },
  ];

  const tagColors: Record<string, string> = {
    "Microservices": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    "Event-Driven": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    "Full Stack": "bg-violet-500/10 text-violet-400 border-violet-500/30",
    "AI/LLM": "bg-amber-500/10 text-amber-400 border-amber-500/30",
    "AI/CV": "bg-pink-500/10 text-pink-400 border-pink-500/30",
    "EdTech": "bg-blue-500/10 text-blue-400 border-blue-500/30",
    "Computer Vision": "bg-orange-500/10 text-orange-400 border-orange-500/30",
    "Mobile": "bg-rose-500/10 text-rose-400 border-rose-500/30",
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-[#e2e8f0] overflow-x-hidden">
      {/* Grid background overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow top */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at top, rgba(34,211,238,0.06) 0%, transparent 70%)" }}
      />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #22d3ee, #34d399, #a78bfa)",
        }}
      />

      {/* ── NAVIGATION ── */}
      <header className="fixed top-0 w-full z-40 border-b border-white/[0.06]"
        style={{ background: "rgba(8,10,15,0.85)", backdropFilter: "blur(20px)" }}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="font-mono text-sm font-semibold text-white">prajwal.dev</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollToSection(item)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-all duration-200 font-mono ${
                  activeSection === item
                    ? "text-cyan-400 bg-cyan-500/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeSection === item && (
                  <span className="text-cyan-400 mr-1">›</span>
                )}
                {item}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/prajwal2301negi" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://in.linkedin.com/in/prajwal-negi-19797724b" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 z-10">
        <motion.div style={{ opacity, scale }} className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono font-medium mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Backend / SDE Roles — 2026
            </motion.div>

            {/* Name */}
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight leading-none">
              <span className="text-white">Prajwal</span>{" "}
              <span style={{ background: "linear-gradient(135deg, #22d3ee, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Negi
              </span>
            </h1>

            {/* Typewriter */}
            <p className="text-xl md:text-2xl font-mono text-slate-400 mb-6 h-8">
              <TypeWriter strings={[
                "Backend Engineer",
                "Microservices Architect",
                "Full Stack Developer",
                "Distributed Systems Builder",
              ]} />
            </p>

            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Final-year B.Tech @ NSUT. Shipped production-grade distributed platforms with{" "}
              <span className="text-cyan-400 font-medium">6+ microservices</span>, solved{" "}
              <span className="text-cyan-400 font-medium">1500+ DSA problems</span>, and improved alpha accuracy{" "}
              <span className="text-cyan-400 font-medium">9pp at WorldQuant</span>.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-2.5 rounded-lg transition-all"
              >
                <Rocket className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-white/20 text-white hover:bg-white/5 px-6 py-2.5 rounded-lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <a
                href="https://www.prajwalnegi.site/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
              >
                <Globe className="h-4 w-4" />
                Portfolio Site
              </a>
            </div>

          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-slate-600">scroll</span>
          <ChevronDown className="h-5 w-5 text-slate-600" />
        </motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-black text-white font-mono mb-1">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-12">
              <span className="font-mono text-cyan-400 text-sm">01.</span>
              <h2 className="text-3xl font-bold text-white">About Me</h2>
              <div className="flex-1 h-px bg-white/[0.08] ml-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-5"
              >
                <p className="text-slate-400 leading-relaxed text-base">
                  I'm a final-year B.Tech student at NSUT, specializing in{" "}
                  <span className="text-white font-medium">scalable backend systems and microservices</span>.
                  My engineering spans from industrial automation to distributed software — giving me a
                  unique lens on reliability and systems thinking.
                </p>
                <p className="text-slate-400 leading-relaxed text-base">
                  I've shipped two production microservices platforms with{" "}
                  <span className="text-cyan-400 font-medium">6+ independent services each</span>, worked as a{" "}
                  <span className="text-white font-medium">Research Intern at WorldQuant</span> improving alpha
                  accuracy by 9pp, and competed in hackathons including SIH and Walmart Sparkathon 2025.
                </p>
                <p className="text-slate-400 leading-relaxed text-base">
                  Outside of code: quantitative finance, deep learning research, computer vision experiments,
                  and competing in national-level sports.
                </p>

                <div className="flex gap-3 pt-2">
                  {[
                    { label: "NSUT Delhi", icon: GraduationCap },
                    { label: "B.Tech '26", icon: Calendar },
                    { label: "Open to Work", icon: Zap },
                  ].map(({ label, icon: Icon }) => (
                    <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-white/10 text-xs font-mono text-slate-400">
                      <Icon className="w-3 h-3 text-cyan-400" />
                      {label}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Education</span>
                  </div>
                  <div className="mb-3">
                    <h3 className="text-white font-semibold text-base">{education.school}</h3>
                    <p className="text-slate-400 text-sm mt-0.5">{education.degree}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-600 mb-4">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{education.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{education.duration}</span>
                  </div>
                  <div className="border-t border-white/[0.06] pt-4">
                    <p className="text-xs text-slate-500 font-mono leading-relaxed">{education.description}</p>
                  </div>
                </div>

                {/* Achievements mini */}
                <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Achievements</span>
                  </div>
                  {achievements.map((a, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400 font-mono">
                      <a.icon className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: a.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 relative z-10 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-12">
              <span className="font-mono text-cyan-400 text-sm">02.</span>
              <h2 className="text-3xl font-bold text-white">Skills & Technologies</h2>
              <div className="flex-1 h-px bg-white/[0.08] ml-4" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 group hover:border-white/[0.15] transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: `${cat.accent}15`, border: `1px solid ${cat.accent}30` }}
                    >
                      <cat.icon className="w-3.5 h-3.5" style={{ color: cat.accent }} />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">{cat.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.06] hover:text-white hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-12">
              <span className="font-mono text-cyan-400 text-sm">03.</span>
              <h2 className="text-3xl font-bold text-white">Experience</h2>
              <div className="flex-1 h-px bg-white/[0.08] ml-4" />
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-white/10 to-transparent hidden md:block" />

              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="md:pl-16 relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-cyan-500 bg-[#080a0f] hidden md:block" />

                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-white font-semibold text-base">{exp.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-cyan-400 font-mono text-sm font-medium">{exp.company}</span>
                            <span className="text-slate-700">·</span>
                            <span className="flex items-center gap-1 text-xs font-mono text-slate-600">
                              <MapPin className="w-3 h-3" />{exp.location}
                            </span>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-slate-600 border border-white/[0.06] px-3 py-1 rounded-md bg-white/[0.02]">
                          {exp.duration}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                            <span className="text-cyan-500 mt-1.5 flex-shrink-0">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-500 border border-white/[0.06]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-cyan-400 text-sm">04.</span>
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
              <div className="flex-1 h-px bg-white/[0.08] ml-4" />
            </div>
            <p className="text-slate-500 text-sm font-mono mb-12 ml-9">
              Production-grade systems · Microservices · AI integrations · Full-stack applications
            </p>

            {/* Featured 2x2 grid */}
            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {projects.filter(p => p.featured).map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:border-white/[0.15] transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden relative bg-slate-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                    />
                    {/* Tag overlay */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-mono font-medium px-2.5 py-1 rounded-md border backdrop-blur-sm ${tagColors[project.tag] || "bg-white/10 text-white border-white/20"}`}>
                        {project.tag}
                      </span>
                    </div>
                    {/* Links overlay */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      {project.live && project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="mb-2">
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                      <p className="text-slate-500 text-xs font-mono">{project.subtitle}</p>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.highlights.map((h) => (
                          <span key={h} className="text-xs font-mono px-2 py-0.5 rounded-md bg-cyan-500/5 text-cyan-500 border border-cyan-500/20">
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-500 border border-white/[0.06]">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-600 border border-white/[0.06]">
                          +{project.technologies.length - 6}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-slate-400 hover:text-white hover:border-white/20 transition-all">
                        <Github className="w-3.5 h-3.5" />Code
                      </a>
                      {project.live && project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 hover:bg-cyan-500/20 transition-all">
                          <ExternalLink className="w-3.5 h-3.5" />Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other projects row */}
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-5">Other Projects</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {projects.filter(p => !p.featured).map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-white/[0.15] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-md border ${tagColors[project.tag] || "bg-white/10 text-white border-white/20"}`}>
                      {project.tag}
                    </span>
                    <div className="flex gap-1.5">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-slate-600 hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{project.title}</h3>
                  <p className="text-slate-500 text-xs font-mono mb-3">{project.subtitle}</p>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-1.5 py-0.5 rounded bg-white/[0.03] text-slate-600 border border-white/[0.05]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-500 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-3 h-3" />Live Demo
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className="font-mono text-cyan-400 text-sm">05.</span>
              <h2 className="text-3xl font-bold text-white">Let's Work Together</h2>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-12">
              Looking for a backend engineer who ships production systems, not just side projects?{" "}
              <span className="text-white">Let's talk.</span>
            </p>

            {/* Contact card */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 mb-8 inline-block mx-auto w-full max-w-lg">
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "prajwalnegi2301@gmail.com", href: "mailto:prajwalnegi2301@gmail.com" },
                  { icon: Github, label: "GitHub", value: "github.com/prajwal2301negi", href: "https://github.com/prajwal2301negi" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/prajwal-negi", href: "https://in.linkedin.com/in/prajwal-negi-19797724b" },
                  { icon: Globe, label: "Portfolio", value: "prajwalnegi.site", href: "https://www.prajwalnegi.site/" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.04] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-mono text-slate-600 uppercase tracking-wider">{label}</div>
                      <div className="text-sm text-slate-300 group-hover:text-white transition-colors font-mono">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <a href="mailto:prajwalnegi2301@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all">
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              <a href="https://in.linkedin.com/in/prajwal-negi-19797724b" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 text-sm transition-all">
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs text-slate-600">prajwal.dev</span>
          </div>
          <p className="font-mono text-xs text-slate-700">
            © 2026 Prajwal Negi · Built with Next.js & TypeScript
          </p>
          <div className="flex items-center gap-1 font-mono text-xs text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </div>
        </div>
      </footer>
    </div>
  );
}
