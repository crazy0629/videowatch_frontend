import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ToastContainer } from "react-toastify";
import { AppContext } from "@/context";

const TopProgressBar = dynamic(
  () => {
    return import("@/components/TopProgressBar");
  },
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <TopProgressBar />
      <Component {...pageProps} />
    </AppContext>
  );
}
