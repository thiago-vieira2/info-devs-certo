
import './App.css'
import { Header } from './components/header'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { OurServices } from './components/nossos-servicos'

function App() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div className="bg-black">
      <div className="">
        <Header />
      </div>

      <div className="min-h-screen items-center gap-5 pt-20 flex flex-col justify-center justify-items-center text-white"> {/*div*/}
        <h1 className='text-white text-6xl'>Building your dreams online.</h1>
        <h1 className='text-[#777777]  text-5xl w-[65vw] text-center'>We craft high-performance websites, automation tools, and digital solutions.</h1>
        <div className="flex flex-row pt-7 gap-10">
          <button className="bg-[#191919] text-white w-[7.5vw]  p-2 px-4 rounded-[20px] shadow">Contrate-nos</button>
          <button className="bg-white text-black p-2 px-4 rounded-[20px] shadow">Portfolio</button>
        </div>
      </div>

      <div className="flex flex-col pl-[30vh] gap-5"> {/*div sobre nos */}
        <h1 className="text-white font-bold">Sobre a Info Devs</h1>
        <p className="text-[#777777]  w-[28vw]">A Info Devs nasceu como um projeto de Trabalho de Conclusão de Curso (TCC) durante uma formação em Tecnologia da Informação. Com o tempo, a iniciativa foi ganhando forma e profissionalismo, transformando-se em uma agência especializada no desenvolvimento de sites e soluções de automação personalizadas. Hoje, a Info Devs se destaca por unir inovação, eficiência e foco nas necessidades reais dos clientes</p>
      </div>

      <div className="min-h-screen items-center gap-5  flex flex-row justify-evenly justify-items-center text-white">
        <div ref={ref} className="flex flex-col justify-center items-center text-white ">
          <h1 className="text-white text-7xl">{inView && <CountUp start={0} end={2} duration={5}/>}+ </h1>
          <span className='text-[#777777]  text-4xl'>Projetos</span>

        </div>
          <div ref={ref} className="flex flex-col justify-center items-center text-white ">
          <h1 className="text-white text-7xl">{inView && <CountUp start={0} end={100} duration={3}/>}% </h1>
          <span className='text-[#777777]  text-4xl'>Clientes Satisfeitos</span>

        </div>
          <div ref={ref} className="flex flex-col justify-center items-center text-white ">
          <h1 className="text-white text-7xl">Personalizado </h1>
          <span className='text-[#777777] text-4xl'>Soluçoes digitais</span>

        </div>
      
     
      </div>

      <div className="flex justify-center gap-10">
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
    </div>
  )
}

export default App
