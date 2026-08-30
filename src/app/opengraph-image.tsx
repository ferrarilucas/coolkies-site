import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = "Coolkies — sistema de gestão para pequenos negócios";
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
          background: "linear-gradient(135deg,#4B2E1A 0%,#8B5E3C 62%,#A97144 100%)",
          fontFamily: "sans-serif",
          color: "#FAF6F0",
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
              borderRadius: 22,
              background: "#FAF6F0",
              fontSize: 42,
            }}
          >
            🍪
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>Coolkies</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 74, fontWeight: 800, letterSpacing: -3, lineHeight: 1.1 }}>
          <span>Seu negócio saiu</span>
          <span>do caderninho.</span>
        </div>

        <div style={{ display: "flex", width: 220, height: 8, borderRadius: 4, background: "#DFA96E", margin: "34px 0" }} />

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
            background: "#FAF6F0",
            color: "#8B5E3C",
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
