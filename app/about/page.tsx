import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo'
import { DraggableCardDemo } from '@/components/DraggableCardDemo'
import { NavbarDemo } from '@/components/NavbarDemo'
import { FloatingDockDemo } from '@/components/FloatingDockDemo'

const AboutPage = () => {
  return (
    <div className="min-h-screen mt-12 bg-white dark:bg-black transition-colors duration-300">
      <NavbarDemo />
      <DraggableCardDemo />
      <AnimatedTestimonialsDemo />
      <FloatingDockDemo />
    </div>
  )
}

export default AboutPage