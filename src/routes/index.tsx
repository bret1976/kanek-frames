import { createFileRoute } from "@tanstack/react-router";
import { Chrome } from "@/components/site/chrome";
import { HomeReel } from "@/components/site/home-reel";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Chrome footer={false}>
      <HomeReel />
    </Chrome>
  );
}
