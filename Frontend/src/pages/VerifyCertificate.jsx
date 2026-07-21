import { useState } from "react";
import { Search, ShieldCheck, XCircle } from "lucide-react";

import API from "../api/certificateApi";

import "../styles/VerifyCertificate.css";

function VerifyCertificate() {
  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!certificateId.trim()) return;

    setLoading(true);
    setError("");
    setCertificate(null);

    try {
      const response = await API.get(`/verify/${certificateId.trim()}`);

      setCertificate(response.data.data);
    } catch (error) {
      console.error(error);
      setError("Certificate not found.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="verify-page">
      <section className="verify-container">
        <div className="verify-icon">
          <ShieldCheck size={38} />
        </div>

        <span className="verify-label">
          CERTIFICATE VERIFICATION
        </span>

        <h1>Verify a Certificate</h1>

        <p className="verify-description">
          Enter the unique certificate ID to check whether a certificate is
          valid and exists in our system.
        </p>

        <form className="verify-form" onSubmit={handleSubmit}>
          <label htmlFor="certificateId">
            Certificate ID
          </label>

          <div className="verify-input-group">
            <Search size={20} />

            <input
              type="text"
              id="certificateId"
              placeholder="Example: CERT-1001"
              value={certificateId}
              onChange={(e) =>
                setCertificateId(e.target.value)
              }
            />
          </div>

          <button type="submit" disabled={loading}>
            <ShieldCheck size={19} />
            {loading
              ? "Verifying..."
              : "Verify Certificate"}
          </button>
        </form>

        {error && (
          <div className="verify-error">
            <XCircle size={20} />
            <p>{error}</p>
          </div>
        )}

        {certificate && (
          <div className="verify-result">
            <h2>Certificate Verified</h2>

            <div className="verify-row">
              <span className="verify-title">
                Recipient
              </span>
              <span>{certificate.recipientName}</span>
            </div>

            <div className="verify-row">
              <span className="verify-title">
                Certificate Type
              </span>
              <span>{certificate.certificateType}</span>
            </div>

            <div className="verify-row">
              <span className="verify-title">
                Event
              </span>
              <span>{certificate.eventName}</span>
            </div>

            <div className="verify-row">
              <span className="verify-title">
                Organization
              </span>
              <span>{certificate.organization}</span>
            </div>

            <div className="verify-row">
              <span className="verify-title">
                Description
              </span>
              <span>{certificate.description}</span>
            </div>

            <div className="verify-row">
              <span className="verify-title">
                Issue Date
              </span>
              <span>
                {new Date(
                  certificate.issueDate
                ).toLocaleDateString()}
              </span>
            </div>

            <div className="verify-row">
              <span className="verify-title">
                Certificate ID
              </span>
              <span>{certificate.certificateId}</span>
            </div>

            <div className="verify-row">
              <span className="verify-title">
                Status
              </span>

              <span className="status-verified">
                ✅ Verified
              </span>
            </div>
          </div>
        )}

        <div className="verify-help">
          <ShieldCheck size={19} />

          <div>
            <h3>
              Where can I find the certificate ID?
            </h3>

            <p>
              The unique certificate ID is displayed at the bottom of every
              certificate generated and saved through our platform.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VerifyCertificate;