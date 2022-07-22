import React, { ReactElement, useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Group, NavbarProps } from '@mantine/core';
import {
    Fingerprint,
    Gauge,
    Home2,
    Icon as TablerIcon,

    Logout,
    ReportAnalytics,
    Settings,
    SwitchHorizontal,
    Tools,
    User,
} from 'tabler-icons-react';
import { BarChartIcon, DashboardIcon, PersonIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';


const useStyles = createStyles((theme) => ({
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
        },
    },
}));

interface NavbarLinkProps {
    icon: TablerIcon;
    label: string;
    active?: boolean;
    path: string
}

function NavbarLink({ icon: Icon, label, active, path }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position="right" withArrow transitionDuration={0}>
            <UnstyledButton className={cx(classes.link, { [classes.active]: active })}>
                <Link
                    href={path}
                    passHref
                >
                    <a href={path}>
                        <Icon />
                    </a>
                </Link>

            </UnstyledButton>
        </Tooltip>
    );
}


const navbarLinks: NavbarLinkProps[] = [
    { icon: Home2, label: 'Home', path: '/' },
    // { icon: Gauge, label: 'Dashboard', path: 'dashboard' },
    { icon: Tools, label: 'Constructor', path: '/constructor' },
    { icon: Fingerprint, label: 'Security', path: '/security' },
    { icon: Settings, label: 'Settings', path: '/settings' },
];




export function CustomNavbar(props: Omit<NavbarProps, 'children'>) {
    //next current path
    const { pathname } = useRouter();
    console.log(pathname)
    const links = navbarLinks.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={link.path === pathname}

        />
    ));

    return (
        <Navbar width={{ base: 80 }} p="md" {...props}>
            {/* <Center>
                <MantineLogoSmall />
            </Center> */}
            <Navbar.Section grow mt={50}>
                <Group direction="column" align="center" spacing={0}>
                    {links}
                </Group>
            </Navbar.Section>
            <Navbar.Section>
                <Group direction="column" align="center" spacing={0}>
                    <NavbarLink icon={SwitchHorizontal} label="Change account" path='' />
                    <NavbarLink icon={Logout} label="Logout" path='' />
                </Group>
            </Navbar.Section>
        </Navbar>
    );
}