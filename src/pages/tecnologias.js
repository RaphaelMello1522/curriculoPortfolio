import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tecnologias</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h2 className='text-3xl font-bold'>Tecnologias e Linguagens de Programação</h2>
        <div className={styles.card}>
            <p style={{color: 'white', width:'200px', marginLeft: '40px'}}>
            C#
            </p>
            <br/>
            <p style={{color: 'white', marginLeft: '40px'}}>
            Unit Of Work Design Pattern
            </p>
            <br/>
            <p style={{color: 'white', marginLeft: '40px'}}>
            Amazon Web Services
            </p>
            <br/>
            <p style={{color: 'white', marginLeft: '40px'}}>
            Sql Server avançado
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            SQLite
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            Angular
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            Azure DevOps e Azure Functions
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            IIS Express
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            Kafka
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            React Native
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            Flutter
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            ReactJS
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            Google Firebase
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            NodeJs
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            Javascript
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            WebScraping
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            WebCrawling
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            NextJs
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            Xamarin
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            MongoDB
            </p>
            <br/>
            <p style={{color: 'white',marginLeft: '40px'}}>
            Tailwind Css, Saas, BootStrap, Ant Design, Material UI
            </p>
            <br/>
        </div>
        
        </main>
    </>
  )
}
