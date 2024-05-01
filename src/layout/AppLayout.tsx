import {FC, useState} from 'react';
import {Outlet} from "react-router-dom";
import Header from '../components/App/Header/header.tsx';
import Navbar from "../components/App/Navbar/navbar.tsx";
import {AppShell, Burger, Flex} from "@mantine/core";
import {useDisclosure, useMediaQuery} from '@mantine/hooks';
import {ArrowLeftIcon, ArrowRightIcon} from "../assets";

const AppLayout: FC = () => {
    const isTablet = useMediaQuery(`(max-width: ${700}px)`);
    const [opened, { toggle }] = useDisclosure();
    const [navWidth, setNavWidth] = useState<number>(255);
    const [navWidthStatus, setNavWidthStatus] = useState<boolean>(false);
    const handleToggle = () => {
        setNavWidth(navWidthStatus ? 255 : 100);
        setNavWidthStatus(!navWidthStatus);
    }
    return (
        <AppShell
            layout={!opened ? 'alt' : 'default'}
            header={{height: {base: 60, sm: 80}}}
            navbar={{
                width: {base: '100%', sm: navWidth},
                breakpoint: 'sm',
                collapsed: {mobile: !opened},
            }}
            padding="md"
        >

            <AppShell.Header bg="specialBackground" withBorder={false}>
                <Flex justify="space-between" align="center" p='md'>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Header/>
                </Flex>
            </AppShell.Header>

            <AppShell.Navbar bg="specialDarkerGreen" withBorder={false}>
                <Navbar navWidthStatus={navWidthStatus}/>
                {!isTablet && <div className="toggle-button" onClick={handleToggle}>
                    {navWidthStatus ? <ArrowLeftIcon/> : <ArrowRightIcon/>}
                </div>}
            </AppShell.Navbar>

            <AppShell.Main bg="specialBackground">
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
};

export default AppLayout;
