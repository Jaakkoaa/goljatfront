import React from "react"
import axios from "axios"
import { Paper,Button } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid} from "@mui/material";

export default function Zones(props) {

const [zones, setZones] = React.useState([]);
const [showBoolean, setShowBoolean] = React.useState(false);

const showZones = () => {

    !showBoolean ? 
        getZones()
    :
    setShowBoolean(false);
}

const getZones = () => {
    axios.get(props.link.href)
    .then(res => setZones(res.data._embedded.zones))
    .then(() => setShowBoolean(true))
    .catch(err => console.error(err))
}

return(
    <>
    <Paper elevation={20} style={{padding:1, marginTop:5}}>
        <Grid container spacing={2}>

           <Grid item xs={10}><p style={{marginLeft:10}}>{props.type}</p></Grid> 
           <Grid item xs={2}><Button size="small" style={{ marginTop:8}} onClick={showZones}><ExpandMoreIcon /></Button></Grid>
            {showBoolean && 
            <Grid item xs={2}>

                {zones.map((z, index) => 
                    <p style={{marginLeft:10}} key={index}>{z.type} , {z.length}</p>
                )}

            </ Grid>
            }
        
        </Grid>
    </Paper>
    </>
)
}