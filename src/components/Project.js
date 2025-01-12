import pro1 from '../assest/project1.png';
import pro2 from '../assest/project2.png';
import pro3 from '../assest/project3.jpg';

export const Project = (props) => {
  return (
    <div className="bg-red-100 mx-auto px-6 md:px-12 lg:px-20 py-14 pt-20" id={props.idproject}>
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 shadow-xl shadow-red-200 mb-12 md:mb-20 w-full border-b-4 border-red-300">
        Projects
      </h2>

      {/* Project 1 */}
      <div className="flex flex-col lg:flex-row mb-12 items-center">
        <div className="max-w-xl mb-8 lg:mb-0 lg:mr-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-700">Movie-con-website</h1>
          <p className="text-base md:text-lg mb-4">
            Developed a user-friendly movie browsing platform with detailed information on movies, including ratings and reviews.
            Implemented a dark theme feature for enhanced user experience. Collaborated with cross-functional teams to ensure
            seamless website functionality.
          </p>
          <a
            href="https://moviecon-site.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-pink-700 hover:text-black border-b-2 border-transparent hover:border-pink-700"
          >
            Site Link
          </a>
        </div>
        <img src={pro1} className="w-full lg:w-1/2 rounded-lg shadow-lg" alt="Movie-con project preview" />
      </div>

      {/* Project 2 */}
      <div className="flex flex-col lg:flex-row-reverse mb-12 items-center">
        <div className="max-w-xl mb-8 lg:mb-0 lg:ml-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-700">Taskmate-website</h1>
          <p className="text-base md:text-lg mb-4">
            Developed a productivity tool with 6 themes for efficient task and project management. Designed a responsive website
            utilizing localStorage for seamless user experience. Collaborated with cross-functional teams to ensure successful
            implementation of the app. Achieved high user satisfaction and engagement through user-friendly interface design.
          </p>
          <a
            href="https://github.com/KirtiSuthar/taskmate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-pink-700 hover:text-black border-b-2 border-transparent hover:border-pink-700"
          >
            Site Link
          </a>
        </div>
        <img src={pro2} className="w-full lg:w-1/2 rounded-lg shadow-lg" alt="Taskmate project preview" />
      </div>

      {/* Project 3 */}
      <div className="flex flex-col lg:flex-row mb-12 items-center">
        <div className="max-w-xl mb-8 lg:mb-0 lg:mr-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-700">Personal Portfolio</h1>
          <p className="text-base md:text-lg mb-4">
            Developed a personal portfolio website using ReactJS and Tailwind CSS to showcase my skills, projects, and achievements.
            The site features a responsive design with smooth navigation, dynamic sections, and an interactive user interface. It
            serves as a professional platform to present my work and connect with potential employers or collaborators.
          </p>
          <a
            href="#Home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-pink-700 hover:text-black border-b-2 border-transparent hover:border-pink-700"
          >
            Site Link
          </a>
        </div>
        <img src={pro3} className="w-full lg:w-1/2 rounded-lg shadow-lg" alt="Portfolio project preview" />
      </div>
    </div>
  );
};
