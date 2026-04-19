import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import SecuritySection from '../components/SecuritySection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>João Silva — Full-Stack Developer & Security-Oriented Engineer</title>
        <meta name="description" content="Construo aplicações seguras, escaláveis e de alta performance. Ajudo times a reduzir riscos e entregar produtos confiáveis." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <SecuritySection />
          <ContactForm />
          <Footer />
        </div>
      </main>
    </>
  )
}
