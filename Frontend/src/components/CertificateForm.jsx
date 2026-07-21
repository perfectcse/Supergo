import {
  Building2,
  CalendarDays,
  FileText,
  GraduationCap,
  User,
} from "lucide-react";

import "../styles/CertificateForm.css";

function CertificateForm({
  certificateData,
  setCertificateData,
  errors,
  setErrors,
  setIsGenerated,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setCertificateData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // User changed the form, so certificate needs to be generated again
    setIsGenerated(false);

    // Clear error while typing
    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }
  };

  return (
    <section className="certificate-form-card">
      <div className="component-heading">
        <div className="component-heading-icon">
          <FileText size={22} />
        </div>

        <div>
          <h2>Certificate Details</h2>
          <p>
            Enter the information that will appear on the certificate.
          </p>
        </div>
      </div>

      <form className="certificate-form">
        {/* Recipient Name */}

        <div className="form-group">
          <label htmlFor="recipientName">
            <User size={17} />
            Recipient Name
          </label>

          <input
            type="text"
            id="recipientName"
            name="recipientName"
            placeholder="Enter recipient's full name"
            value={certificateData.recipientName}
            onChange={handleChange}
            className={errors.recipientName ? "input-error" : ""}
          />

          {errors.recipientName && (
            <p className="error-message">
              {errors.recipientName}
            </p>
          )}
        </div>

        {/* Certificate Type */}

        <div className="form-group">
          <label htmlFor="certificateType">
            <GraduationCap size={17} />
            Certificate Type
          </label>

          <select
            id="certificateType"
            name="certificateType"
            value={certificateData.certificateType}
            onChange={handleChange}
          >
            <option value="Certificate of Participation">
              Certificate of Participation
            </option>

            <option value="Certificate of Completion">
              Certificate of Completion
            </option>

            <option value="Certificate of Achievement">
              Certificate of Achievement
            </option>

            <option value="Certificate of Appreciation">
              Certificate of Appreciation
            </option>
          </select>
        </div>

        {/* Event Name */}

        <div className="form-group">
          <label htmlFor="eventName">
            <FileText size={17} />
            Event or Program Name
          </label>

          <input
            type="text"
            id="eventName"
            name="eventName"
            placeholder="Example: React Development Workshop"
            value={certificateData.eventName}
            onChange={handleChange}
            className={errors.eventName ? "input-error" : ""}
          />

          {errors.eventName && (
            <p className="error-message">
              {errors.eventName}
            </p>
          )}
        </div>

        {/* Organization */}

        <div className="form-group">
          <label htmlFor="organizationName">
            <Building2 size={17} />
            Organization Name
          </label>

          <input
            type="text"
            id="organizationName"
            name="organizationName"
            placeholder="Enter organization name"
            value={certificateData.organizationName}
            onChange={handleChange}
            className={errors.organizationName ? "input-error" : ""}
          />

          {errors.organizationName && (
            <p className="error-message">
              {errors.organizationName}
            </p>
          )}
        </div>

        {/* Completion Date */}

        <div className="form-group">
          <label htmlFor="completionDate">
            <CalendarDays size={17} />
            Completion Date
          </label>

          <input
            type="date"
            id="completionDate"
            name="completionDate"
            value={certificateData.completionDate}
            onChange={handleChange}
            className={errors.completionDate ? "input-error" : ""}
          />

          {errors.completionDate && (
            <p className="error-message">
              {errors.completionDate}
            </p>
          )}
        </div>

        {/* Description */}

        <div className="form-group full-width">
          <label htmlFor="description">
            <FileText size={17} />
            Description
          </label>

          <textarea
            id="description"
            name="description"
            rows="4"
            maxLength="250"
            placeholder="Describe the participant's achievement or participation..."
            value={certificateData.description}
            onChange={handleChange}
            className={errors.description ? "input-error" : ""}
          />

          {errors.description && (
            <p className="error-message">
              {errors.description}
            </p>
          )}

          <span className="character-count">
            {certificateData.description.length}/250
          </span>
        </div>
      </form>
    </section>
  );
}

export default CertificateForm;