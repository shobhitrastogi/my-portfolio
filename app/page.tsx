import { LayoutTextFlipDemo } from "../components/LayoutTextFlipDemo";
import Experience from '../components/Experience';
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import { SkillsDemo } from "@/components/SkillsDemo";
import { NavbarDemo } from "@/components/NavbarDemo";
// import { LensDemo } from "@/components/LensDemo";


export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <NavbarDemo />
      <LayoutTextFlipDemo />
      <Experience />
      
      <SkillsDemo />
      <AnimatedTestimonialsDemo />
    {/* <LensDemo /> */}
    <FloatingDockDemo />
    </div>
  );
}
