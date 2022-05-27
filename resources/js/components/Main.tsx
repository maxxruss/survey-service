import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Header from "./Header";
import Menu from "./ui/Menu";
import Container from "@mui/material/Container";



type Props = {
    setAuth: (v: boolean) => void;
};

const Main = (props: Props) => {
    const { setAuth } = props;
    const [lang, setLeng] = useState("rus");

    return (
        <>
            <Header lang={lang} setLeng={setLeng}/>
            <Container maxWidth="xl">
                <Menu setAuth={setAuth} />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/contacts">
                        <Contacts />
                    </Route>
                </Switch>
            </Container>
        </>
    );
};

export default Main;
