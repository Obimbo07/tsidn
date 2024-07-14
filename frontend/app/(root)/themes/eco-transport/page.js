const EcoTransport = () => {
  return (
    <div className="eco-transport-container p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        ECO-Transport Development
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src="/eco-transport-image.jpg" alt="Eco-Transport" className="w-full h-auto rounded" />
        </div>
        <div className="md:w-1/2 space-y-4 text-sm sm:text-base lg:text-lg">
          <p>
            ECO-Transport development focuses on promoting environmentally friendly and sustainable transportation solutions. 
            At TSDN, we advocate for policies and technologies that reduce emissions, conserve energy, and minimize environmental impact across the transport sector.
          </p>
          <p>
            Through research, education, and partnership initiatives, we support the adoption of alternative fuels, green infrastructure, and eco-friendly vehicle designs. By integrating environmental considerations into transport planning and operations, we aim to mitigate climate change, improve air quality, and protect natural resources for future generations.
          </p>
          <p>
            By promoting ECO-Transport development, we contribute to a cleaner, healthier, and more resilient transportation system that benefits both people and the planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcoTransport;
