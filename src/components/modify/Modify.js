import React from "react";
import { Paper } from "@mui/material";
import axios from 'axios';
import Weeks from "./Weeks";
import {useParams} from "react-router";

export default function Modify() {
   
    const {id} = useParams();


    
   
    return(
        <>
        <Weeks 
        id={id}/>
        </>
    )
}