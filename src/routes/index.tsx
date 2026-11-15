import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <iframe
      title="Doashow Desktop"
      src="/desktop.html?v=night1"
      className="desktop-frame"
    />
  );
}
