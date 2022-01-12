import { Paper } from '@mui/material';
import Zones from './Zones';

export default function Day(props) {

    return(
        <Paper style={{padding:5, margin:"auto", marginTop:10}}>  
        
        <p style={{fontFamily:"arial", marginLeft:5}}>{props.daysName}</p>

        {
            props.array.map((t ,index) =>
            <div key={index}>
                <Zones link={t._links.zones} type={t.type}/>
            </div>
            )
        }

        </Paper>
    )
}