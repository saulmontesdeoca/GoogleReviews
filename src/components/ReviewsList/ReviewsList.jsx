import React, { useEffect } from 'react';
import { Grid, List, Divider, Slider, Button } from '@mui/material';
import {Typography, Rating} from '@mui/material';
import { DialogContent, DialogContentText, TextField, Dialog, DialogActions, DialogTitle } from '@mui/material';
import ReviewsListItem from '../ReviewsListItem';
import { db } from '../../util/firebase_config';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const ReviewsList = (props) => {
    const [reviews, setReviews] = React.useState([]);
    const { reviewsIds } = props;
    const [rating, setRating] = React.useState(0);
    const [price, setPrice] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleSetPrice = (event, newValue) => {
        setPrice(newValue);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    function valuetext(value) {
		return `${value}`;
    }
    const marks = [
        {
            value: 0,
            label: '*',
        },
        {
            value: 1,
            label: '**',
        },
        {
            value: 2,
            label: '***',
        },
        {
            value: 3,
            label: '****',
        },
        {
            value: 4,
            label: '*****',
        },
        ];

    const getReviews = async (ids) => {
        const theIds = ids.map(id => id.id.substring(id.id.indexOf('/') + 1));
        const q = query(collection(db, "Reviews"), where("id","in", theIds));

        const querySnapshot = await getDocs(q);
        const allReviews = [];
        querySnapshot.forEach((doc) => {
            allReviews.push(doc.data());
        });
        console.log(allReviews);
        setReviews(allReviews);
    }

    useEffect(() => {
        getReviews(reviewsIds);
    }, []);
       
    return (
        <div>
            <Grid container spacing={3} sx={{mb: 3}}>
                <Grid item xs={3}>
                    <Slider
                            defaultValue={1}
                            getAriaValueText={valuetext}
                            step={1}
                            marks={marks}
                            min={0}
                            max={4}
                            valueLabelDisplay="auto"
                            />
                </Grid>
                <Grid item xs={7}/>
                <Grid item xs={2}>
                    <Button variant="outlined" onClick={handleClickOpen}>Add review</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Your review</DialogTitle>
                        <DialogContent style={{width: 400}}>
                            <DialogContentText>
                                How was your visit?
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="review"
                                label="What did you like/dislike?"
                                type="text"
                                fullWidth
                                multiline
                                rows={4}
                                variant="standard"
                            />
                            <div style={{textAlign:'center'}}>
                                <Typography component="legend" style={{color: '#535353', marginTop: 16}}>How'd you rate it?</Typography>
                                    <Rating
                                    name="simple-controlled"
                                    value={rating}
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                    }}
                                    />
                            </div>
                            <div style={{textAlign:'center', marginTop: 19}}>
                                <ToggleButtonGroup value={price} onChange={handleSetPrice} size="small" exclusive>
                                    <ToggleButton value={1} key="1">$</ToggleButton>
                                    <ToggleButton value={2} key="2">$$</ToggleButton>
                                    <ToggleButton value={3} key="3">$$$</ToggleButton>
                                    <ToggleButton value={4} key="4">$$$$</ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Add review</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
            <List dense sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                {reviews && reviews.map((review, index) => {
                    return (
                        <>
                            <ReviewsListItem index={index} review={review}/>
                            <Divider />
                        </>
                    );
                })
                }
            </List>
        </div>
    );
};

export default ReviewsList;