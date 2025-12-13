import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo'
import { DraggableCardDemo } from '@/components/DraggableCardDemo'
import { NavbarDemo } from '@/components/NavbarDemo'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <NavbarDemo />
      <DraggableCardDemo />
      <AnimatedTestimonialsDemo />
    </div>
  )
}

export default AboutPage