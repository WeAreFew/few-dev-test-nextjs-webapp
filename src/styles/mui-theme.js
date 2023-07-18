// MUI Theme file
import { createTheme } from "@mui/material/styles";

import vars from "./base/variables.module.scss";

export const theme = createTheme({
  palette: {
    primary: {
      main: vars.colorPrimary,
      dark: vars.colorPrimaryDark,
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: vars.colorError },
      },
    },
  },
});
