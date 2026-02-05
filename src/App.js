import { useState, useEffect } from "react";

function App() {
  const [checkedIn, setCheckedIn] = useState(false);

  useEffect(() => {
    const last = localStorage.getItem("lastCheckIn");
    if (last === new Date().toDateString()) {
      setCheckedIn(true);
    }
  }, []);

  function handleCheckIn() {
    setCheckedIn(true);
    localStorage.setItem("lastCheckIn", new Date().toDateString());
  }

  return (
    <div className="page">
      {/* Floating blobs */}
      <div className="blob blob-one"></div>
      <div className="blob blob-two"></div>

      <div className="card">
        <h2>Daily Check-In 💚</h2>
        <p className="subtitle">Just one tap a day. No pressure.</p>

        <button onClick={handleCheckIn} disabled={checkedIn}>
          {checkedIn ? "Checked in ✅" : "I’m OK"}
        </button>

        {checkedIn && (
          <p className="confirm">You’re good for today 💚</p>
        )}
      </div>

      <style>{`
        /* ===== PAGE BACKGROUND ===== */
        .page {
          height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            180deg,
            #020617,
            #0b1226,
            #020617
          );
          background-size: 100% 600%;
          animation: oceanFlow 18s ease-in-out infinite;
          font-family: system-ui, -apple-system;
        }

        @keyframes oceanFlow {
          0% { background-position: 50% 0%; }
          50% { background-position: 50% 100%; }
          100% { background-position: 50% 0%; }
        }

        /* ===== BLOBS ===== */
        .blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.45;
          animation: blobMove 22s ease-in-out infinite;
        }

        .blob-one {
          background: #22c55e;
          top: -150px;
          left: -150px;
        }

        .blob-two {
          background: #0ea5e9;
          bottom: -150px;
          right: -150px;
          animation-duration: 28s;
        }

        @keyframes blobMove {
          0%   { transform: translate(0, 0); }
          50%  { transform: translate(80px, -60px); }
          100% { transform: translate(0, 0); }
        }

        /* ===== CARD ===== */
        .card {
          position: relative;
          z-index: 2;
          background: rgba(255,255,255,0.96);
          padding: 48px;
          border-radius: 28px;
          width: 90%;
          max-width: 420px;
          text-align: center;
          animation: breathe 6s ease-in-out infinite;
        }

        @keyframes breathe {
          0% { box-shadow: 0 20px 40px rgba(34,197,94,0.15); }
          50% { box-shadow: 0 60px 140px rgba(34,197,94,0.4); }
          100% { box-shadow: 0 20px 40px rgba(34,197,94,0.15); }
        }

        h2 {
          margin-bottom: 10px;
          font-size: 26px;
        }

        .subtitle {
          font-size: 14px;
          color: #444;
          margin-bottom: 34px;
        }

        button {
          padding: 18px 48px;
          font-size: 22px;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          color: white;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 14px 35px rgba(34,197,94,0.45);
          transition: all 0.3s ease;
        }

        button:disabled {
          background: #9ca3af;
          box-shadow: none;
          cursor: default;
          transform: scale(0.96);
        }

        .confirm {
          margin-top: 22px;
          font-size: 15px;
          color: #16a34a;
          font-weight: 600;
          animation: fadeUp 0.6s ease-out;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
