'use client';

import Image from 'next/image';
import { SKILLS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const profilePic = PlaceHolderImages.find(p => p.id === 'profile-pic');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const resumePath = '/portfolio/resumes/Vijaymurugan_AppavuSivaprakasam.pdf';
  const mlResumePath = '/portfolio/resumes/Vijay_Murugan_ML.pdf';

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto grid max-w-screen-xl items-start gap-8 px-4 md:grid-cols-3 md:px-6">
        <motion.div 
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          {profilePic && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src={profilePic.imageUrl}
                alt="Vijay Murugan Appavu Sivaprakasam"
                width={200}
                height={200}
                className="rounded-full object-cover"
                data-ai-hint={profilePic.imageHint}
                priority
                onError={(e) => {
                  console.error('Failed to load profile image:', profilePic.imageUrl);
                }}
              />
            </motion.div>
          )}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-headline text-2xl font-bold ">Vijay Murugan Appavu Sivaprakasam</h2>
            <p className="text-muted-foreground text-lg font-medium">Backend & AI Engineer</p>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-3 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="w-full md:w-auto">
                <a href={resumePath} download>
                  <Download className="mr-2 h-4 w-4" />
                  Backend Resume
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="w-full md:w-auto">
                <a href={mlResumePath} download>
                  <Download className="mr-2 h-4 w-4" />
                  ML Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="md:col-span-2 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="font-headline text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate backend and AI engineer with a knack for designing and building scalable, high-performance applications. With a strong foundation in software architecture and distributed systems, I specialize in creating the backbone for modern web services. My journey into artificial intelligence has equipped me with the skills to integrate machine learning models, build intelligent features, and leverage data to create smarter, more efficient solutions. I thrive in collaborative environments and am always eager to tackle new challenges and learn new technologies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h3 className="font-headline text-2xl font-semibold mb-4">Skills</h3>
            <div className="space-y-4">
              {Object.entries(SKILLS).map(([category, skills], index) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <h4 className="font-headline text-lg font-medium mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 1.4 + index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary">{skill}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
