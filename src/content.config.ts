// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)

const projects = defineCollection({
    loader: file("src/data/projects.json"),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        repoLink: z.string(),
        category: z.string(),
        description: z.string(),
    }),
})

const compositions = defineCollection({
    loader: file("src/data/compositions.json"),
    schema: z.object({
        id: z.number(),
        title: z.string(),
    }),
})

const navlinks = defineCollection({
    loader: file("src/data/navlinks.json"),
    schema: z.object({
        id: z.number(),
        href: z.string(),
        title: z.string(),
    }),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { compositions, projects, navlinks };