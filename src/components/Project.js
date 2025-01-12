import pro1 from '../assest/project1.png';
import pro2 from '../assest/project2.png';
import pro3 from '../assest/project3.jpg';

export const Project=(props)=>{
    return(
        <div className="bg-red-100 mx-auto px-28 py-14 pt-20" id={props.idproject}>

         <h2 className="ml-12 text-5xl font-bold text-gray-900 shadow-xl shadow-red-200  mb-20 w-11/12  border-b-4 border-red-300">Projects</h2>
          <div className="flex mb-12 ">
            <div className="max-w-xl mr-36  m-10 ">
                <h1 className="text-3xl font-abold mb-6 text-gray-700">Movie-con-website</h1>
                <p className=" text-lg mb-4">Developed a user-friendly movie browsing platform with detailed information on movies, including ratings and reviews.
                   Implemented a dark theme feature for enhanced user experience.
                   Collaborated with cross-functional teams to ensure seamless website functionality
                </p>
                <a href="https://moviecon-site.netlify.app/" target="_blank" className=" text-xl font-semibold  mr-6  hover:border-b-2 border-slate-900 hover:text-slate-900 active">Site Link</a>
            </div>
               <img src={pro1} className="max-w-96  " alt="project pic"></img>
         </div>
        <div className="flex mb-12 ">
             <img src={pro2} className="max-w-96 mr-36 m-10 " alt="project pic"></img>
             <div className="max-w-xl m-10 mt-20">
                <h1 className="text-3xl font-abold mb-6 text-gray-700">Taskmate-website</h1>
                <p className=" text-lg mb-4"> Developed a productivity tool with 6 themes for efficient task and project management.
                           Designed a responsive website utilising localStorage for seamless user experience.
                          Collaborated with cross-functional teams to ensure successful implementation of the app.
                          Achieved high user satisfaction and engagement through user-friendly interface design.
                </p>
                <a href="https://github.com/KirtiSuthar/taskmate" target="_blank" className=" text-xl font-semibold  mr-6  hover:border-b-2 border-slate-900 hover:text-slate-900 active">Site Link</a>
             </div>  
             </div>
             <div className="flex">
            <div className="max-w-xl mr-36  m-10 ">
                <h1 className="text-3xl font-abold mb-6 text-gray-700">Personal Portfolio</h1>
                <p className=" text-lg mb-4">Developed a personal portfolio website using ReactJS
                     and Tailwind CSS to showcase my skills, projects, and achievements. The site 
                     features a responsive design with smooth navigation, dynamic sections, and an 
                     interactive user interface. It serves as a professional platform to 
                    present my work and connect with potential employers or collaborators.
                </p>
                <a href="#Home" target="_blank" className=" text-xl font-semibold  mr-6  hover:border-b-2 border-slate-900 hover:text-slate-900 active">Site Link</a>
            </div>
               <img src={pro3} className="max-w-96" alt="project pic"></img>
         </div> 
        


        </div>
    );
}