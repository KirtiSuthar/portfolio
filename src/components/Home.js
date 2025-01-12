import pics from '../assest/first.jpg';
import resume from '../assest/KirtiSuthar_Jaipur_Student_20-02-2002.pdf';

export const Home=()=>{
    return(
          <section className="pb-28 pt-36 bg-red-100 ">
            <div className=" min-h-96  place-items-center   max-w-screen-xl gap-28 mx-auto grid grid-cols-2 ">
                <div className=" ">
                <h1 className="text-6xl font-bold leading-5 mb-14 tracking-tighter">
                    Hi! I'm <span className="hover:italic hover:text-black">Kirti Suthar</span>
                </h1>
                <p className=" font-medium text-xl mb-12 ">
                A highly motivated software developer who approaches every challenge
                 with passion and precision. My goal-driven mindset ensures that I turn 
                 vision into reality.
                 <hr></hr> I thrive on problem-solving and continuous improvement,
                  always striving to deliver 
                the best possible results with focus, creativity, and dedication.
                </p>
                <a href={resume} className="text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg  px-8 py-2.5 text-center mx-9 me-2 mb-2" download="resume">Download CV</a>
                <a href="#project" className="text-xl text-pink-700 hover:text-white border border-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg  shadow-lg shadow-pink-500/50 px-8 py-2.5 text-center me-2 mb-2 dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:hover:bg-pink-500 dark:focus:ring-pink-800  mx-9">Learn more &darr;</a>
               </div>
            
              <div>
                <img src={pics} className="w-3/5 rounded-full  ring-8 ring-pink-200 ring-offset-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:ring-pink-300 duration-300 shadow-2xl shadow-pink-500 " alt="potrait of kirti suthar"></img>
              </div>
            </div>
          </section>
    );
}

