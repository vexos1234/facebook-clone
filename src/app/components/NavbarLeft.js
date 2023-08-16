import { ButtonGroup, Button } from '@mui/material'
import React from 'react'

export default function NavbarLeft() {
    return (
        <div className='container-left'>
            <ButtonGroup
                orientation="vertical"
                className='button-group-container'
            >
                <Button variant="text" className='button'>Name</Button>
                <Button variant="text" className='button'>Friends</Button>
                <Button variant="text" className='button'>Feeds</Button>
                <Button variant="text" className='button'>Memories</Button>
                <Button variant="text" className='button'>Saved</Button>
                <Button variant="text" className='button'>Groups</Button>
                <Button variant="text" className='button'>Video</Button>
                <Button variant="text" className='button'>Marketplace</Button>
                <Button variant="text" className='button'>Events</Button>
                <Button variant="text" className='button'>Ads Manager</Button>
                <Button variant="text" className='button'></Button>

            </ButtonGroup>
        </div>
    )
}
