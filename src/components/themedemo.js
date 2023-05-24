import { createTheme,ThemeProvider,AppBar,Toolbar,Button } from "@mui/material";
import { red } from '@mui/material/colors';
function ThemeComp()
{
    const theme=createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
           // 
           main:red[200]
      
          },
          secondary: {
            // This is green.A700 as hex.
            main: red[300] ,
          },
        },
      });
      return (<div>

<ThemeProvider theme={theme}>
       <AppBar position="sticky">
        <Toolbar>
            <Button variant="contained" color="secondary">Login</Button>
        </Toolbar>
       </AppBar>
      
       </ThemeProvider><br/>
      </div>)
}
export default ThemeComp