
import './App.css'
import { Header } from './components/header'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { OurServices } from './components/nossos-servicos'
import { Footer } from './components/footer'
import { Typewriter } from 'react-simple-typewriter';
import { ScrollIndicator } from './components/scrool'


function App() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div className="bg-black">

      <ScrollIndicator/>
      <div className="">
        <Header />
      </div>

      <div id='inicio' className="   min-h-screen items-center gap-5 pt-20 flex flex-col justify-center justify-items-center text-white"> {/*div*/}
        <h1 className='text-white text-6xl md:text-5xl'>
          <Typewriter
            words={["Construindo seus Sonhos"]}
            
            
            typeSpeed={70}
            delaySpeed={1500}
            
          />
        </h1>
        <h1 className='text-[#777777]  text-5xl md:text-4xl w-[65vw] text-center'>
          <Typewriter
            words={["Nós criamos sites de alta performance, ferramentas de automação e soluções digitais."]}            
            typeSpeed={40}
            delaySpeed={1500}
          />
        </h1>
        <div className="flex flex-row pt-7 gap-10">
          <button className="bg-[#191919] text-white w-[7.5vw] md:w-[10vw]   p-2 px-4 rounded-[20px] shadow">Contrate-nos</button>
          <button className="bg-white text-black p-2 px-4 rounded-[20px] shadow">Portfolio</button>
        </div>
      </div>

      <div id='sobre' className="flex flex-col pl-[10vw] gap-5"> {/*div sobre nos */}
        <h1 className="text-white font-bold">Sobre a Info Devs</h1>
        <p className="text-[#777777]  w-[28vw]">A Info Devs nasceu como um projeto de Trabalho de Conclusão de Curso (TCC) durante uma formação em Tecnologia da Informação. Com o tempo, a iniciativa foi ganhando forma e profissionalismo, transformando-se em uma agência especializada no desenvolvimento de sites e soluções de automação personalizadas. Hoje, a Info Devs se destaca por unir inovação, eficiência e foco nas necessidades reais dos clientes</p>
      </div>

      <div className="min-h-screen items-center gap-5  flex flex-row justify-evenly justify-items-center text-white">
        <div ref={ref} className="flex flex-col justify-center items-center text-white ">
          <h1 className="text-white text-7xl">{inView && <CountUp start={0} end={2} duration={5} />}+ </h1>
          <span className='text-[#777777]  text-4xl'>Projetos</span>

        </div>
        <div ref={ref} className="flex flex-col justify-center items-center text-white ">
          <h1 className="text-white text-7xl">{inView && <CountUp start={0} end={100} duration={3} />}% </h1>
          <span className='text-[#777777]  text-4xl'>Clientes Satisfeitos</span>

        </div>
        <div ref={ref} className="flex flex-col justify-center items-center text-white ">
          <h1 className="text-white text-7xl">
            <Typewriter
              words={["Exclusivo"]}
              typeSpeed={50}
            />
         </h1>
          <span className='text-[#777777] text-4xl'>
            <Typewriter
              words={["Soluçoes digitais  "]}
              typeSpeed={10}
            />
          </span>

        </div>


      </div>

      <div id='servicos' className="flex justify-center gap-10">
        <OurServices
          text_h1='Desenvolvimento Web'
          text_p='Sites profissionais para todas as necessidades do seu negócio.'
          img={""}
        />

        <OurServices
          text_h1='Landing pages'
          text_p='Jornadas de página única com alta conversão'
          img={""}
        />

        <OurServices
          text_h1='Automação inteligente'
          text_p='Sistemas robustos, escaláveis e integrados'
          img={""}
        />
      </div>

      <div className="flex justify-center gap-50 pt-60">
        <div className="flex flex-col items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#777777" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
          </svg>


          <h1 className='text-2xl font-bold text-white'>Automação</h1>
        </div>
        <div className="flex flex-col items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#777777" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
          </svg>

          <h1 className='text-2xl font-bold text-white'>Banco de dados</h1>
        </div>
        <div className=" flex flex-col items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#777777" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

          <h1 className='text-2xl font-bold text-white'>Integração</h1>
        </div>
        <div className="flex flex-col items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#777777" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>

          <h1 className=' text-2xl font-bold text-white'>Analise</h1>
        </div>


      </div>

      <div id='portfolio' className=" flex flex-col pl-[10vw] pt-60 items-start gap-5">
        <h1 className=" font-bold text-white">Nossos Trabalhos</h1>
        <p className='text-[#777777] w-[24vw]'>Portfólio selecionado: soluções inovadoras que unem design de alto padrão, código e automação.</p>


        <div className="flex flex-row gap-10 pt-10">
          <div className="">
            <div className="h-[40vh] w-[22vw] bg-[#0D0D0D] rounded-3xl"></div>
            <div className="">
              <h1 className=" font-bold text-white">Doctors Health</h1>
              <p className='text-[#777777]'>2024</p>
            </div>
          </div>
          <div className="">
            <div className="h-[40vh] w-[22vw] bg-[#0D0D0D] rounded-3xl"></div>
            <div className="">
              <h1 className=" font-bold text-white">Automação Excel</h1>
              <p className='text-[#777777]'>2025</p>
            </div>
          </div>

        </div>
      </div>


      <div className="flex flex-col pl-[10vw] pt-60 items-start gap-5">
        <h1 className='font-bold text-white'>Vamos trabalhar juntos </h1>

        <div>

          <div id='contato' className="flex gap-5">
            <div className="flex flex-col gap-2.5">
              <span className='text-[#777777]'>Name</span>
              <input className='border-none focus:outline-none text-[#777777] bg-[#191919] h-[6vh] placeholder-[#777777] pl-5 rounded-[10px]' type="text" placeholder='Seu nome' />
            </div>
            <div className="flex flex-col gap-2.5">
              <span className='text-[#777777]'>Email</span>
              <input className='border-none placeholder-[#777777] text-[#777777] focus:outline-none bg-[#191919] h-[6vh] pl-5 rounded-[10px]   ' type="email" placeholder='Seu Email' />
            </div>
          </div>
          <div className="flex flex-col gap-5.5 pt-5">
            <span className='text-[#777777]'>Mensagem</span>
            <textarea className='border-none focus:outline-none text-[#777777] placeholder-[#777777] bg-[#191919] h-[30vh] w-[50vw] pl-5 pt-5 rounded-[10px]' placeholder='Sua mensagem'></textarea>

            <button className='bg-white h-[6vh] w-[50vw] rounded-[10px]'>Entre em contato</button>


          </div>


        </div>


        <Footer/>

      </div>








    </div>
  )
}

export default App
