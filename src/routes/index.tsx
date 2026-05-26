import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const PDF_URL = "https://nptel-ac.s3.eu-north-1.amazonaws.com/NPTEL26CS55S952403805+(2).pdf";
const PDF_NAME = "NPTEL26CS55S952403805.pdf";

function Index() {
  const handleOpen = () => {
    window.open(PDF_URL, "_blank");
  };

  return (
    <div className="min-h-screen w-full bg-[#1f1f1f] flex flex-col items-center">
      {/* Browser chrome area - just spacing to mimic */}
      <div className="w-full flex-1 flex flex-col items-center justify-center px-6">
        {/* PDF icon */}
        <div
          className="w-[72px] h-[72px] rounded-md flex items-center justify-center mb-6"
          style={{ backgroundColor: "#2a2a2a" }}
          aria-hidden="true"
        >
          <span
            className="text-[11px] font-semibold tracking-wider"
            style={{ color: "#6b6b6b" }}
          >
            PDF
          </span>
        </div>

        {/* Filename */}
        <p
          className="text-center text-[15px] mb-8 break-all px-4"
          style={{ color: "#9a9a9a" }}
        >
          {PDF_NAME}
        </p>

        {/* Open button */}
        <button
          onClick={handleOpen}
          className="w-full max-w-[520px] rounded-full text-[17px] font-normal py-[14px] transition-opacity active:opacity-80"
          style={{ backgroundColor: "#a8c7fa", color: "#062e6f" }}
        >
          Open
        </button>
      </div>
    </div>
  );
}
