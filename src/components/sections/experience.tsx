'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EXPERIENCE = [
  {
    id: 1,
    company: "GoTo",
    position: "Software Developement Engineer",
    location: "Bengaluru, Karnataka, India",
    duration: "Jun 2023 - Aug 2025",
    type: "Full-time",
    description: "Developed multiple microservices and APIs using Java Spring Boot for eCommerce platform handling subscription management and payments. ",
    achievements: [
      "Developed a payment feature for subscription-based services using Spring Boot and integrated with third-party payment gateways",
      "Worked on the development of multiple automations to settle payments and refunds",
      "Migrated over 2M+ records from MySQL to DynamoDB using multithreaded scripts",
      "Orchestrated payment APIs to consolidate transactions across multiple services",
      "Provided on-call support and live debugging for critical, customer-facing transaction issues",
      "Designed an address verification mechanism for Indian customers that reduced fraudulent activities and manual review processes by 10% while maintaining 98% accuracy",
      "Implemented AI-based user retention strategies that improved customer retention rates",
      "Mentored 2 junior engineers and led code review processes",
    ],
    technologies: ["Java", "Spring Boot", "Spring", "Python", "FastAPI", "MySQL", "DynamoDB", "AWS", "Docker", "Kubernetes"]
  },
  {
    id: 2,
    company: "GoTo",
    position: "Software Development Engineering Intern",
    location: "Bengaluru, Karnataka, India",
    duration: "Jan 2023 - Jun 2023",
    type: "Internship",
    description: "Worked on building an address handling system for users, monitored logs and improved code quality for better debugging and error tracing.",
    achievements: [
      "Spearheaded a Fast API microservice to build an address handling system for users that supported multiple address",
      "Added logs and error handling in the existing codebase to improve debugging and error tracing",
      "Monitored logs and alerting using Splunk and Sumo Logic",
    ],
    technologies: ["Java", "Spring Boot", "Spring", "Python", "FastAPI", "MySQL", "DynamoDB", "AWS", "Docker", "Kubernetes"]
  }
  
];

// Component for cursor-following tilt effect
function TiltCard({ children, index, isInView }: { 
  children: React.ReactNode; 
  index: number; 
  isInView: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ 
        opacity: 0, 
        y: 50, 
        scale: 0.95,
        rotateX: 15,
        rotateY: 5
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateX: 0,
        rotateY: 0
      } : { 
        opacity: 0, 
        y: 50, 
        scale: 0.95,
        rotateX: 15,
        rotateY: 5
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        z: 50,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Experience</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional journey in backend engineering and software development.
          </p>
        </motion.div>

        <div className="space-y-8" style={{ perspective: '1000px' }}>
          {EXPERIENCE.map((exp, index) => (
            <TiltCard key={exp.id} index={index} isInView={isInView}>
              <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1), 0 1px 8px rgba(0,0,0,0.2)',
                }}
              >
                {/* 3D depth layers */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 rounded-lg"
                  whileHover={{ 
                    opacity: 1,
                    scale: 1.01,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transform: 'translateZ(-10px)',
                    transformStyle: 'preserve-3d',
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 rounded-lg"
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transform: 'translateZ(5px)',
                    transformStyle: 'preserve-3d',
                  }}
                />
                
                <CardHeader className="relative z-10" style={{ transform: 'translateZ(10px)' }}>
                  <motion.div 
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    initial={{ opacity: 0, x: -20, rotateY: -10 }}
                    animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -20, rotateY: -10 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold">{exp.position}</CardTitle>
                      <motion.div 
                        className="flex items-center gap-2 text-primary"
                        whileHover={{ 
                          scale: 1.05,
                          rotateX: 5,
                          z: 10,
                          transition: { duration: 0.2 } 
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <Building2 className="h-4 w-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="flex flex-col gap-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: 20, rotateY: 10 }}
                      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 20, rotateY: 10 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10, rotateX: 10 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 10, rotateX: 10 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    style={{ transform: 'translateZ(5px)', transformStyle: 'preserve-3d' }}
                  >
                    <CardDescription className="text-base leading-relaxed">
                      {exp.description}
                    </CardDescription>
                  </motion.div>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10" style={{ transform: 'translateZ(8px)' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 15, rotateX: 15 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 15, rotateX: 15 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li 
                          key={achievementIndex} 
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10, rotateY: -5 }}
                          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -10, rotateY: -5 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + 0.6 + (achievementIndex * 0.1) 
                          }}
                          whileHover={{ 
                            x: 8, 
                            rotateY: 2,
                            z: 5,
                            transition: { duration: 0.2 } 
                          }}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 15, rotateX: 15 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 15, rotateX: 15 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ 
                            opacity: 0, 
                            scale: 0.5, 
                            rotateX: -20,
                            rotateY: 15,
                            z: -20
                          }}
                          animate={isInView ? { 
                            opacity: 1, 
                            scale: 1, 
                            rotateX: 0,
                            rotateY: 0,
                            z: 0
                          } : { 
                            opacity: 0, 
                            scale: 0.5, 
                            rotateX: -20,
                            rotateY: 15,
                            z: -20
                          }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.2 + 0.8 + (techIndex * 0.05),
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{ 
                            scale: 1.15,
                            y: -4,
                            rotateX: 10,
                            rotateY: 5,
                            z: 15,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ 
                            scale: 0.9,
                            rotateX: -5,
                            transition: { duration: 0.1 }
                          }}
                          style={{ 
                            transformStyle: 'preserve-3d',
                            transformOrigin: 'center center'
                          }}
                        >
                          <Badge 
                            variant="outline" 
                            className="cursor-pointer transition-all duration-200 hover:shadow-lg"
                            style={{
                              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            }}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
