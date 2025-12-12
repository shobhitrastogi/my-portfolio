import { LayoutTextFlipDemo } from "./LayoutTextFlipDemo";
import { NavbarDemo } from "./NavbarDemo";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavbarDemo />
      <LayoutTextFlipDemo />
      <StickyScrollRevealDemo />
    </div>
  );
}
