import pics from '../assest/first.jpg';
import resume from '../assest/KirtiSuthar_Jaipur_Student_20-02-2002.pdf';

export const Home = () => {
  return (
    <section className="pb-20 pt-28 bg-red-100">
      <div className="min-h-96 place-items-center max-w-screen-xl gap-8 md:gap-16 mx-auto grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 lg:px-16">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-snug mb-10 tracking-tight">
            Hi! I'm{' '}
            <span className="hover:italic hover:text-black">Kirti Suthar</span>
          </h1>
          <p className="font-medium text-lg md:text-xl mb-8 leading-relaxed">
            A highly motivated software developer who approaches every challenge
            with passion and precision. My goal-driven mindset ensures that I
            turn vision into reality. <br />
            <hr className="my-4" /> I thrive on problem-solving and continuous
            improvement, always striving to deliver the best possible results
            with focus, creativity, and dedication.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={resume}
              className="text-lg md:text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg px-6 py-2.5 text-center"
              download="resume"
            >
              Download CV
            </a>
            <a
              href="#project"
              className="text-lg md:text-xl text-pink-700 hover:text-white border border-pink-500 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg shadow-lg shadow-pink-500/50 px-6 py-2.5 text-center dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:hover:bg-pink-500 dark:focus:ring-pink-800"
            >
              Learn more &darr;
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={pics}
            className="w-3/4 md:w-3/5 lg:w-1/2 rounded-full ring-8 ring-pink-200 ring-offset-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:ring-pink-300 shadow-2xl shadow-pink-500"
            alt="Portrait of Kirti Suthar"
          />
        </div>
      </div>
    </section>
  );
};
