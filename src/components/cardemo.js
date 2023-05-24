import toucan from '../images/toucan.jpg'
import {Card, CardActions, CardContent,Button} from '@mui/material'
function CardComp()
{
    return ( <Card sx={{width:"300px"}} variant="outlined">
    <CardContent>
     <img src={toucan} width="250px" height="200px"/>
    </CardContent>
     <CardActions>
       <Button variant="contained">Know More</Button>
     </CardActions>
 </Card>)
}

export default CardComp