import Layout from "./Layout";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';

import Menu from "./Menu";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import * as React from "react";
import {useColorScheme} from "@mui/joy/styles";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import ExtensionIcon from '@mui/icons-material/Extension';

function ColorSchemeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return <IconButton size="md" variant="solid" color="primary" />;
    }
    return (
        <IconButton
            id="toggle-mode"
            size="md"
            variant="solid"
            color="primary"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
        >
            {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
    );
}

export default function Header() {
    return (
        <Layout.Header>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    flexGrow: 1,
                }}
            >
                <IconButton
                    size="md"
                    variant="solid"
                    sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                >
                    <ExtensionIcon />
                </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography
                    component="h1"
                    fontWeight="xl"
                    fontSize="3rem"
                    fontStyle="bold"
                >
                    Puzzled
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1.5,
                    flexGrow: 1,
                    justifyContent: 'flex-end',
                }}
            >

                <IconButton size="md" variant="solid" color="primary" component="a">
                    <GroupIcon />
                </IconButton>

                <IconButton size="md" variant="solid" color="primary" component="a">
                    <MessageIcon />
                </IconButton>

                <ColorSchemeToggle />
            </Box>
        </Layout.Header>
    );
}
