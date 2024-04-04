import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { FC } from 'react';

type ThemeProp = {
    children: JSX.Element

};

enum themePalette {
    BG_COLOR= "#000",
    PRIMARY_COLOR="#eae2b7",
    FONT_GLOBAL="'Oxygen Mono',sans-serif"
}

const theme = createTheme({
    palette: {
        mode: "dark",
        // background: {
        //     default: themePalette.BG_COLOR
        // },
        primary:{
            main: themePalette.PRIMARY_COLOR
        }
    },
    typography:{
        fontFamily: themePalette.FONT_GLOBAL
    }
});
export const ThemeConfig: FC<ThemeProp> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
