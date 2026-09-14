import usePrivacyGate from '../hooks/usePrivacyGate';

const PrivacyGate = ({ children }) => {
  const { isVerified, isLoading, handleAgree } = usePrivacyGate();

  if (isLoading) return null;

  return (
    <>
      {/* 1. ALWAYS render the site — this is the blurred background */}
      <div
        style={{
          filter: isVerified ? 'none' : 'blur(6px)',
          transition: 'filter 0.4s ease',
          pointerEvents: isVerified ? 'auto' : 'none',
          userSelect: isVerified ? 'auto' : 'none',
        }}
        aria-hidden={!isVerified}
      >
        {children}
      </div>

      {/* 2. Only show the privacy card when NOT verified */}
      {!isVerified && (
        <div
          className="gate-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gate-title"
        >
          <div className="gate-card">
            <span
              className="sec-tag"
              style={{ marginBottom: '1rem', display: 'inline-block' }}
            >
              DATA PRIVACY
            </span>

            <h2 id="gate-title" className="gate-title">
              Before you enter
            </h2>

            <p className="gate-copy">
              This is a personal portfolio. Information displayed here — contact
              details, professional history, project screenshots — is for
              professional evaluation only. I do not sell, share, or distribute
              your data. Anonymous analytics may be collected to understand
              visitor traffic; no personally identifying information is stored.
            </p>

            <button
              type="button"
              className="btn btn-solid gate-btn"
              onClick={handleAgree}
            >
              I UNDERSTAND &amp; AGREE
            </button>

            <p className="gate-note">
              Your choice is remembered on this device.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyGate;