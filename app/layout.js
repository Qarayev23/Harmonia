import "./assets/styles/_main.scss";
import { IM_Fell_Great_Primer } from "next/font/google";

const imFell = IM_Fell_Great_Primer({
  weight: "400",
  style: ["normal", "italic"], 
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Harmonia",
  description:
    "In the world of Harmonia, every card carries power, every choice shapes destiny - are you ready to reveal yours?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={imFell.className}>{children}</body>
    </html>
  );
}