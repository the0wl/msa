import { BookMarked, Moon, Search, User } from "lucide-react";
import React from "react";
import logo from "../assets/logo.png";

export default function PageMain() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex h-14 flex-row">
        <div className="flex flex-row items-center pl-4">
          <img src={logo} className="h-6 dark:invert" alt="logo" />
          <h1 className="ml-4 font-[Jetbrains_Mono] text-sm text-white">
            My Super App
          </h1>
        </div>
        <div className="flex flex-1 flex-row items-center justify-center">
          <div className="flex h-8 w-[320px] rounded-full bg-zinc-200 dark:bg-zinc-600">
            <Search className="m-1.5 h-5 w-5 text-zinc-700 dark:text-zinc-100" />
            <input
              type="text"
              className="h-full w-full border-none bg-transparent pr-3 font-[Inter] text-sm text-zinc-700 outline-none placeholder:text-gray-400 dark:text-zinc-100 dark:placeholder:text-zinc-300"
              placeholder="Buscar..."
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 pr-4 pl-12">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200"
            type="button"
          >
            <Moon className="h-6 w-6" />
          </button>
          <span className="font-[Inter] text-sm font-normal text-zinc-100">
            User
          </span>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200"
            type="button"
          >
            <User className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 flex-row">
        <div className="flex h-full w-64 min-w-64 flex-col border-r-2 border-zinc-200 dark:border-zinc-600">
          <nav className="flex flex-col gap-3 py-4 pl-4">
            <div>
              <span className="font-[Inter] text-sm font-semibold text-zinc-100">
                Projetos
              </span>
            </div>
            <ol className="flex flex-col truncate pr-4 font-[Inter] text-sm font-semibold text-zinc-400">
              <li className="truncate font-semibold text-[#66BE88]">
                Intermediate React v5
              </li>
              <li className="truncate">Daily Game Development</li>
              <li className="truncate">Trabalhe 4 horas por semana</li>
            </ol>

            <div>
              <span className="text-md font-[Inter] font-medium text-zinc-100">
                Guias
              </span>
            </div>
            <ol className="flex flex-col truncate font-[Inter] text-sm text-zinc-300">
              <li className="truncate">Livro X</li>
              <li className="truncate">Aseprite</li>
              <li className="truncate">lua (LÖVE)</li>
            </ol>
          </nav>
        </div>

        {/* main */}
        <div className="flex flex-1">
          <main className="flex flex-1 flex-col gap-10 px-4">
            <div className="flex flex-col gap-2">
              <div className="flex w-full flex-col items-center justify-between pt-4 pb-6">
                <span className="font-[Inter] text-2xl font-medium text-zinc-100">
                  Projetos
                </span>
              </div>

              {/* curso */}
              <div className="flex h-24 w-full overflow-hidden rounded-lg bg-zinc-600 shadow-lg">
                <div className="flex h-24 w-36 flex-col items-center justify-center bg-[#4e9669]">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-[Inter] text-sm font-medium text-zinc-100">
                      CONCLUSÃO
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <span className="font-[Inter] text-3xl font-extrabold text-zinc-100">
                      {17}%
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-4">
                  <span className="font-[Inter] text-lg font-semibold text-zinc-100">
                    Intermediate React v5
                  </span>
                  <span className="font-[Inter] text-sm font-light text-zinc-100">
                    Plataforma de cursos FrontendMasters.
                  </span>
                </div>
              </div>

              {/* projeto pessoal */}
              <div className="flex h-24 w-full overflow-hidden rounded-lg bg-zinc-600 shadow-lg">
                <div className="flex h-24 w-36 flex-col items-center justify-center bg-[#4e9669]">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-[Inter] text-sm font-medium text-zinc-100">
                      ÂNIMO
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <span className="font-[Inter] text-3xl font-extrabold text-zinc-100">
                      {"ALTO"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-4">
                  <span className="font-[Inter] text-lg font-semibold text-zinc-100">
                    Daily Game Dev
                  </span>
                  <span className="font-[Inter] text-sm font-light text-zinc-100">
                    Construir um jogo, ao mesmo tempo que registra o que está
                    fazendo a cada dia.
                  </span>
                </div>
              </div>

              {/* livro */}
              <div className="flex h-24 w-full overflow-hidden rounded-lg bg-zinc-600 shadow-lg">
                <div className="flex h-24 w-36 flex-col items-center justify-center bg-[#4e9669]">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-[Inter] text-sm font-medium text-zinc-100">
                      PÁGINAS
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <span className="font-[Inter] text-3xl font-extrabold text-zinc-100">
                      {50}/{400}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-4">
                  <span className="font-[Inter] text-lg font-semibold text-zinc-100">
                    Trabalhe 4 horas por semana
                  </span>
                  <span className="font-[Inter] text-sm font-light text-zinc-100">
                    Terminar de ler o livro.
                  </span>
                </div>
              </div>

              {/* Ver todos */}
              <div className="flex h-24 w-full items-center justify-center rounded-lg bg-zinc-700 shadow-lg">
                <span className="text-md font-[Inter] font-semibold text-zinc-100">
                  VER TODOS
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex w-full flex-col items-center justify-between pt-4 pb-6">
                <span className="font-[Inter] text-2xl font-medium text-zinc-100">
                  Guias
                </span>
              </div>

              <div className="flex flex-row justify-center gap-4">
                <div className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-lg bg-zinc-600 shadow-lg">
                  <BookMarked className="h-10 w-10 text-zinc-100" />
                  <span className="text-center font-[Inter] text-xs font-light text-zinc-100">
                    Texto grande que deve aparecer completamente
                  </span>
                </div>

                <div className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-lg bg-zinc-600 shadow-lg">
                  <BookMarked className="h-10 w-10 text-zinc-100" />
                  <span className="text-center font-[Inter] text-xs font-light text-zinc-100">
                    Texto grande que deve aparecer completamente
                  </span>
                </div>

                <div className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-lg bg-zinc-600 shadow-lg">
                  <BookMarked className="h-10 w-10 text-zinc-100" />
                  <span className="text-center font-[Inter] text-xs font-light text-zinc-100">
                    Texto grande que deve aparecer completamente
                  </span>
                </div>

                <div className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-lg bg-zinc-600 shadow-lg">
                  <BookMarked className="h-10 w-10 text-zinc-100" />
                  <span className="text-center font-[Inter] text-xs font-light text-zinc-100">
                    Texto grande que deve aparecer completamente
                  </span>
                </div>

                <div className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-lg bg-zinc-600 shadow-lg">
                  <BookMarked className="h-10 w-10 text-zinc-100" />
                  <span className="text-center font-[Inter] text-xs font-light text-zinc-100">
                    Texto grande que deve aparecer completamente
                  </span>
                </div>

                <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-zinc-700 shadow-lg">
                  <span className="text-md font-[Inter] font-semibold text-zinc-100">
                    VER TODOS
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
