import React, { useState } from 'react';
import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Text,
    Burger,
    UnstyledButton,
    Avatar,
    Divider,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { ChevronDown, Heart, Logout, Message, Settings, Star, SwitchHorizontal } from 'tabler-icons-react';


const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },
    userMenu: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    user: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        },
    },
    userActive: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    linkLabel: {
        marginRight: 5,
    },
}));

interface HeaderActionProps {
    links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

export function CustomHeader({ links }: HeaderActionProps) {
    const { classes, theme, cx } = useStyles();
    const [opened, toggleOpened] = useBooleanToggle(false);

    const [userMenuOpened, setUserMenuOpened] = useState(false);


    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    delay={0}
                    transitionDuration={0}
                    placement="end"
                    gutter={1}
                    control={
                        <Link
                            href={link.link}

                            onClick={(event) => event.preventDefault()}
                            passHref
                        >
                            <Center>
                                <a
                                    className={classes.link}
                                >{link.label}</a>
                                <ChevronDownIcon />
                            </Center>
                        </Link>
                    }
                >
                    {menuItems}
                </Menu>
            );
        }

        return (
            <Link
                key={link.label}
                href={link.link}
                passHref
            >
                <a
                    className={classes.link}
                >
                    {link.label}
                </a>
            </Link>
        );
    });
    const user = {
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/150',

    }
    return (
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} >
            <Container className={classes.inner} fluid>
                <Group>
                    <Burger
                        opened={opened}
                        onClick={() => toggleOpened()}
                        className={classes.burger}
                        size="sm"
                    />
                    {/* <MantineLogo /> */}
                </Group>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Menu
                    size={260}
                    placement="end"
                    transition="pop-top-right"
                    className={classes.userMenu}
                    onClose={() => setUserMenuOpened(false)}
                    onOpen={() => setUserMenuOpened(true)}
                    control={
                        <UnstyledButton
                            className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                        >
                            <Group spacing={7}>
                                <Avatar src={user.avatar} alt={user.name} radius="xl" size={20} />
                                <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                                    {user.name}
                                </Text>
                                <ChevronDown size={12} />
                            </Group>
                        </UnstyledButton>
                    }
                >
                    <Menu.Item icon={<Heart size={14} color={theme.colors.red[6]} />}>
                        Liked posts
                    </Menu.Item>
                    <Menu.Item icon={<Star size={14} color={theme.colors.yellow[6]} />}>
                        Saved posts
                    </Menu.Item>
                    <Menu.Item icon={<Message size={14} color={theme.colors.blue[6]} />}>
                        Your comments
                    </Menu.Item>

                    <Menu.Label>Settings</Menu.Label>
                    <Menu.Item icon={<Settings size={14} />}>Account settings</Menu.Item>
                    <Menu.Item icon={<SwitchHorizontal size={14} />}>Change account</Menu.Item>
                    <Menu.Item icon={<Logout size={14} />}>Logout</Menu.Item>

                    <Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    {/* <Menu.Item icon={<PlayerPause size={14} />}>Pause subscription</Menu.Item>
                    <Menu.Item color="red" icon={<Trash size={14} />}>
                        Delete account
                    </Menu.Item> */}
                </Menu>
            </Container>
        </Header>
    );
}