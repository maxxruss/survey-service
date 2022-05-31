import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Spinner from "../spinner";

const About = () => {
    const history = useHistory();

    const Home = async () => {
        history.push("/");
    };

    return (
        <div className="tender_test">
            <h1>About</h1>
            <Spinner />
            <Button onClick={() => Home()}>Home</Button>
        </div>
    );
};

export default About;
