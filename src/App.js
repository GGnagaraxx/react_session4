import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import RouterApp from './common/sharedComponents/RouterApp';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
});


function App (){
    return(
        <div className="page">
            <ThemeProvider theme={darkTheme}>
                <RouterApp/>
            </ThemeProvider>
        </div>
    )
}

export default App;