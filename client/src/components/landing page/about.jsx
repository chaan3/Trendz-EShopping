const About = () => (
    <section id="about" className="p-10 text-center bg-gray-100">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
      
      {/* Description */}
      <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
        Welcome to <span className="font-semibold text-gray-900">Trendz Fashion</span>, your ultimate destination for premium, trend-setting apparel. 
        We believe that fashion is not just about clothing—it's about confidence, self-expression, and making a statement.
      </p>
  
      {/* Image Section */}
      <div className="mt-8 flex justify-center">
        <img src="src/assets/banner-3.webp" alt="Fashion" onClick={()=>window.location.href="/auth/login"}  className="rounded-lg shadow-lg w-full max-w-3xl" />
      </div>
  
      {/* Mission Statement */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
          At Trendz Fashion, we aim to inspire confidence and creativity by offering stylish, high-quality apparel that complements every personality.
          Whether you're looking for casual wear, elegant outfits, or bold statement pieces, we've got something for everyone.
        </p>
      </div>
  
      {/* Our Values Section */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {/* Quality */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h4 className="text-xl font-bold text-gray-800">✨ Quality</h4>
          <p className="text-gray-700 mt-2">
            We use premium materials to craft outfits that offer both comfort and durability.
          </p>
        </div>
  
        {/* Sustainability */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h4 className="text-xl font-bold text-gray-800">🌱 Sustainability</h4>
          <p className="text-gray-700 mt-2">
            Ethical sourcing and eco-friendly fabrics drive our commitment to a greener future.
          </p>
        </div>
  
        {/* Innovation */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h4 className="text-xl font-bold text-gray-800">🚀 Innovation</h4>
          <p className="text-gray-700 mt-2">
            We stay ahead of trends to bring you the latest and most exciting fashion styles.
          </p>
        </div>
      </div>
  
      {/* Call to Action */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-800">Join the Trend!</h3>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
          Be part of the fashion movement. Explore our latest collections and redefine your style with Trendz Fashion.
        </p>
        <a href="/auth/login" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
          Shop Now
        </a>
      </div>
    </section>
  );
  
  export default About;
  