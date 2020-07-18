import React from 'react';
import { ThemeProvider } from 'styled-components/macro'
import PropTypes from 'prop-types'
import GlobalStyles from 'theme/GlobalStyles'
import { theme } from 'theme/MainTheme'


function MainTemplate({ children }) {

    return (
        <div >
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <>
                    {children}
                </>
            </ThemeProvider>

        </div>
    );


}
MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
}

export default MainTemplate;
