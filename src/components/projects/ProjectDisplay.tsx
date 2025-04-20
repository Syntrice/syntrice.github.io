import type { CollectionEntry } from "astro:content"
import { useState } from "react"
import ProjectCard from "./ProjectCard"

interface ProjectDisplayProps {
  projects: CollectionEntry<"projects">[]
  projectTags: CollectionEntry<"projectTags">[]
}

export default function ProjectDisplay({
  projects,
  projectTags,
}: ProjectDisplayProps) {
  const [filter, setFilter] = useState(0)

  function setFilterState(id: number) {
    setFilter(id)
  }

  function renderProjects() {

    let data = projects.sort((a, b) => b.data.id - a.data.id)

    if (filter !== 0) {
      data = data.filter(p => p.data.tags.includes(filter))
    }

    return data
      .map((obj) => (
        <li key={obj.data.id}>
          <ProjectCard project={obj} />
        </li>
      ))
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl mb-5">Projects</h1>
      <ul className="flex gap-5 py-5 flex-wrap">
        <li>
          <button
            onClick={() => setFilterState(0)}
            className={
              "tag cursor-pointer " +
              (filter !== 0 ? "button" : "bg-black/20")
            }
          >
            Show All
          </button>
        </li>
        {projectTags.map((tag) => (
          <li key={tag.id}>
            <button
              onClick={() => setFilter(tag.data.id)}
              className={
                "tag cursor-pointer " +
                (filter !== tag.data.id ? "button" : "bg-black/20")
              }
            >
              {tag.data.label}
            </button>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-5 my-5">
        {renderProjects()}
      </ul>
    </div>
  )
}
