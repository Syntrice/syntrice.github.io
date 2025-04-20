import { Fa6BrandsSquareGithub, HeroiconsGlobeAlt } from "@components/icons"
import type { CollectionEntry } from "astro:content"

interface ProjectCardProps {
    project: CollectionEntry<"projects">
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="p-5 dark:bg-black/10 bg-black/5 shadow rounded-2xl">
            <p className="mb-5 text-2xl font-bold">{project.data.title}</p>
            <hr />
            <div className="grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 gap-5 my-8">
                <div>
                    {project.data.imgPath && (
                        <a
                            className="inline-block mb-5"
                            target="_blank"
                            href={
                                project.data.deploymentLink
                                    ? project.data.deploymentLink
                                    : project.data.repoLink
                            }
                        >
                            <img
                                className="rounded-2xl max-md:w-auto"
                                src={project.data.imgPath}
                                width="500"
                            />
                        </a>
                    )}
                    <p>{project.data.description}</p>
                </div>
                <div>
                    <p className="text-xl font-bold mb-5">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                        {project.data.technologies.map((i: string) => (
                            <p className="tag" key={i}>{i}</p>
                        ))}
                    </div>
                </div>
            </div>

            <a target="_blank" className="button" href={project.data.repoLink}>
                <Fa6BrandsSquareGithub className="icon" /> GitHub
            </a>
            {project.data.deploymentLink && (
                <a className="button" href={project.data.deploymentLink}>
                    <HeroiconsGlobeAlt className="icon" /> Live Demo
                </a>
            )}
        </div>
    )
}
