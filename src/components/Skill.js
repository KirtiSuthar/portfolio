export const Skill = () => {
    return (
      <div className="p-6 md:p-8">
        {/* Technical Skills Section */}
        <h1 className="font-extrabold text-lg md:text-xl mb-2 text-gray-800">Technical Skills:</h1>
        <p className="mb-2"><span className="font-bold">Programming Languages:</span> C, C++, Java, HTML, CSS, JavaScript</p>
        <p className="mb-2"><span className="font-bold">Frameworks:</span> Reactjs, Tailwind CSS, Nodejs, Expressjs</p>
        <p className="mb-2"><span className="font-bold">Databases:</span> SQL, PostgreSQL, MongoDB</p>
        <p className="mb-2"><span className="font-bold">Others:</span> Git, Jira, Problem-solving</p>
  
        {/* Soft Skills Section */}
        <h1 className="font-extrabold text-lg md:text-xl mt-6 mb-2 text-gray-800">Soft Skills:</h1>
        <p className="mb-2"><span className="font-bold">Interpersonal Skills:</span> Leadership, Work Ethics, Active Listening, Team Player</p>
        <p className="mb-2"><span className="font-bold">Others:</span> Time Management, Creativity</p>
      </div>
    );
  };
  