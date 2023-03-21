import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "animate.css/animate.min.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <ToastContainer className={inter.className} />
      <Component {...pageProps} />
    </div>
  );
}
