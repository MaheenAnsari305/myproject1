import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Stay Connected <br /> Stay Social <br /> Stay You!
          </h1>
          <p>
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences.
          </p>
          <button>Get Started</button>
        </div>
        <div className="hero-img">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/13/9a/fe/139afe4e-8d32-4358-6c44-bab3d3478714/c.png/230x0w.webp"
            alt="App Screenshot"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features That Keep You Hooked!</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🔥Seamless Connections</h3>
            <p>Stay in touch with friends, family, and communities easily.</p>
          </div>
          <div className="feature-card">
            <h3>📸Share Your Story</h3>
            <p>Upload photos, videos, and updates anytime.</p>
          </div>
          <div className="feature-card">
            <h3>📝Real-Time Chat</h3>
            <p>Fast, lightweight 1-on-1 or group messaging.</p>
          </div>
          <div className="feature-card">
            <h3>🔐Privacy First</h3>
            <p>Your data stays secure and in your control.</p>
          </div>
          <div className="feature-card">
            <h3>🌏Discover & Explore</h3>
            <p>Find trending content and new communities.</p>
          </div>
          <div className="feature-card">
            <h3>🪐Grow Your Business</h3>
            <p>Promote and connect with your audience.</p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps">
        <h2>How to Install Our App</h2>
        <div className="step-grid">
          <div className="step-card">
            <h3>01</h3>
            <h4>Download</h4>
            <p>Open Play Store or App Store</p>
          </div>
          <div className="step-card">
            <h3>02</h3>
            <h4>Install App</h4>
            <p>The app will install automatically</p>
          </div>
          <div className="step-card">
            <h3>03</h3>
            <h4>Ready to Use</h4>
            <p>Sign up or log in to start exploring</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“This app changed the way I connect with friends!”</p>
            <span>- Emily, USA</span>
          </div>
          <div className="testimonial-card">
            <p>“I love the privacy features and smooth design.”</p>
            <span>- Amit, India</span>
          </div>
          <div className="testimonial-card">
            <p>“Running my business is so much easier now!”</p>
            <span>- Javier, Spain</span>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download">
        <h2>Join the Fun – Download Now!</h2>
        <p>Be part of a community that’s always growing.</p>
        <div className="download-buttons">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/63/92/7e/63927ee8-525d-61a6-f003-d2f8a6647bca/0x0ss-7.png/313x0w.webp"
            alt="App Store"
          />
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/60/b5/2f/60b52f99-6b09-ebca-a895-48f760cfb2b5/0x0ss-5.png/313x0w.webp"
            alt="Play Store"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MyBindle. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
