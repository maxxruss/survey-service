import * as React from "react";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { useHistory } from "react-router-dom";
import withRequestService from "../hoc/with-request-service";
import compose from "../../utils/compose";
import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";
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
 
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                <Paper variant="outlined">
                    <nav aria-label="main mailbox folders">
                        <List>
                            {MenuList.map((item, i) => {
                                return (
                                    <NavLink
                                        key={i + item.path}
                                        to={item.path}
                                        isActive={(
                                            match,
                                            location
                                        ): boolean => {
                                            return match !== null;
                                        }}
                                    >
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
                </Paper>
            </Box>
        </>
    );
};

export default compose(
    withRequestService(),
    // withRouter(),
    connect(null, actions)
)(Menu);
