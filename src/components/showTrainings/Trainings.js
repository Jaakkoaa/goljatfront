import axios from 'axios';
import React from 'react';

export default function Trainings(props) {

    const [trainings, setTrainings] = React.useState([]);

    const getTrainings = () => {
        axios.get(props.link.href)
        .then(res => setTrainings(res.data._embedded.trainings))
        .catch(err => console.error(err))
    }

    React.useEffect(() => getTrainings() ,[]);

    return(
        <>
            {
                trainings.map((t, index) => 
              
                <p key={index}> {t.type} {t.weekday}</p>
    
                )
            }
        </>
    )
}