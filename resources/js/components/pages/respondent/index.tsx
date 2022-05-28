import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

interface IParams {
    id: string;
}

const Respondent = () => {
    const { id } = useParams<IParams>();

    return (
        <>
            <Grid>{"Respondent - " + id}</Grid>
        </>
    );
};

export default Respondent;
