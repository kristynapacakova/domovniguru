interface AdBannerProps {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function AdBanner({ href, src, alt, width, height }: AdBannerProps) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        position: "absolute", top: "6px", right: "8px", zIndex: 1,
        fontSize: "10px", color: "#fff", fontWeight: 500,
        background: "rgba(0,0,0,0.5)", padding: "1px 6px", borderRadius: "4px",
      }}>Reklama</div>
      <a href={href} target="_blank" rel="noopener noreferrer nofollow sponsored">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
        />
      </a>
    </div>
  );
}
