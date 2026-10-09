import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
import { CipriLogo } from "@/components/icons";

export const runtime = "edge";
export const alt = "Cipri — seu negócio no seu ritmo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          background: "linear-gradient(140deg,#C94F32 0%,#B24428 55%,#8F3520 100%)",
          fontFamily: "sans-serif",
          color: "#F7F4ED",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 44 }}>
          <CipriLogo height={96} className="text-creme" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 74, fontWeight: 800, letterSpacing: -3, lineHeight: 1.1 }}>
          <span>Seu negócio</span>
          <span>no seu ritmo.</span>
        </div>

        <div style={{ display: "flex", width: 220, height: 8, borderRadius: 4, background: "#D7B98E", margin: "34px 0" }} />

        <div style={{ display: "flex", flexDirection: "column", fontSize: 30, opacity: 0.94, lineHeight: 1.35 }}>
          <span>Vendas, fiado, estoque, receitas e custo real</span>
          <span>num só lugar. Direto do celular.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            padding: "12px 30px",
            borderRadius: 999,
            background: "#F7F4ED",
            color: "#A63E25",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          {site.url.replace("https://", "")}
        </div>
      </div>
    ),
    size,
  );
}
