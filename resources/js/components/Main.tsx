import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Header from "./ui/Header";
import Menu from "./ui/Menu";
import { Container, Grid, Paper, Box } from "@mui/material";

type Props = {
    setAuth: (v: boolean) => void;
};

const Main = (props: Props) => {
    const { setAuth } = props;
    const [lang, setLeng] = useState("rus");

    return (
        <>
            <Header lang={lang} setLeng={setLeng} />
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Menu setAuth={setAuth} />
                    </Grid>
                    <Grid item xs={10}>
                        <Paper variant="outlined">
                            <Box component="main" p={2}>
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
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Main;
