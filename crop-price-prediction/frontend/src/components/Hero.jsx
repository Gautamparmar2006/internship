import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Agriculture Crop
          <br />
          Price Prediction
        </h1>

        <p>
          Predict market prices of crops using historical data
          and intelligent analysis. Helping farmers make better
          selling decisions.
        </p>

        <a href="#prediction">
          <button className="hero-btn">
            Predict Now
          </button>
        </a>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <h2>🌱 Smart Farming</h2>

          <p>
            Accurate crop price prediction
            using market data.
          </p>

        </div>

        <div className="hero-card">

          <h2>📊 Market Analysis</h2>

          <p>
            Compare previous prices
            with predicted values.
          </p>

        </div>

        <div className="hero-card">

          <h2>🚜 Farmer Support</h2>

          <p>
            Make profitable decisions
            before selling crops.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;