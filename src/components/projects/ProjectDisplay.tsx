import type { CollectionEntry } from "astro:content"
import ProjectCard from "./ProjectCard"

interface ProjectDisplayProps {
  projects: CollectionEntry<'projects'>[]
}

export default function ProjectDisplay({ projects }: ProjectDisplayProps) {
  return (
    <ul className="flex flex-col gap-5 my-5">
      {projects.sort((a, b) => b.data.id - a.data.id).map(obj => (
        <li>
          <ProjectCard project={obj}/>
        </li>
      ))}
    </ul>
  )
  
}