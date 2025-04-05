import { useEffect, useRef } from "react";
import "./FluidSimulation.css";
import appBadge from "./assets/app_badge.png";
import googleBadge from "./assets/gp_badge.png";
import promoBackground from "./assets/promo_back.png";
// import iconFont from "./assets/iconfont.ttf";

const FluidSimulation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/script.js"; // ensure script is placed in public or imported
    script.async = true;
    document.body.appendChild(script);

    const promoClose = document.querySelector(".promo-close") as HTMLElement;
    const promo = document.querySelector(".promo") as HTMLElement;

    promoClose?.addEventListener("click", () => {
      if (promo) promo.style.display = "none";
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
      <div
        className="promo"
        style={{ backgroundImage: `url(${promoBackground})` }}
      >
        <div className="promo-middle">
          <div className="promo-content">
            <div className="promo-header">
              <span className="promo-close">&times;</span>
            </div>
            <div className="promo-body">
              <p>Try Fluid Simulation app!</p>
              <div className="links-container">
                <a className="link" id="apple_link" href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    className="link-img"
                    alt="Download on the App Store"
                    src={appBadge}
                  />
                </a>
                <a className="link" id="google_link" href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    className="link-img"
                    alt="Get it on Google Play"
                    src={googleBadge}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FluidSimulation;
