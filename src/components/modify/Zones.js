import React from "react"
import axios from "axios"
import { Paper,Button } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

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
    axios.get(props.link)
    .then(res => setZones(res.data._embedded.zones))
    .then(() => setShowBoolean(true))
    .catch(err => console.error(err))
}

const deleteTraining = () => {
    axios.delete(props.trainingLink)
    .then(res => console.log(res))
    .finally(() => props.getTrainings)
    .catch(err => console.error(err))
}

return(
    <>
    <Paper elevation={20} style={{padding:1, marginTop:5}}>
        <Grid container spacing={2}>

           <Grid item xs={9}><p style={{marginLeft:15, fontFamily:"arial"}}>{props.type}</p></Grid> 
           <Grid item xs={1}><Button size="small" style={{ marginTop:8, color:"white"}} onClick={showZones}><ExpandMoreIcon /></Button></Grid>
           <Grid item xs={2}><Button style={{margin:5, color:"grey"}} onClick={deleteTraining}><ClearIcon /></Button></Grid>
            {showBoolean && 
            <Grid item xs={12}>

                {zones.map((z, index) => 
                    <Paper style={{padding:1, margin:5}}>
                    <p style={{fontFamily: "Arial", marginLeft:10}} key={index}>{z.type} , {z.length}</p>
                    </Paper>
                )}

            </ Grid>
            }
        
        </Grid>
    </Paper>
    </>
)
}