import React, { useEffect } from 'react';
import { Grid, List, Divider, Slider, Button } from '@mui/material';
import {Typography, Rating} from '@mui/material';
import { DialogContent, DialogContentText, TextField, Dialog, DialogActions, DialogTitle } from '@mui/material';
import ReviewsListItem from '../ReviewsListItem';
import { db } from '../../util/firebase_config';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import {auth} from '../../util/firebase_config';
import { v4 as uuidv4 } from 'uuid';
import {doc, setDoc, updateDoc, arrayUnion} from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ReviewsList = (props) => {
    const [reviews, setReviews] = React.useState([]);
    const { reviewsIds } = props;
    const [revIds, setRevIds] = React.useState(reviewsIds);
    const { uid } = useParams();
    const [rating, setRating] = React.useState(0);
    const [price, setPrice] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState('');
    const [orderValue, setOrderValue] = React.useState(0);
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleSetPrice = (event, newValue) => {
        setPrice(newValue);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const handleAddReview = async () => {
        const review = {
            Rating: rating,
            Price: price,
            Review: text,
            userName: auth.currentUser.displayName.split(' ')[0] + ' ' + auth.currentUser.displayName.split(' ')[1][0],
            Photos: [],
            createdAt: Math.round((new Date()).getTime() / 1000),
            id: uuidv4(),
            idUser: auth.currentUser.uid,
        }
        await setDoc(doc(db, "Reviews", review.id), review);
        await updateDoc(doc(db, "Users", auth.currentUser.uid), {reviews: arrayUnion(review.id)});
        await updateDoc(doc(db, "Locations", uid), {Reviews: arrayUnion(review.id)});
        updateReviewsIds(review.id);
        handleClose();
    }


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
        const q = query(collection(db, "Reviews"), where("id","in", ids));

        const querySnapshot = await getDocs(q);
        const allReviews = [];
        querySnapshot.forEach((doc) => {
            allReviews.push(doc.data());
        });
        // sort reviews by Rating
        allReviews.sort((a, b) => (a.Rating < b.Rating) ? 1 : -1);
        setReviews(allReviews);
    }

    const updateReviewsIds = (id) => {
        setRevIds(reviewsIds.concat(id));
    }

    useEffect(() => {
        getReviews(revIds);
    }, [revIds]);

    const order = (event, orderBy) =>{
        setOrderValue(orderBy);
        switch(orderBy){
            case 0:
                setReviews(reviews.sort((a, b) => (a.Rating < b.Rating) ? 1 : -1));
                break;
            case 1:
                setReviews(reviews.sort((a, b) => (a.Price < b.Price) ? 1 : -1));
                break;
            case 2:
                setReviews(reviews.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1));
                break;
            default:
                setReviews(reviews.sort((a, b) => (a.Rating < b.Rating) ? 1 : -1));
                break;
        }
    }
       
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
                <Grid item xs={7} style={{textAlign: 'center'}}>
                    <ToggleButtonGroup value={orderValue} onChange={order} size="small" exclusive>
                        <ToggleButton value={1} key="1"> $ Price </ToggleButton>
                        <ToggleButton value={0} key="2"> Rating </ToggleButton>
                        <ToggleButton value={2} key="3"> Most Recent </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
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
                                value={text}
                                onChange={(e) => setText(e.target.value)}
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
                        <Button onClick={handleAddReview}>Add review</Button>
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