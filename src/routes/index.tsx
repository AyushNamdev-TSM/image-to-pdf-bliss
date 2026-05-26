import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const PDF_URL = "https://nptel-ac.s3.eu-north-1.amazonaws.com/NPTEL26CS55S952403805%20%282%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIARW5AQIRYL4D2SOFB%2F20260526%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20260526T045936Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRjBEAiBcpvPCHWq%2FnBY5EPRwKsoyCnhNp0WPlKHPnf4q9VJMVQIgI6ro8wnOWCco4DqSmgqE34TK1Qnsh9wT1tgC%2FBTNkFcq2gIIdhAAGgwxMTc5MTEzNDAxNDQiDKUPUcm8X%2Fl9EBkX4Sq3Ark6xPq98hiXqSL4Bnqn4%2FneRt0flqPWHWAIkRrYlzk7Btj62Dh6hUR%2Boz0oK5UL%2Fp874D2ErNmcpuwEi8UN68PYZsMa%2FaZaELDEVB0Q4vEBjvp2z2q92sqZG7xwtfxbg0bngNQ4B8SZ2K4JFNr08AerWxvwfXvbg4OHZ2%2Bq2XFQ6S0HAaDSpicJfuLFt1CpLWDXlZ4Cc9PJN5ZiHMKMIOXIanPVcejxmyTOQ20dK6ZFBVbGS8dVeaM3oFrhA7JDT2evL4VReqjLjuNp5EhN0B4O2PBwj1atrCDFuEfLkMw846AR7G6zPG7yRSYYnQ9IoIXoZsMolD9ICvZjvPHkm4TlwzaBqJYa6w5kD1%2Fihe5EuBrfNOoQc3spptxzg7doAe%2B6N8xSIup8FM2%2BDWSNSSP%2Bg%2FUMOdxHMP%2FN1NAGOq4C1YyueSXI0D7GqfstxwmEdVF%2FH%2BY83%2FvBKgLxiP0MMzN%2BzPlCF82HaXeYdKOCn3oyt9ypsdVOd2asz3NZCkjtrm1TPlKsWUz3pHBl0XHRPWx6iyUg0pFrwvzgbsmwTA6IiNc0BMiqcDZMfNcxL46r68CSieKQBTkr%2BYEEa%2B79mXb9JAaG58Kmpg2SmWg8GR5%2BJ0GsO4wbE%2FzUyn4ZFhbhSlhhZN71dIwByuu47L2ans28wtyD4xpgVg7hNpz9h2l2gv5vqM3%2BBLxB%2FnJfiIh6R%2BTERaUYh42RuxgfiBSdNl0AJy8xMU3oxWj9WNP0qtnBuWXR9EyQCYHBYo3yndjS%2BaVzl1yPsfKP6cRaN49c9ILjb6HZJr3%2BppeL5%2BRARisE5Msir5pluwBil9agkP4%3D&X-Amz-Signature=aa68b055ea4d18cc37e2921aecb002689bcd5d01206f204aa97c38770e64701f&X-Amz-SignedHeaders=host&response-content-disposition=inline";
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
