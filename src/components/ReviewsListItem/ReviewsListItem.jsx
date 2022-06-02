import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Avatar, Grid } from '@mui/material';
import { Image  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import SmsIcon from '@mui/icons-material/Sms';

const ReviewsListItem = (props) => {
    const { review, index } = props;

    return (
        <ListItem
            key={index}
            secondaryAction={true}
            disablePadding
            button
            component={ListItemButton}
            style={{ height: 130 }}
        >
                <Grid sx={{ width: '10%' }}>
                    <Grid sx={{ width: '100%', height:'100%', marginLeft: 3 }}>
                        <Avatar alt={review.userName} src="/static/images/avatar/1.jpg" style={{height: 84, width: 84}}/>
                    </Grid>
                </Grid>
                <Grid style={{marginLeft: 36, }} sx={{width: '60%'}}>
                    <Grid item xs={12} sm={6}>
                        <h3 style={{fontWeight: 'bolder', fontSize: 23, marginTop: 0, marginBottom: 0 }}>
                        {review.userName}
                        </h3>
                        <p style={{fontSize: 15, marginTop: 0, marginBottom: 0, color: '#505050' }}>
                             <span>Price: {review.Price && review.Price === 1 ? '$' : review.Price === 2 ? '$$' : review.Price === 3 ? '$$$' : '$$$$'}</span>
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <p style={{fontSize: 16, marginTop: 0, marginBottom: 0, color: '#505050', fontStyle:'italic' }}>
                        <SmsIcon fontSize="small" color="disabled" style={{paddingTop: 8}}/> {review.Review}
                        </p>
                    </Grid>
                </Grid>
                <Grid sx={{width: '20%'}}>
                    <Grid item sx={12} style={{marginBottom:34}}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                            <Box sx={{ ml: 2, color:'#505050', fontStyle: 'italic' }}>
                                {Date(review.createdAt * 1000).substring(0, 16)}
                                
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sx={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                            <Box sx={{ ml: 2, color:'#505050' }}>Rating:</Box>
                            <Rating name="read-only" value={review.Rating} readOnly precision={0.5} />
                            <Box sx={{ ml: 2, color:'#505050' }}>{review.Rating}</Box>
                        </Box>
                    </Grid>
                </Grid>
        </ListItem>
    )
}


export default ReviewsListItem;