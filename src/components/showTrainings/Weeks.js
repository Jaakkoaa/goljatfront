import React from 'react';
import axios from 'axios';
import Trainings from './Trainings';
import Paper from '@mui/material/Paper';

export default function Weeks() {

    const [weeks, setWeeks] = React.useState([]);

    const getWeeks = () => {
        axios.get('http://localhost:8080/weeks')
        .then(res => setWeeks(res.data._embedded.weeks))
        .catch(err => console.error(err));
    }

    React.useEffect(() => getWeeks(),[])

    return(
        <>
        {
            weeks.map((w, index) => 
            <Paper key={index} style={{width:"80%", margin:"auto", padding:10, marginTop:30}} elevation={24}>
                <h3>week number {index +1}: {w.description}</h3>
                <Trainings link={w._links.trainings} />
            </Paper>
            )
        }
        </>
    )
}