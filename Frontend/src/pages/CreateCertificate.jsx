import { useState } from "react";
import { Award, RotateCcw } from "lucide-react";

import CertificateForm from "../components/CertificateForm";
import TemplateSelector from "../components/TemplateSelector";
import CertificatePreview from "../components/CertificatePreview";

import { generateCertificateId } from "../utils/certificateId";
import API from "../api/certificateApi";

import "../styles/CreateCertificate.css";

function CreateCertificate() {
  const initialCertificateData = {
    recipientName: "",
    certificateType: "Certificate of Participation",
    eventName: "",
    organizationName: "",
    completionDate: "",
    description: "",
  };

  const [certificateData, setCertificateData] = useState(
    initialCertificateData
  );

  const [selectedTemplate, setSelectedTemplate] =
    useState("classic");

  const [certificateId, setCertificateId] = useState(() =>
    generateCertificateId()
  );

  const [errors, setErrors] = useState({});

  const [isGenerated, setIsGenerated] = useState(false);

  // Validate Form
  const validateForm = () => {
    const newErrors = {};

    if (!certificateData.recipientName.trim()) {
      newErrors.recipientName = "Recipient name is required.";
    }

    if (!certificateData.eventName.trim()) {
      newErrors.eventName = "Event name is required.";
    }

    if (!certificateData.organizationName.trim()) {
      newErrors.organizationName =
        "Organization name is required.";
    }

    if (!certificateData.completionDate) {
      newErrors.completionDate =
        "Completion date is required.";
    }

    if (!certificateData.description.trim()) {
      newErrors.description = "Description is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Generate Certificate & Save to MongoDB
  const handleGenerateCertificate = async () => {
    if (!validateForm()) return;

    const newCertificateId = generateCertificateId();

    try {
      const response = await API.post("/", {
        recipientName: certificateData.recipientName,
        certificateType: certificateData.certificateType,
        eventName: certificateData.eventName,
        organization: certificateData.organizationName,
        description: certificateData.description,
        issueDate: certificateData.completionDate,
        certificateId: newCertificateId,
        template: selectedTemplate,
      });

      console.log(response.data);

      setCertificateId(newCertificateId);
      setIsGenerated(true);

      alert("✅ Certificate generated and saved successfully!");
    } catch (error) {
      console.error(error);

      alert("❌ Failed to save certificate.");
    }
  };

  // Reset Form
  const handleReset = () => {
    setCertificateData(initialCertificateData);

    setSelectedTemplate("classic");

    setCertificateId(generateCertificateId());

    setErrors({});

    setIsGenerated(false);
  };

  return (
    <main className="create-page">
      {/* Header */}
      <section className="create-header">
        <div className="create-header-content">
          <div className="create-header-icon">
            <Award size={28} />
          </div>

          <div>
            <span>CERTIFICATE BUILDER</span>

            <h1>Create Your Certificate</h1>

            <p>
              Enter certificate details, choose a professional
              template and generate a beautiful certificate.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="reset-certificate-btn"
          onClick={handleReset}
        >
          <RotateCcw size={18} />
          Reset
        </button>
      </section>

      {/* Builder */}
      <section className="certificate-builder">
        <div className="certificate-controls">
          <CertificateForm
            certificateData={certificateData}
            setCertificateData={setCertificateData}
            errors={errors}
            setErrors={setErrors}
            setIsGenerated={setIsGenerated}
          />

          <TemplateSelector
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        </div>

        <CertificatePreview
          certificateData={certificateData}
          selectedTemplate={selectedTemplate}
          certificateId={certificateId}
          onGenerate={handleGenerateCertificate}
          isGenerated={isGenerated}
        />
      </section>
    </main>
  );
}

export default CreateCertificate;