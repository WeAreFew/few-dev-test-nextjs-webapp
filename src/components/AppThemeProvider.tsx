"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/styles/mui-theme";

export default function AppThemeProvider(props: { children: React.ReactNode }) {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
