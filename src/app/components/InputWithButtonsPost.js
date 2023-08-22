import React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EmojiIcon from '@mui/icons-material/EmojiEmotions';
import PhotoIcon from '@mui/icons-material/Photo';
import GifIcon from '@mui/icons-material/Gif';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import "./styles.css";

function InputWithButtonsPost() {

    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <div className='input-with-buttons'>
            <Avatar sx={{ bgcolor: 'red', marginRight: '5px' }}>A</Avatar>
            <div className='input'>
                <div className='input-container'>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder='Write a comment...'
                        focused={true}
                        sx={{
                            display: 'flex',
                            width: '320px',
                            height: '40px',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px',
                            },
                            '& .MuiInputLabel-root': {
                                // Adjust label styles if needed
                            },
                        }}
                    />
                </div>
                <IconButton>
                    <EmojiIcon />
                </IconButton>
                <IconButton>
                    <PhotoIcon />
                </IconButton>
                <IconButton>
                    <GifIcon />
                </IconButton>
                <IconButton>
                    <StickyNote2Icon />
                </IconButton>
            </div>

        </div>
    );
}

export default InputWithButtonsPost;
