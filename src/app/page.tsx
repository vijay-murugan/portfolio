import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <div id="about" className="scroll-mt-20">
        <About />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <Separator className="my-12 bg-border/50 md:my-24" />
      </div>
      <div id="experience" className="scroll-mt-20">
        <Experience />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <Separator className="my-12 bg-border/50 md:my-24" />
      </div>
      <div id="projects" className="scroll-mt-20">
        <Projects />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <Separator className="my-12 bg-border/50 md:my-24" />
      </div>
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
    </div>
  );
}
