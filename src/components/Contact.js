import resume from '../assest/KirtiSuthar_Jaipur_Student_20-02-2002.pdf';

export const Contact = (props) => {
  return (
    <div className="bg-red-100 p-8 md:p-36 pt-20 pb-12 flex flex-col" id={props.idcontact}>
      <h2 className="text-4xl font-bold text-gray-900 mb-8 shadow-xl shadow-red-200 w-full border-b-4 border-red-300">
        Contact me
      </h2>

      <div className="flex flex-col md:flex-row max-w-3xl mx-auto">
        <div className="flex flex-col w-full mb-8 md:mr-40">
          <span className="mb-2">
            <i className="bi bi-envelope-arrow-down p-2 mb-4"></i>kirtisuthar2002@gmail.com
          </span>
          <span className="mb-4">
            <i className="bi bi-telephone p-2"></i>1234567890
          </span>
          <div className="flex mb-6">
            <i className="bi bi-linkedin p-2"></i>
            <i className="bi bi-twitter p-2"></i>
            <i className="bi bi-facebook p-2"></i>
            <i className="bi bi-whatsapp p-2"></i>
            <i className="bi bi-instagram p-2"></i>
          </div>
          <a
            href={resume}
            className="ring-2 ring-red-300 hover:focus:ring-offset-2 text-lg hover:focus:ring-4 hover:focus:ring-red-300 rounded bg-red-200 hover:bg-red-300 place-self-start px-6 py-2 mt-4"
            download="resume"
          >
            Download CV
          </a>
        </div>

        {/* Form Section */}
        <form className="flex flex-col gap-8 w-full">
          <input
            type="text"
            className="outline-none ring-1 ring-red-300 focus:ring-4 focus:ring-red-400 h-8 rounded-md"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="outline-none ring-1 ring-red-300 focus:ring-4 focus:ring-red-400 h-8 rounded-md"
            placeholder="Your Email"
          />
          <input
            type="text"
            className="outline-none ring-1 ring-red-300 focus:ring-4 focus:ring-red-400 h-24 rounded-md"
            placeholder="Your Message"
          />
          <button className="ring-2 ring-red-300 hover:focus:ring-offset-2 text-lg hover:focus:ring-4 hover:focus:ring-red-300 rounded bg-red-200 hover:bg-red-300 place-self-start px-6 py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
