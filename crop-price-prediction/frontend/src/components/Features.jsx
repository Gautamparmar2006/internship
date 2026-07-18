import "./Features.css";

function Features() {
  return (
    <section id="features" className="features">

      <h2>Key Features</h2>

      <div className="feature-container">

        <div className="feature-card">
          <div className="icon">🌾</div>
          <h3>Crop Prediction</h3>
          <p>
            Predict crop prices using historical market data.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">📊</div>
          <h3>Market Analysis</h3>
          <p>
            Analyze crop prices for better decision making.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">⚡</div>
          <h3>Fast Prediction</h3>
          <p>
            Get prediction results within seconds.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🔒</div>
          <h3>Secure Data</h3>
          <p>
            Data is safely managed using Express and MariaDB.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">📱</div>
          <h3>Responsive UI</h3>
          <p>
            Works perfectly on desktop, tablet and mobile.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🚜</div>
          <h3>Farmer Friendly</h3>
          <p>
            Simple interface designed for easy use.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;