import { Paper } from '@mui/material';
import Zones from './Zones';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import React from 'react';
import AddTraining from './AddTraining';

export default function Day(props) {

    const [addTrainingBoolean, setAddTrainingBoolean] = React.useState(false);

    const openAddTraining = () => {
        !addTrainingBoolean ? setAddTrainingBoolean(true)
        : setAddTrainingBoolean(false)
    }

    return(
        <Paper style={{padding:5, margin:"auto", marginTop:10}}>  
           
        <Grid container spacing={2}>
            <Grid item xs={10}><p style={{fontFamily:"arial", marginLeft:5}}>{props.daysName}</p></Grid>
            <Grid item xs={2}><Button onClick={() => openAddTraining()} size="small" style={{marginTop:10, color:"white"}}><AddTaskIcon/></Button></Grid>
        </Grid>

        {addTrainingBoolean && <AddTraining day={props.day} postTraining={props.postTraining} id={props.id} setBoolean={setAddTrainingBoolean}/> }

        {
            props.array.map((t ,index) =>
            <div key={index}>
                <Zones link={t._links.zones.href} trainingLink={t._links.self.href} type={t.type} getTrainings={props.getTrainings}/>
            </div>
            )
        }

        </Paper>
    )
}