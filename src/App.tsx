import React from 'react'
import { BookMarked, Moon, Search, User } from 'lucide-react'
import logo from './assets/logo.png'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-row h-14">
        <div className='flex flex-row items-center pl-4'>
          <img src={logo} className="h-6 dark:invert" alt="logo" />
          <h1 className='font-[Jetbrains_Mono] text-white text-sm ml-4'>My Super App</h1>
        </div>
        <div className='flex flex-1 flex-row items-center justify-center'>
          <div className='flex w-[320px] h-8 bg-zinc-200 dark:bg-zinc-600 rounded-full'>
            <Search className="m-1.5 h-5 w-5 text-zinc-700 dark:text-zinc-100" />
            <input type="text" 
              className="h-full w-full pr-3 font-[Inter] bg-transparent outline-none border-none text-sm text-zinc-700 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-300"
              placeholder="Buscar..."
            />
          </div>
        </div>
        <div className='flex flex-row items-center pl-12 pr-4 gap-4'>
          <button className='flex items-center justify-center bg-zinc-200 rounded-full h-9 w-9' type="button">
            <Moon className='h-6 w-6'/>
          </button>
          <button className='flex items-center justify-center bg-zinc-200 rounded-full h-9 w-9' type="button">
            <User className='h-6 w-6'/>
          </button>
        </div>
      </header>
      
      <div className='flex flex-1 flex-row'>
        <div className='flex flex-col h-full w-64 min-w-64 border-r-2 border-zinc-200 dark:border-zinc-600'>
          <nav className='flex flex-col gap-3 py-4 pl-4'>
            <div>
              <span className='font-semibold text-sm font-[Inter] text-zinc-100'>Projetos</span>
            </div>
            <ol className='flex flex-col truncate text-zinc-400 font-[Inter] font-semibold text-sm pr-4'>
              <li className='truncate font-semibold text-[#66BE88]'>Intermediate React v5</li>
              <li className='truncate'>Daily Game Development</li>
              <li className='truncate'>Trabalhe 4 horas por semana</li>
            </ol>

            <div>
              <span className='font-medium text-md font-[Inter] text-zinc-100'>Guias</span>
            </div>
            <ol className='flex flex-col truncate text-sm text-zinc-300 font-[Inter]'>
              <li className='truncate'>Livro X</li>
              <li className='truncate'>Aseprite</li>
              <li className='truncate'>lua (LÖVE)</li>
            </ol>
          </nav>
        </div>

        {/* main */}
        <div className='flex flex-1'>
          <main className='flex flex-col flex-1 px-4 gap-10'>
            
            <div className='flex flex-col gap-2'>

              <div className='flex flex-col w-full items-center justify-between pt-4 pb-6'>
                <span className='font-medium text-2xl font-[Inter] text-zinc-100'>Projetos</span>
              </div>

              {/* curso */}
              <div className='flex h-24 w-full bg-zinc-600 shadow-lg rounded-lg overflow-hidden'>
                <div className='flex flex-col h-24 w-36 bg-[#4e9669] items-center justify-center'>
                  <div className='flex flex-col justify-center items-center'>
                    <span className='font-medium text-sm font-[Inter] text-zinc-100'>CONCLUSÃO</span>
                  </div>
                  <div className='flex justify-center'>
                    <span className='font-extrabold text-3xl font-[Inter] text-zinc-100'>{17}%</span>
                  </div>
                </div>

                <div className='flex flex-1 flex-col p-4 gap-2'>
                  <span className='font-semibold text-lg font-[Inter] text-zinc-100'>Intermediate React v5</span>
                  <span className='font-light text-sm font-[Inter] text-zinc-100'>Plataforma de cursos FrontendMasters.</span>
                </div>
              </div>

              {/* projeto pessoal */}
              <div className='flex h-24 w-full bg-zinc-600 shadow-lg rounded-lg overflow-hidden'>
                <div className='flex flex-col h-24 w-36 bg-[#4e9669] items-center justify-center'>
                  <div className='flex flex-col justify-center items-center'>
                    <span className='font-medium text-sm font-[Inter] text-zinc-100'>ÂNIMO</span>
                  </div>
                  <div className='flex justify-center'>
                    <span className='font-extrabold text-3xl font-[Inter] text-zinc-100'>{"ALTO"}</span>
                  </div>
                </div>

                <div className='flex flex-1 flex-col p-4 gap-2'>
                  <span className='font-semibold text-lg font-[Inter] text-zinc-100'>Daily Game Dev</span>
                  <span className='font-light text-sm font-[Inter] text-zinc-100'>Construir um jogo, ao mesmo tempo que registra o que está fazendo a cada dia.</span>
                </div>
              </div>

              {/* livro */}
              <div className='flex h-24 w-full bg-zinc-600 shadow-lg rounded-lg overflow-hidden'>
                <div className='flex flex-col h-24 w-36 bg-[#4e9669] items-center justify-center'>
                  <div className='flex flex-col justify-center items-center'>
                    <span className='font-medium text-sm font-[Inter] text-zinc-100'>PÁGINAS</span>
                  </div>
                  <div className='flex justify-center'>
                    <span className='font-extrabold text-3xl font-[Inter] text-zinc-100'>{50}/{400}</span>
                  </div>
                </div>

                <div className='flex flex-1 flex-col p-4 gap-2'>
                  <span className='font-semibold text-lg font-[Inter] text-zinc-100'>Trabalhe 4 horas por semana</span>
                  <span className='font-light text-sm font-[Inter] text-zinc-100'>Terminar de ler o livro.</span>
                </div>
              </div>

              {/* Ver todos */}
              <div className='flex h-24 w-full bg-zinc-700 shadow-lg rounded-lg justify-center items-center'>
                <span className='font-semibold text-md font-[Inter] text-zinc-100'>VER TODOS</span>
              </div>                
            </div>

            <div className='flex flex-col gap-2'>
            <div className='flex flex-col w-full items-center justify-between pt-4 pb-6'>
                <span className='font-medium text-2xl font-[Inter] text-zinc-100'>Guias</span>
              </div>

              <div className='flex flex-row gap-4 justify-center'>
                <div className='flex flex-col h-32 w-32 bg-zinc-600 rounded-lg justify-center items-center gap-2 shadow-lg'>
                  <BookMarked className='text-zinc-100 h-10 w-10' />
                  <span className='font-light text-xs font-[Inter] text-zinc-100 text-center'>Texto grande que deve aparecer completamente</span>
                </div>

                <div className='flex flex-col h-32 w-32 bg-zinc-600 rounded-lg justify-center items-center gap-2 shadow-lg'>
                  <BookMarked className='text-zinc-100 h-10 w-10' />
                  <span className='font-light text-xs font-[Inter] text-zinc-100 text-center'>Texto grande que deve aparecer completamente</span>
                </div>

                <div className='flex flex-col h-32 w-32 bg-zinc-600 rounded-lg justify-center items-center gap-2 shadow-lg'>
                  <BookMarked className='text-zinc-100 h-10 w-10' />
                  <span className='font-light text-xs font-[Inter] text-zinc-100 text-center'>Texto grande que deve aparecer completamente</span>
                </div>

                <div className='flex flex-col h-32 w-32 bg-zinc-600 rounded-lg justify-center items-center gap-2 shadow-lg'>
                  <BookMarked className='text-zinc-100 h-10 w-10' />
                  <span className='font-light text-xs font-[Inter] text-zinc-100 text-center'>Texto grande que deve aparecer completamente</span>
                </div>

                <div className='flex flex-col h-32 w-32 bg-zinc-600 rounded-lg justify-center items-center gap-2 shadow-lg'>
                  <BookMarked className='text-zinc-100 h-10 w-10' />
                  <span className='font-light text-xs font-[Inter] text-zinc-100 text-center'>Texto grande que deve aparecer completamente</span>
                </div>

                <div className='flex h-32 w-32 bg-zinc-700 rounded-lg justify-center items-center shadow-lg'>
                  <span className='font-semibold text-md font-[Inter] text-zinc-100'>VER TODOS</span>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}

export default App
