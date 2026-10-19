import { useEffect } from 'react'
import { projects } from './content'
import { usePath } from './components/router'
import { PlayfulHome } from './playful/Home'
import { PlayfulCase } from './playful/CaseStudy'

export default function App() {
  const path = usePath()
  const match = path.match(/^\/work\/([^/]+)\/?$/)
  const project = match ? projects.find((p) => p.slug === match[1]) : undefined

  useEffect(() => {
    document.title = project ? `${project.title} — Shafay Rameez` : 'Shafay Rameez — Product designer & developer'
  }, [project])

  return project ? <PlayfulCase project={project} /> : <PlayfulHome />
}