import { Avatar, Grid, Icon, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import './styles.css'
import { Bars } from '../icons/Bars'
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Bell from '../icons/Bell'
import Menu from '../icons/Menu'


const ovalInputStyle = {
    borderRadius: '30px', // Adjust this value to change the oval shape
    overflow: 'hidden',
    width: '240px',
    height: '40px',
};


export default function NavbarTop() {
    const iconSize = 28; // Icon dimensions

    return (
        <div className='navbar-container'>
            <Grid container spacing={10} className='grid-container'>
                <Grid item xs={3} className='left'>
                    <Stack direction='row' spacing={2}>
                        <Avatar
                            className='clickable-icon'
                            src="../favicon.ico"
                            alt="Scales of Justice Brand Image"
                            sx={{ width: 40, height: 40 }}
                        />
                        <div sx={ovalInputStyle}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                size="small"
                                placeholder="Oval Input"
                                sx={{
                                    backgroundColor: '#3A3B3C', // Background color of the input
                                    borderRadius: '30px',
                                }}
                            />
                        </div>
                    </Stack>
                </Grid>
                <Grid item xs={6} className='center-grid'>
                    <Stack direction='row' spacing={11} >
                        <HomeIcon className='clickable-icon' sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />
                        <OndemandVideoIcon className='clickable-icon' sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />
                        <StorefrontIcon className='clickable-icon' sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />
                        <GroupIcon className='clickable-icon' sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />
                        <VideogameAssetIcon className='clickable-icon' sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />
                    </Stack>
                </Grid>
                <Grid item xs={3} className='right'>
                    <Stack direction='row' spacing={3}>
                        <Menu />

                        {/* message icon */}
                        <Bars />

                        <Bell />


                        <Avatar
                            className='clickable-icon'
                            src="../favicon.ico"
                            alt="Scales of Justice Brand Image"
                            sx={{ width: 28, height: 28 }}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}
