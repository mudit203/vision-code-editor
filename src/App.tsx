import { useRef, useState, useEffect } from "react";
import "./App.scss";
import { LiveAPIProvider } from "./contexts/LiveAPIContext";
import SidePanel from "./components/side-panel/SidePanel";
import { Altair } from "./components/altair/Altair";
import ControlTray from "./components/control-tray/ControlTray";
import cn from "classnames";
import Homepage from "./components/homepage/Homepage";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY as string;
if (typeof API_KEY !== "string") {
  throw new Error("set REACT_APP_GEMINI_API_KEY in .env");
}

const host = "generativelanguage.googleapis.com";
const uri = `wss://${host}/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent`;

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [showHomepage, setShowHomepage] = useState(true);

  useEffect(() => {
    const handlePopState = () => {
      setShowHomepage(true);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const startApp = () => {
    window.history.pushState({}, "", "#app");
    setShowHomepage(false);
  };

  return (
    <div className="App">
      {showHomepage ? (
        <Homepage onGetStarted={startApp} />
      ) : (
        <LiveAPIProvider url={uri} apiKey={API_KEY}>
          <div className="streaming-console">
            <SidePanel />
            <main>
              <div className="main-app-area">
                <Altair />
                <video
                  className={cn("stream", {
                    hidden: !videoRef.current || !videoStream,
                  })}
                  ref={videoRef}
                  autoPlay
                  playsInline
                />
              </div>
              <ControlTray
                videoRef={videoRef}
                supportsVideo={true}
                onVideoStreamChange={setVideoStream}
              />
            </main>
          </div>
        </LiveAPIProvider>
      )}
    </div>
  );
}

export default App;
