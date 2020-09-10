import { createMuiTheme } from '@material-ui/core';


export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#42b883",
        },
        secondary: {
            main: "#00028c"
        }
    },
    typography: {
        fontFamily: '"Poppins", sans serif',
        h1: {
            fontFamily: '"Prompt", sans serif',
            fontSize: "40px",
            fontWeight: "bold"
        },
        h5: {
            fontFamily: '"Poppins", sans serif',
            color: "#00028c",
            fontWeight: "bold"
        }
    },
    shape: {
        borderRadius: 0
    },
    spacing: 8,
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none"
            }
        }
    }
});