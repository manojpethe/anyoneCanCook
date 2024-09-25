import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Menubar from "./Menubar";

export default function App({ Component, pageProps }: AppProps) {
  return (<>
  <Menubar/>
  <Component {...pageProps} />
  </>
  );
}
