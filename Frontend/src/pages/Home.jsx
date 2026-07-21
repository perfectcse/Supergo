import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Download,
  FileCheck2,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "../styles/Home.css";

function Home() {
  const features = [
    {
      icon: <Palette size={26} />,
      title: "Professional Templates",
      description:
        "Choose from beautifully designed certificate templates for webinars, courses, workshops, and events.",
    },
    {
      icon: <Sparkles size={26} />,
      title: "Live Preview",
      description:
        "See your certificate update instantly while entering participant and event details.",
    },
    {
      icon: <Download size={26} />,
      title: "Download as PDF",
      description:
        "Generate and download high-quality certificates that are ready to save and share.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Certificate Verification",
      description:
        "Every saved certificate can have a unique ID for simple and reliable verification.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Enter Details",
      description:
        "Add the recipient name, certificate type, event name, organization, and date.",
    },
    {
      number: "02",
      title: "Choose a Template",
      description:
        "Select a professional design and preview the certificate in real time.",
    },
    {
      number: "03",
      title: "Generate & Download",
      description:
        "Create your certificate, generate a unique ID, and download it as a PDF.",
    },
  ];

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Simple. Professional. Verifiable.</span>
            </div>

            <h1>
              Create Professional
              <span> Certificates in Minutes</span>
            </h1>

            <p className="hero-description">
              Design, generate, download, and verify professional certificates
              for webinars, courses, workshops, training programs, and events.
            </p>

            <div className="hero-actions">
              <Link to="/create" className="primary-btn">
                Create Certificate
                <ArrowRight size={19} />
              </Link>

              <Link to="/verify" className="secondary-btn">
                <ShieldCheck size={19} />
                Verify Certificate
              </Link>
            </div>

            <div className="hero-trust">
              <div>
                <FileCheck2 size={19} />
                <span>Unique Certificate IDs</span>
              </div>

              <div>
                <Download size={19} />
                <span>PDF Download</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="certificate-demo">
              <div className="certificate-demo-border">
                <div className="demo-award-icon">
                  <Award size={34} />
                </div>

                <p className="demo-small-text">CERTIFICATE OF COMPLETION</p>

                <h2>Certificate of Achievement</h2>

                <p className="demo-presented">This certificate is presented to</p>

                <h3>Vishal Mishra</h3>

                <div className="demo-line"></div>

                <p className="demo-description">
                  For successfully completing the program and demonstrating
                  dedication and commitment.
                </p>

                <div className="demo-footer">
                  <span>15 July 2026</span>
                  <span>CERT-2026-A7X9K2</span>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-one">
              <ShieldCheck size={20} />
              <span>Verified</span>
            </div>

            <div className="floating-card floating-card-two">
              <Download size={20} />
              <span>PDF Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-heading">
            <span>POWERFUL FEATURES</span>
            <h2>Everything you need to create certificates</h2>
            <p>
              A simple and professional solution for generating, downloading,
              and verifying certificates.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <div className="section-container">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>Three simple steps to your certificate</h2>
            <p>
              Create a professional certificate without complicated design
              tools or technical knowledge.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-cta-section">
        <div className="home-cta-content">
          <Award size={42} />

          <h2>Ready to create your certificate?</h2>

          <p>
            Enter your details, select a professional template, and generate
            your certificate in just a few steps.
          </p>

          <Link to="/create" className="cta-white-btn">
            Start Creating
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;