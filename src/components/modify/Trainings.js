import axios from 'axios';
import React from 'react';
import Day from './Day';


export default function Trainings(props) {

    const [monday, setMonday] = React.useState([]);
    const [tuesday, setTuesday] = React.useState([]);
    const [wednesday, setWednesday] = React.useState([]);
    const [thursday, setThursday] = React.useState([]);
    const [friday, setFriday] = React.useState([]);
    const [saturday, setSaturday] = React.useState([]);
    const [sunday, setSunday] = React.useState([]);


    const getTrainings = () => {
        setMonday([]);
        setTuesday([]);
        setWednesday([]);
        setThursday([]);
        setFriday([]);
        setSaturday([]);
        setSunday([]);

        axios.get(props.link.href)
        .then(res => trainingsToDays(res.data._embedded.trainings))
        .catch(err => console.error(err))
    }

    const postTraining = (training) => {
        axios.post('http://localhost:8080/trainings', training)
        .then(res => console.log(res))
        .finally(() => getTrainings())
        .catch(err => console.error(err))
        
    }

    const trainingsToDays = (trainings) => {
        for(var i = 0; i < trainings.length; i++) {
            trainings[i].weekday === 'mo' ? setMonday(m => [...m, trainings[i]])
            : 
            trainings[i].weekday === 'tu' ? setTuesday(t => [...t, trainings[i]])
            :
            trainings[i].weekday === 'we' ? setWednesday(w => [...w, trainings[i]])
            :
            trainings[i].weekday === 'th' ? setThursday(t => [...t, trainings[i]])
            :
            trainings[i].weekday === 'fr' ? setFriday(f => [...f, trainings[i]])
            :
            trainings[i].weekday === 'sa' ? setSaturday(s => [...s, trainings[i]])
            :
            trainings[i].weekday === 'su' ? setSunday(s => [...s, trainings[i]])
            : console.err('training does not have a weekday');
        }
    }

    React.useEffect(() => getTrainings() ,[]);

    return(
        <>
                <Day daysName={'monday'} day={'mo'} array={monday} postTraining={postTraining} id={props.id} getTrainings={getTrainings}/>

                <Day daysName={'tuesday'} day={'tu'} array={tuesday} postTraining={postTraining} id={props.id} getTrainings={getTrainings}/>

                <Day daysName={'wednesday'} day={'we'} array={wednesday} postTraining={postTraining} id={props.id} getTrainings={getTrainings}/>

                <Day daysName={'thursday'} day={'th'} array={thursday} postTraining={postTraining} id={props.id} getTrainings={getTrainings}/>

                <Day daysName={'friday'} day={'fr'} array={friday} postTraining={postTraining} id={props.id} getTrainings={getTrainings}/>

                <Day daysName={'saturday'} day={'sa'} array={saturday} postTraining={postTraining} id={props.id} getTrainings={getTrainings}/>

                <Day daysName={'sunday'} day={'su'} array={sunday} postTraining={postTraining} id={props.id} getTrainings={getTrainings}/>
        </>
    )
}