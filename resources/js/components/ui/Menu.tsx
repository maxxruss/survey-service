import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useHistory } from "react-router-dom";
import withRequestService from "../hoc/with-request-service";
import compose from "../../utils/compose";
import * as actions from "../../redux/actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const MenuList = [
    { icon: <InboxIcon />, title: "about", path: "/about" },
    { icon: <InboxIcon />, title: "contacts", path: "/contacts" },
    { icon: <InboxIcon />, title: "название 1", path: "/about" },
];

type Props = {
    authLogOut: () => {};
    setAuth: (v: boolean) => {};
    requestService: {
        auth: (method: object) => { result: string };
    };
};

{
    /* <Button onClick={() => logout()}>Выйти</Button>
            <Button onClick={() => about()}>about</Button> */
}

const Menu = (props: Props) => {
    const { authLogOut, setAuth } = props;

    const history = useHistory();

    async function logout() {
        var response = await props.requestService.auth({
            method: "logout",
        });

        if (response.result == "success") {
            authLogOut();
            setAuth(false);
            history.push("/signin");
        }
    }

    const about = async () => {
        history.push("/about");
    };

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                <nav aria-label="main mailbox folders">
                    <List>
                        {MenuList.map((item, i) => {
                            return (
                                <NavLink to={item.path} key={i + item.path}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.title}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                </NavLink>
                            );
                        })}
                        <ListItem
                            disablePadding
                            onClick={() => logout()}
                            button
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Выйти" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </>
    );
};

export default compose(
    withRequestService(),
    // withRouter(),
    connect(null, actions)
)(Menu);
