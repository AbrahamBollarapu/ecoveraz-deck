"use client";

import * as React from "react";

let QRCodeCanvas: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  QRCodeCanvas = require("qrcode.react").QRCodeCanvas;
} catch {
  QRCodeCanvas = null;
}

function copyToClipboard(text: string) {
  try {
    void navigator.clipboard?.writeText(text);
  } catch {
    // ignore
  }
}

export function Slide15Closing() {
  const investorUrl = "https://www.ecoveraz.com/investor";

  return (
    <div className="h-full w-full">
      {/* MOBILE: vertical stack */}
      <div className="block md:hidden space-y-4">
        <div className="rounded-2xl border border-line bg-bg p-4">
          <div className="text-sm font-medium text-sub">NEXT STEP</div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">Secure Investor Access</h1>
          <p className="mt-2 text-sm leading-relaxed text-sub">
            Scan to request confidential materials. Access is provided selectively; additional documents may be shared under NDA / confidentiality terms.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-bg p-4">
          <div className="text-sm font-medium">What you’ll receive</div>
          <ul className="mt-3 space-y-2 text-sm text-sub">
            <li>Investor pitch deck (current version)</li>
            <li>Architecture &amp; evidence chain overview</li>
            <li>Regulatory coverage summary (CSRD / SEC / ISSB / BRSR)</li>
            <li>IP &amp; defensibility summary</li>
          </ul>
          <div className="mt-5 rounded-lg border bg-slate-50 p-3 text-xs text-slate-600">
            Confidential &amp; proprietary. © EcoVeraZ, Inc. All rights reserved.
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-bg p-4 flex flex-col items-center justify-center">
          <div className="text-sm font-medium">EcoVeraZ Investor Gateway</div>
          <div className="mt-1 text-xs text-sub">Scan to open /investor</div>

          <button
            type="button"
            onClick={() => copyToClipboard(investorUrl)}
            className="mt-4 rounded-lg border bg-white p-3 hover:bg-slate-50"
            title="Click to copy link"
          >
            {QRCodeCanvas ? (
              <QRCodeCanvas value={investorUrl} size={160} includeMargin />
            ) : (
              <div className="h-[160px] w-[160px] rounded-md border border-dashed flex items-center justify-center text-xs text-sub">
                Install: <span className="ml-1 font-mono">npm i qrcode.react</span>
              </div>
            )}
          </button>

          <div className="mt-3 text-xs text-sub text-center break-all">{investorUrl}</div>
        </div>
      </div>

      {/* TABLET/DESKTOP: keep your original 12-col */}
      <div className="hidden md:grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="text-sm font-medium text-sub">NEXT STEP</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Secure Investor Access</h1>
          <p className="mt-2 max-w-3xl text-base leading-relaxed text-sub">
            Scan to request confidential materials. Access is provided selectively; additional
            documents may be shared under NDA / confidentiality terms.
          </p>
        </div>

        <div className="col-span-7 rounded-xl border p-5">
          <div className="text-sm font-medium">What you’ll receive</div>
          <ul className="mt-3 space-y-2 text-sm text-sub">
            <li>Investor pitch deck (current version)</li>
            <li>Architecture &amp; evidence chain overview</li>
            <li>Regulatory coverage summary (CSRD / SEC / ISSB / BRSR)</li>
            <li>IP &amp; defensibility summary</li>
          </ul>

          <div className="mt-5 rounded-lg border bg-slate-50 p-3 text-xs text-slate-600">
            Confidential &amp; proprietary. © EcoVeraZ, Inc. All rights reserved.
          </div>
        </div>

        <div className="col-span-5 rounded-xl border p-5 flex flex-col items-center justify-center">
          <div className="text-sm font-medium">EcoVeraZ Investor Gateway</div>
          <div className="mt-1 text-xs text-sub">Scan to open /investor</div>

          <button
            type="button"
            onClick={() => copyToClipboard(investorUrl)}
            className="mt-4 rounded-lg border bg-white p-3 hover:bg-slate-50"
            title="Click to copy link"
          >
            {QRCodeCanvas ? (
              <QRCodeCanvas value={investorUrl} size={180} includeMargin />
            ) : (
              <div className="h-[180px] w-[180px] rounded-md border border-dashed flex items-center justify-center text-xs text-sub">
                Install: <span className="ml-1 font-mono">npm i qrcode.react</span>
              </div>
            )}
          </button>

          <div className="mt-3 text-xs text-sub text-center break-all">{investorUrl}</div>
        </div>
      </div>
    </div>
  );
}
