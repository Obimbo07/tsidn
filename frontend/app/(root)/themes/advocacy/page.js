const Advocacy = () => {
  return (
    <div className="advocacy-container p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        Advocacy for Good Governance in Transport Safety and Development
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src="/transportsafety.jpg" alt="Advocacy" className="w-full h-auto rounded" />
        </div>
        <div className="md:w-1/2 space-y-4 text-sm sm:text-base lg:text-lg">
          <p>
            Good governance is essential for ensuring transparency, accountability, and effectiveness in the transport sector. At TSDN, we advocate for policies and practices that promote ethical conduct, regulatory compliance, and public participation in decision-making processes.
          </p>
          <p>
            Through research, policy analysis, and stakeholder engagement, we work to influence government agencies, legislative bodies, and industry associations to adopt measures that prioritize safety, sustainability, and social responsibility in transportation initiatives.
          </p>
          <p>
            By championing good governance principles, we aim to foster trust, collaboration, and long-term success in the transport industry, ultimately benefiting communities, businesses, and the environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advocacy;
