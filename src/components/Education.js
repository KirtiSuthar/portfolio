export const Education = () => {
  return (
    <div className="p-4 md:p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="space-y-6">
        {/* College */}
        <div>
          <p className="font-bold text-base md:text-lg text-gray-800">
            &ordm; Anand International College of Engineering - 2021-2025
          </p>
          <p className="text-sm md:text-base text-gray-600">Computer Science with AI</p>
          <p className="pb-2 text-sm md:text-base text-gray-600">9.45 CGPA</p>
        </div>
        {/* High School */}
        <div>
          <p className="font-bold text-base md:text-lg text-gray-800">
            &ordm; Pratibha Public School - 2019-2020
          </p>
          <p className="pb-2 text-sm md:text-base text-gray-600">PCM - 78.3%</p>
        </div>
        {/* Secondary School */}
        <div>
          <p className="font-bold text-base md:text-lg text-gray-800">
            &ordm; Indigo Public Senior Secondary School - 2017-2018
          </p>
          <p className="pb-2 text-sm md:text-base text-gray-600">93.5%</p>
        </div>
      </div>
    </div>
  );
};
