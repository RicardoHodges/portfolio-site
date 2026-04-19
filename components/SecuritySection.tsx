export default function SecuritySection() {
  return (
    <section id="security" className="py-12">
      <h3 className="text-2xl font-semibold">Diferencial: Mentalidade de Segurança</h3>
      <p className="mt-3 text-gray-300 max-w-3xl">
        Segurança é integrada ao ciclo de desenvolvimento: threat modeling antes das features, testes automáticos de regressão de segurança, e revisões focadas em design de autenticação e autorização.
      </p>

      <div className="mt-4 grid sm:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-3 rounded">
          <strong>Prevenção</strong>
          <p className="text-xs text-gray-400 mt-2">Input validation, least privilege, e políticas de CORS restritivas.</p>
        </div>
        <div className="bg-gray-800 p-3 rounded">
          <strong>Detecção</strong>
          <p className="text-xs text-gray-400 mt-2">Logs estruturados, alertas e tracing para investigação rápida.</p>
        </div>
        <div className="bg-gray-800 p-3 rounded">
          <strong>Resposta</strong>
          <p className="text-xs text-gray-400 mt-2">Playbooks e testes de incidentes para reduzir MTTR.</p>
        </div>
      </div>
    </section>
  )
}
