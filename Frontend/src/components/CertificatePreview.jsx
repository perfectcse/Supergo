import { useRef, useState } from "react";
import {
  Award,
  Download,
  LoaderCircle,
  Sparkles,
} from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "../styles/CertificatePreview.css";

function CertificatePreview({
  certificateData,
  selectedTemplate,
  certificateId,
  onGenerate,
  isGenerated,
}) {
  const certificateRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const formatDate = (date) => {
    if (!date) return "Select a date";

    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;

    try {
      setIsDownloading(true);

      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imageData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imageWidth = canvas.width;
      const imageHeight = canvas.height;

      const ratio = Math.min(
        pdfWidth / imageWidth,
        pdfHeight / imageHeight
      );

      const finalWidth = imageWidth * ratio;
      const finalHeight = imageHeight * ratio;

      const x = (pdfWidth - finalWidth) / 2;
      const y = (pdfHeight - finalHeight) / 2;

      pdf.addImage(
        imageData,
        "PNG",
        x,
        y,
        finalWidth,
        finalHeight
      );

      const recipient =
        certificateData.recipientName?.trim() || "certificate";

      const safeName = recipient
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      pdf.save(`${safeName}-${certificateId}.pdf`);
    } catch (error) {
      console.error("PDF Error:", error);
      alert("Unable to download PDF.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleGenerate = () => {
    if (onGenerate) {
      onGenerate();
    }
  };

  return (
    <section className="certificate-preview-card">
      {/* Header */}
      <div className="preview-header">
        <div className="component-heading">
          <div className="component-heading-icon">
            <Award size={22} />
          </div>

          <div>
            <h2>Live Certificate Preview</h2>
            <p>
              Generate your certificate first, then download it as PDF.
            </p>
          </div>
        </div>

        <div className="preview-actions">
          <button
            type="button"
            className="generate-btn"
            onClick={handleGenerate}
          >
            <Sparkles size={18} />
            {isGenerated
              ? "Generate Again"
              : "Generate Certificate"}
          </button>

          <button
            type="button"
            className="download-pdf-btn"
            onClick={handleDownloadPDF}
            disabled={!isGenerated || isDownloading}
          >
            {isDownloading ? (
              <>
                <LoaderCircle
                  size={18}
                  className="download-spinner"
                />
                <span>Generating PDF...</span>
              </>
            ) : (
              <>
                <Download size={18} />
                <span>Download PDF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Certificate */}
      <div className="certificate-preview-wrapper">
        <div
          ref={certificateRef}
          id="certificate-to-download"
          className={`certificate-preview certificate-${selectedTemplate}`}
        >
          <div className="certificate-inner-border">
            {/* Logo */}
            <div className="certificate-logo">
              <Award size={38} />
            </div>

            {/* Type */}
            <p className="certificate-label">
              {certificateData.certificateType ||
                "Certificate of Participation"}
            </p>

            <h2>
              {certificateData.certificateType ||
                "Certificate of Participation"}
            </h2>

            {/* Presented */}
            <p className="presented-text">
              This certificate is proudly presented to
            </p>

            {/* Recipient */}
            <h1 className="recipient-name">
              {certificateData.recipientName ||
                "Recipient Name"}
            </h1>

            <div className="recipient-divider"></div>

            {/* Description */}
            <p className="certificate-description">
              {certificateData.description ||
                "For successfully participating in and demonstrating commitment to the program."}
            </p>

            {/* Event */}
            <h3 className="event-name">
              {certificateData.eventName ||
                "Event or Program Name"}
            </h3>

            {/* Organization */}
            <p className="organization-name">
              {certificateData.organizationName ||
                "Organization Name"}
            </p>

            {/* Footer */}
            <div className="certificate-meta">
              <div className="certificate-meta-item">
                <span>Date</span>

                <strong>
                  {formatDate(
                    certificateData.completionDate
                  )}
                </strong>
              </div>

              <div className="certificate-meta-item">
                <span>Certificate ID</span>

                <strong>{certificateId}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificatePreview;