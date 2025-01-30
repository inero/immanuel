import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Grid,
    GridColumn,
    GridRow,
    Menu,
    MenuItem,
    Header,
    IconGroup,
    Icon,
    List,
    ListItem,
    ListContent,
    Image,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    ListDescription,
} from 'semantic-ui-react';
import './Navigation.css';
import avatar from '../../assets/images/immanuel.JPG';

export const Navigation = () => {
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <>
            <Grid padded>
                <GridRow stretched centered>
                    <GridColumn mobile={16} tablet={12} computer={12}>
                        <Menu stackable secondary inverted>
                            <MenuItem>
                                <Header as='h1'>
                                    <IconGroup size='large'>
                                        <Icon name='code' />
                                    </IconGroup>
                                    <a>Immanuel</a>
                                </Header>
                            </MenuItem>
                            <MenuItem position='right' name='about' onClick={handleItemClick}>
                                <NavLink to="/about">
                                    <List horizontal relaxed='very'>
                                        <ListItem>
                                            <Image size="tiny" avatar src={avatar} />
                                            <ListContent className="profile-name">
                                                <b>IMMANUEL KIRUBAHARAN</b>
                                                <ListDescription>
                                                    <a href="mailto:uneedimman@gmail.com">uneedimman@gmail.com</a>
                                                    <br/>+91 9986877689
                                                </ListDescription>
                                            </ListContent>
                                        </ListItem>
                                    </List>
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </GridColumn>
                </GridRow>
            </Grid>
            <Grid padded>
                <GridRow centered className="nav-row">
                    <GridColumn mobile={16} tablet={12} computer={12}>
                        <Menu stackable inverted className="menu-color">
                            <NavLink to="/immanuel">
                                <MenuItem name='home' active={activeItem === 'home'} onClick={handleItemClick}>
                                    Home
                                </MenuItem>
                            </NavLink>
                            {/* <NavLink to="/blog">
                                <MenuItem name='blog' active={activeItem === 'blog'} onClick={handleItemClick} >
                                    Blog
                                </MenuItem>
                            </NavLink> */}
                            <NavLink to="/about">
                                <MenuItem name='about' active={activeItem === 'about'} onClick={handleItemClick} >
                                    About
                                </MenuItem>
                            </NavLink>
                            <Dropdown item text='More'>
                                <DropdownMenu className="menu-color">
                                    <NavLink to="/emi">
                                        <DropdownItem active={activeItem === 'emi'} onClick={handleItemClick} icon='edit' text='EMI Calculator' />
                                    </NavLink>
                                    <NavLink to="/percentage">
                                        <DropdownItem active={activeItem === 'percentage'} onClick={handleItemClick} icon='globe' text='Interest Calculator' />
                                    </NavLink>
                                </DropdownMenu>
                            </Dropdown>
                        </Menu>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default Navigation;