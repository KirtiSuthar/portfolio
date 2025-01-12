import pics2 from '../assest/logoo.png';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-20 px-4 md:px-10 lg:px-16 flex flex-row justify-between items-center bg-red-100 h-16 md:h-20 opacity-90 shadow shadow-red-200">
      {/* Logo */}
      <img src={pics2} className="w-20 md:w-28 h-10 md:h-14" alt="logo" />

      {/* Navigation */}
      <nav>
        <ul className="hidden md:flex flex-row">
          <li>
            <a
              href="Home"
              className="mx-4 md:mx-8 hover:border-b-2 border-slate-900 text-slate-800 hover:text-black text-sm md:text-lg font-bold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="mx-4 md:mx-8 hover:border-b-2 border-slate-900 text-slate-800 hover:text-black text-sm md:text-lg font-bold"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#aboutme"
              className="mx-4 md:mx-8 hover:border-b-2 border-slate-900 text-slate-800 hover:text-black text-sm md:text-lg font-bold"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="mx-4 md:mx-8 hover:border-b-2 border-slate-900 text-slate-800 hover:text-black text-sm md:text-lg font-bold"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu for Small Screens */}
      <div className="flex md:hidden">
        <button className="text-slate-800 text-lg font-bold hover:text-black">
          ☰
        </button>
      </div>
    </header>
  );
};
