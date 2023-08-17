import React from 'react'
import axios from 'axios'
import { Button, ButtonGroup, Divider, Typography } from '@mui/material';

async function getUsers() {
    const { data } = await axios.get('https://dummyjson.com/users');
    const res = data.response;
    return res;
}

export default async function ContactList() {
    const users = await getUsers();

    console.log(users.firstName)

    if (users == undefined) {
        return 'loading';
    }
    return (
        <div>
            <ButtonGroup orientation='vertical'>
                <Typography>Birthday&apos;s:</Typography>
                {/* map users on birthday */}
                <Button>Juanito Alimania</Button>
                <Divider className='divider' />
                {/* map users and tell with a green indicator online or not */}
                {users.map((user) => {
                    <Button key={user.id}>{user.firstName}</Button>
                })}
            </ButtonGroup>
        </div>
    )
}
