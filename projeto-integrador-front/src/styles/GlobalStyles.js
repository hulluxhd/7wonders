
import { extendTheme} from "@chakra-ui/react"

const theme = {
    styles: {
        global: {
            "html": {
                             
            },
            ":root": {
                "--blue": "#1DBEB4",
                "--hard-blue": "#383B58",
                "--light-blue": "#545776",
                "--light-bege": "#F3F1ED",
                fontSize: "16px"
            },
            "body": {
                background: "var(--light-bege)",
                "@media(max-width: 1080px)":{
                    fontSize: "93.75%"
                },
                "@media(max-width: 720px)":{
                    fontSize: "87.5%",
                },


                scroolBehavior: "smooth"   
            },
            "h1": {
                fontSize: "1.5rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "bold"

            },
            "h2": {
                fontSize: "1.25rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "bold"
            },
            "h3": {
                fontSize: "0.875rem'",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "bold"
            },
            "h4": {
                fontSize: "1rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "bold"
            },
            "button, a": {
                cursor: "pointer",
            }

        }
    }
}

export const customTheme = extendTheme(theme)
