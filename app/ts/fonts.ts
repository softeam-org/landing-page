import { Open_Sans, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
