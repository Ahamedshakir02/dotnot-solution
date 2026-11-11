import QRCode from "qrcode";

/** Renders a QR code as inline SVG at build time (no client JS). */
export function QrCode({ value, size = 96, label }: { value: string; size?: number; label: string }) {
  const qr = QRCode.create(value, { errorCorrectionLevel: "M" });
  const n = qr.modules.size;
  const cells: string[] = [];
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (qr.modules.get(x, y)) cells.push(`M${x} ${y}h1v1h-1z`);
    }
  }
  const pad = 2;
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`${-pad} ${-pad} ${n + pad * 2} ${n + pad * 2}`}
      width={size}
      height={size}
      className="shrink-0 rounded-xl bg-white"
      shapeRendering="crispEdges"
    >
      <path d={cells.join("")} fill="#101010" />
    </svg>
  );
}
