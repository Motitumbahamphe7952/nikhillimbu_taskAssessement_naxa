import bgImage from "@/assets/subscribesection.png";

const Subscribe = () => {
  return (
    <section className="relative py-16 px-4 sm:px-8 mb-[-250px] z-60">
      <div
        className="w-full max-w-4xl mx-auto rounded-2xl px-6 py-12 sm:px-12 text-center text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 60,
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Subscribe to our Newsletter!
        </h2>
        <p className="text-base sm:text-lg mb-8">
          Join our subscriber list to receive latest <br></br> news & updates.
        </p>
        <div className="flex flex-col justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your mail address"
            className="w-full sm:w-[400px] px-4 py-3 bg-white rounded-md text-gray-800 focus:outline-none"
          />
          <button
            className="bg-yellow-400 text-blue-800 font-semibold px-6 py-3 hover:bg-yellow-300 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
