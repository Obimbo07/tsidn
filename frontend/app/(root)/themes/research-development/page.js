import Image from "next/image";

const ResearchAndDevelopment = () => {
  return (
    <div className="research-container p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        Research and Development in Transport
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-6 mb-4">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image width={900} height={900} src="/research-s.webp" alt="Research" className="w-full h-auto rounded" />
        </div>
        <div className="md:w-1/2 space-y-4 text-sm sm:text-base lg:text-lg">
          <p>
            Research and development play a critical role in advancing innovation and improving safety in the transport sector. At TSDN, we support and conduct research projects that address key challenges and opportunities in road transport, including traffic management, vehicle design, and behavioral analysis.
          </p>
          <p>
            Through partnerships with academic institutions, industry experts, and government agencies, we collaborate on studies, pilot projects, and technology demonstrations to generate evidence-based solutions and best practices.
          </p>
          <p>
            By fostering a culture of inquiry and experimentation, we aim to drive continuous improvement and adaptation in transportation systems, leading to safer, more efficient, and sustainable mobility for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchAndDevelopment;
