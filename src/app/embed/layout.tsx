// src/app/embed/layout.tsx
import "./embed.css"; // Dedicated CSS for embeds

export default function EmbedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
