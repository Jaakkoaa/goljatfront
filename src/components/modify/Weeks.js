import React from 'react';
import axios from 'axios';
import Trainings from './Trainings';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Grid} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Weeks(props) {

    const [weeks, setWeeks] = React.useState([]);
    const navigate = useNavigate();

    const getWeeks = () => {
        axios.get(`http://localhost:8080/plans/${props.id}/weeks`)
        .then(res => setWeeks(res.data._embedded.weeks))
        .catch(err => console.error(err));
    }

    React.useEffect(() => getWeeks(),[])

    const createWeek = () => {
        axios.post('http://localhost:8080/weeks', {
            plan: `http://localhost:8080/plans/${props.id}`
        })
        .then(res => console.log(res))
        .finally(() => getWeeks())
        .catch(err => console.error(err))
    }

    const createZone = () =>  {

    }

    //TODO: ongelma ehkä bäkkärissä, acces control origin ongelma
    const deleteWeek = (link) => {
        axios.delete(link)
        .then(res => console.log(res))
        .finally(() => getWeeks())
        .error(err => console.error(err))
    }

    const deleteTraining = () => {

    }

    const deleteZone = () => {
    }

    return(
        <>
        <Button style={{margin:10, color:"white"}} onClick={createWeek}><AddCircleIcon /></Button>
        {
            weeks.map((w, index) => 
            <Paper key={index} style={{width:"80%", margin:"auto", padding:10, marginTop:30}} elevation={24}>

                <Grid container spacing={2}>
                    <Grid item xs={10}><h3 style={{fontFamily: "Arial"}}>week number {index +1}: {w.description}</h3></Grid>
                    <Grid item xs={2}><Button style={{marginTop:10, color:"grey"}} onClick={() => deleteWeek(w._links.self.href)}><ClearIcon /></Button></Grid>
                </Grid>

                <Trainings link={w._links.trainings} id={w._links.self.href} />
            </Paper>
            )
        }
        <Button onClick={() => navigate(`/${props.id}`)}>go to the view mode</Button>
        </>
    )
}