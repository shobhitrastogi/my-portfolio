import { FocusCardsDemo } from '@/components/FocusCardsDemo'
import { ExpandableCardDemo } from "@/components/ExpandableCardDemo";

const ProjectsPage = () => {
  return (
    <>
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore my latest work and creative projects. Each project represents a unique challenge and learning experience.
          </p>
        </div>
        <FocusCardsDemo />
      </div>
    </div>
 <ExpandableCardDemo />
    </>
  )
}

export default ProjectsPage