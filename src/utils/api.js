// Fake little database
import database from '../database.json'

export function getProjects() {
  return Promise.resolve(database.projects)
}

export function getProject(id) {
  const project = database.projects.find(p => p.id === id)
  return Promise.resolve(project || null)
}
