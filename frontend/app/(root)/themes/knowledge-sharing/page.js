import Image from "next/image";

const ExpertKnowledge = () => {
  return (
    <div className="expert-knowledge-container p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        Expert Knowledge Sharing in Transport Safety Development
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-6 mb-4">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image src="/trafficLights.jpg" alt="Expert Knowledge" className="w-full h-auto rounded" />
        </div>
        <div className="md:w-1/2 space-y-4 text-sm sm:text-base lg:text-lg">
          <p>
            At TSDN, we believe in the power of sharing expertise and best practices to advance transport safety development. Through workshops, seminars, and online resources, we facilitate the exchange of knowledge among industry professionals, researchers, and policymakers.
          </p>
          <p>
            Our goal is to promote continuous learning and innovation in transport safety, ensuring that stakeholders have access to the latest research findings, technological advancements, and successful interventions from around the world.
          </p>
          <p>
            By fostering a culture of collaboration and knowledge sharing, we empower individuals and organizations to make informed decisions and implement effective strategies to improve road safety and transportation systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertKnowledge;
