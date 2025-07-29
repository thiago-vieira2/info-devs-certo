export function Footer() {
  return (
    <footer className="w-full bg-black py-10 px-6">
      <div className="flex flex-col lg:flex-row justify-evenly items-start gap-10 lg:gap-32">
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-white font-semibold text-lg mb-2">Nossos trabalhos</h1>
          <p className="text-[#777777]">Web Dev</p>
          <p className="text-[#777777]">Automação</p>
          <p className="text-[#777777]">Landing Pages</p> 
        </div>
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-white font-semibold text-lg mb-2">Sobre</h1>
          <p className="text-[#777777]">Nossa História</p>
        </div>
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-white font-semibold text-lg mb-2">Portfólio</h1>
          <p className="text-[#777777]">Doctors Health</p>
          <p className="text-[#777777]">Automação Excel</p>
        </div>
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-white font-semibold text-lg mb-2">Contato</h1>
          <p className="text-[#777777]">Email</p>
          <p className="text-[#777777]">LinkedIn</p>
          <p className="text-[#777777]">GitHub</p>
        </div>
      </div>
    </footer>
  );
}