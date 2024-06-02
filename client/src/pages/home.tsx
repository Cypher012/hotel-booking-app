const Home = () => {
  return (
    <div>
      <div
        className="hero-section bg-cover bg-center h-96 flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?hotel')",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Dream Hotel</h1>
        <p className="text-lg mb-8">
          Book your stay with us and enjoy luxury like never before
        </p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Home;
