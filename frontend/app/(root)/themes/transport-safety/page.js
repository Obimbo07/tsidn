import Image from "next/image";

const Transport = () => {
  return (
    <div className="transport-container p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        Transport Safety and Development
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-6 mb-4">
        <div className="md:w-1/2 space-y-4 text-sm sm:text-base lg:text-lg">
          <p>
            Transport Safety and Development is at the core of our mission at TSDN. We strive to promote safe and sustainable road transport in Kenya by collaborating with key stakeholders and implementing initiatives that enhance safety and foster development in the transport sector.
          </p>
          <div className="md:hidden mb-4">
            <Image src="/safety.jpeg" alt="Transport" className="w-full h-auto rounded" />
          </div>
          <p>
            Through partnerships with government agencies, NGOs, and international organizations, we work to improve road infrastructure, implement safety regulations, and promote responsible practices among drivers and transport operators.
          </p>
          <p>
            Our efforts aim to create a transportation environment that prioritizes the safety of passengers, pedestrians, and goods while contributing to the overall development of communities and the economy.
          </p>
        </div>
        <div className="md:w-1/2 hidden md:block">
          <img src="/safety.jpeg" alt="Transport" className="w-full h-auto rounded" />
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 mb-4">
        Making a Difference on the Roads
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-1/2 space-y-4 text-sm sm:text-base lg:text-lg">
          <p>
            Every day, our company endeavors to make a difference on the roads by prioritizing road safety. We&apos;re deeply invested in the well-being of all road users, and we understand that accidents and injuries on the road can have far-reaching consequences.
          </p>
          <p>
            Our commitment to road safety extends to the design, production, and promotion of efficient tools and decision-making aids for our team members and partners. Through our engagement in research and development, we continuously seek innovative solutions to enhance road safety, striving to ensure that no matter how people travel – by foot, vehicle, or any other means – they are protected from harm.
          </p>
          <p>
            Road safety is not just a corporate policy; it&apos;s a shared responsibility that we embrace wholeheartedly. We take pride in contributing to safer roads and more secure journeys for all.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src="/transportsafety.jpg" alt="Making a Difference on the Roads" className="w-full h-auto rounded mb-4 md:mb-0" />
        </div>
      </div>
    </div>
  );
};

export default Transport;
