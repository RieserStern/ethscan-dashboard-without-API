import React, { Suspense } from "react";
import { useEffect } from "react";
import i18next from "i18next";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import useCustomTheme from "./hooks/useCustomTheme";
import { ThemeProvider } from "@emotion/react";
import { ConfirmDialogProvider } from "react-mui-confirm";

import Layout from "./components/Layout/Layout";

import TransactionHistory from "./pages/TransactionHistory/TransactionHistory";

function App() {
  const { customTheme } = useCustomTheme(true);

  useEffect(() => {
    i18next.changeLanguage("en");
  }, [customTheme]);

  return (
    <ThemeProvider theme={customTheme}>
      <ConfirmDialogProvider>
        <div className="nk-wrap">
          <BrowserRouter>
            <Layout> </Layout>

            <Suspense fallback={<div className="loading" />}>
              <Routes>
                <Route path="/" element={<TransactionHistory />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </ConfirmDialogProvider>
    </ThemeProvider>
  );
}
export default App;
