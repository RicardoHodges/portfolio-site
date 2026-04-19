export default function About() {
  return (
    <section id="about" className="py-12">
      <h3 className="text-2xl font-semibold">Sobre mim</h3>
      <p className="mt-3 text-gray-300 max-w-3xl">
        Sou um desenvolvedor full-stack com background em cibersegurança. Em vez de listar tecnologias, foco nos problemas: reduzir superfície de ataque, aumentar observabilidade e entregar código que é fácil de auditar.
      </p>

      <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-gray-400">
        <li><strong>Problemas que resolvo:</strong> vazamentos de dados, falta de testes de segurança, deploys instáveis.</li>
        <li><strong>Como penso:</strong> priorizo defesa em profundidade, análise de risco e trade-offs entre velocidade e segurança.</li>
      </ul>
    </section>
  )
}
