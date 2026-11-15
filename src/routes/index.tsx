import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <iframe
      title="Doashow Desktop"
      src="/desktop.html?v=edit2"
      className="desktop-frame"
    />
  );
}
