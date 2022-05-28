import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import withRequestService from "./hoc/with-request-service";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import compose from "../utils/compose";
import Spinner from "./spinner";
import Main from "./Main";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import Respondent from "./pages/respondent";
import CssBaseline from "@mui/material/CssBaseline";
import Page404 from "./pages/404";

interface Props {
    requestService: {
        auth: (method: object) => { result: string; data: string };
    };
    authDataLoaded: (data: any) => {};
}

type StateProps = {
    id: string;
    name: string;
    email: string;
};

type RouteProps = {
    children: any;
    exact: boolean;
    path: string;
};

const Body: React.FC<Props> = (props) => {
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState(true);

    function AuthorizedRoute(props: RouteProps): JSX.Element {
        const { children, exact, path } = props;
        // if (path.indexOf("respondent") != -1) {
        //     console.log();
        //     return (
        //         <Route exact={exact} path={path}>
        //             {children}
        //         </Route>
        //     );
        // }
        return (
            <Route
                exact={exact}
                path={path}
                render={({ location }) =>
                    auth ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: location },
                            }}
                        />
                    )
                }
            />
        );
    }

    function UnAuthorizedRoute(props: RouteProps): JSX.Element {
        const { children, exact, path } = props;
        return (
            <Route
                exact={exact}
                path={path}
                render={({ location }) =>
                    !auth ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location },
                            }}
                        />
                    )
                }
            />
        );
    }

    async function authCheck() {
        setLoading(true);

        const response = await props.requestService.auth({
            method: "check",
        });

        if (response.result == "success") {
            const data = response.data;
            props.authDataLoaded(data);
            setAuth(true);
        } else {
            setAuth(false);
        }

        setLoading(false);
    }

    useEffect(() => {
        authCheck();
    }, []);

    if (loading) return <Spinner />;
    return (
        <>
            <CssBaseline />
            <Switch>
                <Route
                    exact
                    path="/respondent/:id"
                    render={(props) => <Respondent />}
                />
                <UnAuthorizedRoute exact path="/signin">
                    <SignIn setAuth={setAuth} />
                </UnAuthorizedRoute>
                <UnAuthorizedRoute exact path="/signup">
                    <SignUp setAuth={setAuth} />
                </UnAuthorizedRoute>
                <AuthorizedRoute exact={false} path="/">
                    <Main setAuth={setAuth} />
                </AuthorizedRoute>
                <Route path="*" component={Page404} />
            </Switch>
        </>
    );
};

const mapStateToProps = ({ id, name, email }: StateProps) => {
    return { id, name, email };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(actions, dispatch);

export default compose(
    withRequestService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Body);
