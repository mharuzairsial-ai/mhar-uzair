function Hero() {
  return (
    <main id="home" className="hero">
      <div className="hero-content">
        <div className="badge">
          <span></span>
          The future starts here
        </div>

        <h1>
          Build something
          <strong> extraordinary.</strong>
        </h1>

        <p>
          A modern digital experience designed to help you
          turn your ideas into something people remember.
        </p>

        <div className="buttons">
          <button className="primary-btn">Explore Now →</button>
          <button className="secondary-btn">Learn More</button>
        </div>

        <div className="stats">
          <div>
            <h3>10K+</h3>
            <p>Users</p>
          </div>
          <div>
            <h3>98%</h3>
            <p>Happy Users</p>
          </div>
          <div>
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>

      <div className="visual">
        <div className="glow"></div>

        <div className="glass-card">
          <div className="card-top">
            <span>Dashboard</span>
            <span>•••</span>
          </div>

          <div className="chart">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="card-bottom">
            <div>
              <small>Total Growth</small>
              <strong>+84.6%</strong>
            </div>
            <div className="circle">↗</div>
          </div>
        </div>

        <div className="floating-card one">
          ⚡
          <div>
            <strong>Fast</strong>
            <small>Performance</small>
          </div>
        </div>

        <div className="floating-card two">
          ✓
          <div>
            <strong>98.9%</strong>
            <small>Success Rate</small>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
