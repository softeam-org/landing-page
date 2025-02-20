import { Open_Sans, Poppins, League_Spartan } from "next/font/google";

export const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const leagueSpartan = League_Spartan({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});
