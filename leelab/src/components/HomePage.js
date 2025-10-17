import React from "react";
import microscopeBackground from "../images/N2_DAPI_NileRed_20x.tif";

export default function HomePage() {
  return (
    <div
      className="text-center text-light d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,25,0.7), rgba(10,10,25,0.7)), url(${microscopeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "85vh",
        padding: "60px 20px",
      }}
    >
      <h1 className="display-5 fw-bold mb-3">
        Lee Lab — Department of Biological Sciences, UMass Lowell
      </h1>
      <p className="fs-4 fst-italic mb-4">epigenetics | aging | chromosomes</p>

      {/* 🔬 OneDrive video embed */}
      <div
        className="ratio ratio-16x9 mb-4"
        style={{ maxWidth: "720px", width: "100%" }}
      >
        {/* Replace src below with your actual OneDrive EMBED link */}
        <iframe
          src="https://studentuml-my.sharepoint.com/personal/teresa_lee_uml_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fteresa%5Flee%5Fuml%5Fedu%2FDocuments%2F6a%2E%20Lee%20lab%2Fwebsite%20materials%20for%20SheBuilds%2F1%2E%20home%20page%2FKCS%20Research%20Video%20%2D%20Lee%20lab%202023%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eb357b5a0%2Dd0d3%2D4768%2D8ea7%2D28017660a7e5"
          title="Lee Lab Research Video"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>

      <p className="lead" style={{ maxWidth: "800px" }}>
        Learn more about the groundbreaking research in the Lee Lab exploring
        the molecular mechanisms of epigenetics, chromosome dynamics, and aging.
      </p>
    </div>
  );
}
