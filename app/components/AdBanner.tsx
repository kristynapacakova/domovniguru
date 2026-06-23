interface AdBannerProps {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function AdBanner({ href, src, alt, width, height }: AdBannerProps) {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer nofollow sponsored">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
        />
      </a>
      <div style={{
        fontSize: "10px", color: "#aaa8a0", fontWeight: 500,
        letterSpacing: ".05em", textTransform: "uppercase",
        marginTop: "6px", textAlign: "right",
      }}>Reklama</div>
    </div>
  );
}
