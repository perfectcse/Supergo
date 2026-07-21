import { Check, Palette, Sparkles } from "lucide-react";
import "../styles/TemplateSelector.css";

function TemplateSelector({ selectedTemplate, setSelectedTemplate }) {
  const templates = [
    {
      id: "classic",
      name: "Classic",
      subtitle: "Most Popular",
      description: "Elegant & Traditional",
      accent: "#4f46e5",
    },
    {
      id: "modern",
      name: "Modern",
      subtitle: "Minimal Design",
      description: "Clean & Professional",
      accent: "#0f766e",
    },
    {
      id: "royal",
      name: "Royal",
      subtitle: "Premium",
      description: "Luxury & Sophisticated",
      accent: "#92400e",
    },
  ];

  return (
    <section className="template-selector-card">
      <div className="template-header">
        <div className="template-header-icon">
          <Palette size={24} />
        </div>

        <div>
          <h2>Choose Your Template</h2>
          <p>
            Select a professional certificate design that best matches your
            event.
          </p>
        </div>
      </div>

      <div className="templates-grid">
        {templates.map((template) => (
          <button
            key={template.id}
            type="button"
            className={`template-option ${
              selectedTemplate === template.id ? "selected" : ""
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            {/* Preview */}
            <div className={`template-thumbnail ${template.id}`}>
              <div className="thumbnail-border">
                <span>CERTIFICATE</span>

                <div className="thumbnail-line"></div>

                <strong>John Doe</strong>

                <div className="thumbnail-small-line"></div>

                <small>Certificate of Achievement</small>
              </div>
            </div>

            {/* Content */}
            <div className="template-info">
              <div className="template-text">
                <div className="template-top">
                  <h3>{template.name}</h3>

                  <span
                    className="template-tag"
                    style={{
                      backgroundColor: `${template.accent}15`,
                      color: template.accent,
                    }}
                  >
                    {template.subtitle}
                  </span>
                </div>

                <p>{template.description}</p>
              </div>
            </div>

            {selectedTemplate === template.id && (
              <div className="selected-badge">
                <Check size={16} />
                <span>Selected</span>
              </div>
            )}

            <div className="hover-overlay">
              <Sparkles size={18} />
              <span>Preview Template</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default TemplateSelector;