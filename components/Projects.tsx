const PROJECTS = [
  {
    name: 'Secure API Gateway',
    problem: 'Organização precisava centralizar autenticação e reduzir blast radius de serviços internos.',
    tech: ['Next.js', 'Node.js', 'OAuth2', 'OpenID Connect', 'Postgres'],
    impact: 'Reduziu superfícies de ataque por 60% e permitiu rotação de credenciais sem downtime.',
    code: '#',
    demo: '#'
  },
  {
    name: 'Real-time Audit Stream',
    problem: 'Falta de observabilidade sobre eventos críticos e alterações de privilégios.',
    tech: ['Kafka', 'Node.js', 'ElasticSearch'],
    impact: 'Detecção precoce de anomalias e tempos médios de investigação reduzidos em 70%.',
    code: '#',
    demo: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h3 className="text-2xl font-semibold">Projetos selecionados</h3>
      <p className="mt-2 text-gray-400">Casos com problema claro, solução e impacto mensurável.</p>

      <div className="mt-6 space-y-6">
        {PROJECTS.map(p => (
          <article key={p.name} className="bg-gray-800 p-4 rounded">
            <h4 className="text-lg font-semibold">{p.name}</h4>
            <p className="text-sm text-gray-300 mt-2"><strong>Problema:</strong> {p.problem}</p>
            <p className="text-sm text-gray-300 mt-1"><strong>Solução & Tecnologias:</strong> {p.tech.join(', ')}</p>
            <p className="text-sm text-gray-300 mt-1"><strong>Impacto:</strong> {p.impact}</p>
            <div className="mt-3 flex gap-3">
              <a className="text-primary" href={p.code}>Código</a>
              <a className="text-primary" href={p.demo}>Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
