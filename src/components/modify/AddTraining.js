import { TextField, Paper, Button } from "@mui/material";
import React from "react";

export default function AddTraining(props) {
    
    const [training, setTraining] = React.useState({});

    const inputChanged = (event) => {
        setTraining({
            type: event.target.value,
            weekday: props.day,
            week: `https://localhost:8080/weeks/${props.id}`
        })
    }

    const buttonPressed = () => {
        props.postTraining(training);
        props.setBoolean(false);
    }

return(
    <Paper elevation={20} style={{padding:1, marginTop:5}}>
            <TextField 
             style={{margin:10}}
             size="small"
             name="type"
             value={training.type}
             onChange={inputChanged}
             label="type"
            ></TextField>
            <Button onClick={() => buttonPressed()} style={{marginTop:10, color:"white"}}>add</Button>
    </Paper>
)
}