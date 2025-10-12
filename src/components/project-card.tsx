'use client';

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, ExternalLink } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  repoUrl: string | null;
  liveUrl: string | null;
  imageId: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Component for cursor-following tilt effect
function TiltCard({ children, index }: { 
  children: React.ReactNode; 
  index: number; 
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
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateX: 0,
        rotateY: 0
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
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <TiltCard index={index}>
      <Card className="flex h-full transform-gpu flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl relative border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20"
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
            transform: 'translateZ(-5px)',
            transformStyle: 'preserve-3d',
          }}
        />
        
        {projectImage && (
          <div className="relative h-48 w-full overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              <Image
                src={projectImage.imageUrl}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover"
                data-ai-hint={projectImage.imageHint}
              />
            </motion.div>
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-headline">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-4">
          <p className="text-muted-foreground">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          {project.repoUrl && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" asChild>
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code
                </Link>
              </Button>
            </motion.div>
          )}
          {project.liveUrl && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="default" size="sm" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </TiltCard>
  );
};

export default ProjectCard;
