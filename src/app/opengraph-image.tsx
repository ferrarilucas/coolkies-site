import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = "Bigas — negócio é negócio";
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
          background: "linear-gradient(140deg,#0B0D0F 0%,#12161A 46%,#14532D 100%)",
          fontFamily: "sans-serif",
          color: "#F4F7F5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 44 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 24,
              background: "#16A34A",
              fontSize: 44,
              fontWeight: 900,
              color: "#0B0D0F",
            }}
          >
            B
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>Bigas</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 74, fontWeight: 800, letterSpacing: -3, lineHeight: 1.1 }}>
          <span>Negócio</span>
          <span>é negócio.</span>
        </div>

        <div style={{ display: "flex", width: 220, height: 8, borderRadius: 4, background: "#22C55E", margin: "34px 0" }} />

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
            background: "#22C55E",
            color: "#0B0D0F",
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
