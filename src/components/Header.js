import pics2 from '../assest/logoo.png';

export const Header=()=>{
  return(
        <header className="fixed top-0 bottom-0 w-full z-20 px-16  flex flex-row bg-red-100 h-20 place-content-between place-items-center opacity-90 shadow  shadow-red-200 ">
            <img src={pics2} className="w-28 h-14 mx-8" alt="logo"></img>
            <nav >
                <ul className="flex flex-row">
                    <li><a href="Home" className="mx-8 hover:border-b-2 border-slate-900 text-slate-800 hover:text-black text-lg font-bold  ">Home</a></li>
                    <li><a href="#project" className="mx-8 hover:border-b-2 border-slate-900 text-slate-800 hover:text-black text-lg font-bold " >Project</a></li>
                    <li><a href="#aboutme" className="mx-8 hover:border-b-2 border-slate-900 text-slate-800 hover:text-black text-lg font-bold ">About me</a></li>
                    <li><a href="#contact" className="mx-8 hover:border-b-2 border-slate-900 text-slate-800 hover:text-black text-lg font-bold  ">Contact me</a></li>
                </ul>
            </nav>
        </header>
  );
}