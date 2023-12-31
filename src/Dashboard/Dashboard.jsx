import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import Rout from "./Routes";

import { darkTheme, lightTheme } from "./styles/theme";
import './styles/globalStyles'
import './styleOver.css'
export const ThemeContext = React.createContext(null);

const Dash = (props) => {
    const [theme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;
    return (

            <ThemeProvider theme={themeStyle}>
                <>
                    <Layout>
                        <Rout data={props.data}/>
                    </Layout>
                </>
            </ThemeProvider>

    );
};

export default Dash;
