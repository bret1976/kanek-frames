import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";

export function Chrome({
  children,
  footer = true,
}: {
  children: ReactNode;
  footer?: boolean;
}) {
  return (
    <main className="bg-bg text-fg">
      <Nav />
      {children}
      {footer ? <Footer /> : null}
    </main>
  );
}
