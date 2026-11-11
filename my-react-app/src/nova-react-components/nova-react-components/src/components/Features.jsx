function Features() {
  return (
    <section id="features" className="features">
      <div className="section-heading">
        <span>WHY NOVA</span>
        <h2>Everything you need.</h2>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>
            Optimized performance that keeps everything
            smooth and responsive.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">◈</div>
          <h3>Modern Design</h3>
          <p>
            Beautiful interfaces built with modern
            design principles.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure</h3>
          <p>
            Your data stays protected with reliable
            security practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
