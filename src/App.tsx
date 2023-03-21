import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';









// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuIcon from '@mui/icons-material/Menu';
import BookRoundedIcon from '@mui/icons-material/BookRounded';

// custom
import emailTheme from './theme';
import Menu from './components/Menu';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Mails from './components/Mails';
import EmailContent from './components/EmailContent';
import Button from "@mui/joy/Button";

import DraggableIcon from "./components/DraggableIcon";
import Header from "./components/Header";


// THE DRAGGABLE CANVAS CODE
function DraggableCanvas() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                position: 'relative',
                overflow: 'hidden',
                minHeight: 'calc(100vh - 64px)',
            }}
        >
            <DraggableIcon />
            <DraggableIcon />
            <DraggableIcon />
            <DraggableIcon />
            <DraggableIcon />
            <DraggableIcon />

        </Box>
    );
}



export default function PageExample() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <CssVarsProvider disableTransitionOnChange theme={emailTheme}>
      <CssBaseline />


      <Layout.Root>
          <Header/>
          <Layout.Canvas>
            <DraggableCanvas />
          </Layout.Canvas>
      </Layout.Root>



    </CssVarsProvider>
  );
}
