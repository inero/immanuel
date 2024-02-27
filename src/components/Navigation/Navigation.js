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
} from 'semantic-ui-react';
import './Navigation.css';
import avatar from '../../assets/images/profile.jpg';

export const Navigation = () => {
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <>
            <Grid padded>
                <GridRow stretched>
                    <GridColumn width={1}></GridColumn>
                    <GridColumn width={14}>
                        <Menu secondary inverted>
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
                                            <Image size="mini" avatar src={avatar} />
                                            <ListContent className="profile-name">
                                                IMMANUEL KIRUBAHARAN
                                            </ListContent>
                                        </ListItem>
                                    </List>
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </GridColumn>
                    <GridColumn width={1}></GridColumn>
                </GridRow>
            </Grid>
            <Grid padded>
                <GridRow className="nav-row">
                    <GridColumn width={2}></GridColumn>
                    <GridColumn width={12}>
                        <Menu inverted className="menu-color">
                            <NavLink to="/">
                                <MenuItem name='home' active={activeItem === 'home'} onClick={handleItemClick}>
                                    Home
                                </MenuItem>
                            </NavLink>
                            <NavLink to="/blog">
                                <MenuItem name='blog' active={activeItem === 'blog'} onClick={handleItemClick} >
                                    Blog
                                </MenuItem>
                            </NavLink>
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
                    <GridColumn width={2}></GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default Navigation;