import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const Contacts = () => {
    const history = useHistory();

    const Home = async () => {
        history.push('/')
    };

    return (
        <div className="tender_test">
            <h1>Contacts</h1>
            <Button onClick={() => Home()}>Contacts</Button>
        </div>
    );
};

export default Contacts
