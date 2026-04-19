type Skill = { name: string; level: string; notes?: string }
const SKILLS: Record<string, Skill[]> = {
  Frontend: [
    { name: 'React / Next.js', level: 'Expert', notes: 'SSR, performance, accessible components' },
    { name: 'TypeScript', level: 'Advanced' }
  ],
  Backend: [
    { name: 'Node.js', level: 'Advanced', notes: 'APIs, queues, design for failure' },
    { name: 'Databases', level: 'Advanced', notes: 'Postgres, indexing, data integrity' }
  ],
  Security: [
    { name: 'Threat modeling', level: 'Advanced', notes: 'Identify and mitigate critical paths' },
    { name: 'Appsec', level: 'Advanced', notes: 'OWASP fixes, secure coding' }
  ],
  DevOps: [
    { name: 'CI/CD', level: 'Advanced', notes: 'Automated pipelines, rollback strategies' },
    { name: 'Observability', level: 'Advanced', notes: 'Tracing, metrics, alerting' }
  ]
}

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h3 className="text-2xl font-semibold">Skills</h3>
      <p className="mt-2 text-gray-400">Separadas por contexto de uso — não apenas uma lista.</p>

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="bg-gray-800 p-4 rounded">
            <h4 className="font-semibold">{category}</h4>
            <ul className="mt-3 text-gray-300">
              {items.map(s => (
                <li key={s.name} className="mb-2">
                  <div className="flex justify-between">
                    <span>{s.name}</span>
                    <span className="text-sm text-gray-400">{s.level}</span>
                  </div>
                  {s.notes && <div className="text-xs text-gray-500 mt-1">{s.notes}</div>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
