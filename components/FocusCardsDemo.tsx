import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "YouTube Clone",
      src: "/ym.png",
    },
    {
      title: "NoteBook Application",
      src: "/im.png",
    },
    {
      title: "Ecommerce Application",
      src: "/fm.jpeg",
    },
    {
      title: "Video Call Application",
      src: "/ym.jpeg",
    },
    {
      title: "Courses + Blogs",
      src: "/sm.png",
    },
    {
      title: "Education Application",
      src: "/gm.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
