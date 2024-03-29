import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Currículo Portfólio</title>
        <meta name="description" content="Criado com NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://github.com/RaphaelMello1522"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <Image
                src="/images/GitHub.webp"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={50}
                height={24}
                priority
              />
            </a>
          </div>
          <div className={styles.description}>
          <div>
            <a
              href="https://www.linkedin.com/in/raphael-mello-280/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/LinkedIn.png"
                alt="Vercel Logo"
                className={styles.linkedin}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
          <div className='nome'>
          <h2>Raphael Mello</h2>
          <br/>
          <h2>Dev Full-Stack</h2>
          </div>
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="/sobre"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Sobre <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Um pouco mais sobre a minha pessoa...
            </p>
          </a>

          <a
            href="/experiencia"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Experiência Profissional <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Saiba mais sobre os projetos em que atuei...
            </p>
          </a>

          <a
            href="/tecnologias"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Tecnologias <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Descubra aqui as mais recentes tecnologias que disponho de conhecimento...
            </p>
          </a>

          <a
            href="https://wa.me/5541995494332?text=Ol%C3%A1+Raphael+estou+entrando+em+contato+referente+a+uma+oportunidade+de+trabalho"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contato <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Caso fique interessado e queira entrar em contato clique aqui...
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
