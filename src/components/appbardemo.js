import { AppBar,Toolbar,Button } from "@mui/material"
function MyAppBarComp()
{
    return (<AppBar color='secondary' position="sticky">
    <Toolbar>
  
       <Button variant="contained">Login</Button>
    </Toolbar>
         </AppBar>)
}

export default MyAppBarComp