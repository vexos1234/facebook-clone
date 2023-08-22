'use client'
import axios from "axios";
import "./styles.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import dynamic from 'next/dynamic';
import { useState } from './client-side-import.js'
import { useEffect } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import InputWithButtons from "./InputWithButtons";
import InputWithButtonsPost from "./InputWithButtonsPost";

function formatDate(inputDate) {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August", "September",
        "October", "November", "December"
    ];

    const dateObj = new Date(inputDate);
    const day = dateObj.getUTCDate();
    const month = months[dateObj.getUTCMonth()];
    const year = dateObj.getUTCFullYear();
    const hours = dateObj.getUTCHours().toString().padStart(2, '0'); // Add leading zero if needed
    const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0'); // Add leading zero if needed

    const formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;
    return formattedDate;
}



const DynamicExpandMore = dynamic(() =>
    import('@mui/material/IconButton').then((module) => {
        const { default: IconButton } = module;
        const { styled } = require('@mui/material/styles'); // Import styled conditionally
        return styled(IconButton)(({ theme, expand }) => ({
            transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        }));
    })
);

export default function Cards() {
    const [expanded, setExpanded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [loadedPosts, setLoadedPosts] = useState(10);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {

        async function fetchPosts() {
            try {
                const response = await axios.get("https://rickandmortyapi.com/api/character");
                setPosts(response.data.results);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPosts();
    }, [])

    useEffect(() => {
        function handleScroll() {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
                setLoadedPosts(prevLoadedPosts => prevLoadedPosts + 10);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const maxPosts = loadedPosts;
    const limitedPosts = posts.slice(0, maxPosts);

    console.log(posts);
    return (
        <>

            <div className='card-container'>
                {posts.map((post) => (
                    <Card sx={{ marginBottom: '16px', background: '#242526', color: '#fefefe' }} key={post.id} >
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton
                                    sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                                    aria-label="settings"
                                >
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={
                                <span style={{ fontWeight: 'bold' }}>
                                    {post.name}
                                </span>
                            }
                            subheader={
                                <span style={{ color: 'white' }}>
                                    {formatDate(post.created)}
                                </span>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={post.image}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="white">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions className="card-buttons-container">
                            <IconButton aria-label="Like" className="card-buttons">
                                <ThumbUpIcon sx={{ '&:hover': { backgroundColor: 'transparent' } }} />
                                <Typography sx={{ marginLeft: '5px' }}>Like</Typography>
                            </IconButton>
                            <IconButton aria-label="Comments" className="card-buttons">
                                <ChatBubbleOutlineIcon />
                                <Typography sx={{ marginLeft: '5px' }}>Comment</Typography>
                            </IconButton>
                            <IconButton aria-label="Share" className="card-buttons">
                                <ShortcutIcon />
                                <Typography sx={{ marginLeft: '5px' }}>Share</Typography>
                            </IconButton>
                        </CardActions>
                        <InputWithButtons className='input-component-container' />
                        <DynamicExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <Typography sx={{ color: '#B0B3B8', marginLeft: '10px' }}>
                                View more comments
                            </Typography>
                        </DynamicExpandMore>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                    aside for 10 minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and
                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                    mussels, tucking them down into the rice, and cook again without
                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don&apos;t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>

                ))}
            </div>
        </>
    );
}