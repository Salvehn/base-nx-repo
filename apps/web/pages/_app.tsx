import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell, MantineProvider, Navbar } from '@mantine/core';
import { CustomHeader, CustomNavbar } from '@cellbot/ui'
import { BarChartIcon, DashboardIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons';
import { Fingerprint, Settings } from 'tabler-icons-react';


const headerLinks = [
    // { link: '/', label: 'Home' },
    // { link: '/about', label: 'About' },
    // { link: '/contact', label: 'Contact' },
    // { link: '/tracking', label: 'Tracking' },
]

const navbarLinks = [
    { icon: HomeIcon, label: 'Home' },
    { icon: DashboardIcon, label: 'Dashboard' },
    { icon: BarChartIcon, label: 'Analytics' },

    { icon: PersonIcon, label: 'Account' },
    { icon: Fingerprint, label: 'Security' },
    { icon: Settings, label: 'Settings' },
  ];
  
export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme: 'dark',
                }}
            >
                <AppShell
                    padding="md"
                    navbarOffsetBreakpoint="sm"
                    asideOffsetBreakpoint="sm"
                    fixed
                    navbar={<CustomNavbar p="md" hiddenBreakpoint="sm"/>}
                    header={<CustomHeader links={headerLinks} />}
                    styles={(theme) => ({
                        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: '100vh' },
                    })}
                >

                    <Component {...pageProps} />

                </AppShell>
            </MantineProvider>
        </>
    );
}