import React from 'react';
import NavbarTop from '../components/NavbarTop';
import NavbarLeft from '../components/NavbarLeft';
import ContactList from '../components/ContactList';
import { Grid, Stack } from '@mui/material';
import './styles.css'

export default function homepage({ users }) {
    return (
        <>
            <NavbarTop />
            <Grid container className='grid-container'>
                <Grid item xs={3}>
                    <NavbarLeft />
                </Grid>
                <Grid item xs={6}>

                    <h1>content</h1>

                </Grid>
                <Grid item xs={3}>
                    <ContactList />
                </Grid>
            </Grid>

        </>
    );
}