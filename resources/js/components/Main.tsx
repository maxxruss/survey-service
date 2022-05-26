import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./Header";
import Menu from "./ui/Menu";


type Props = {
    setAuth: (v: boolean) => void;
};

const Main = (props: Props) => {
    const { setAuth } = props;
    const [lang, setLeng] = useState("rus");

    return (
        <>
            <Header lang={lang} setLeng={setLeng} />
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Home setAuth={setAuth} />
                </Route>
                <Route component={About} exact path="/about">
                    <About/>
                </Route>
            </Switch>
        </>
    );
};

export default Main;
