import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Grid } from '@mui/material';
import { Image  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import SmsIcon from '@mui/icons-material/Sms';

const PlaceItemList = (props) => {
    const { location, type } = props;

    return (
        <Link to={`/location/${type}/${location.uid}`} style={{textDecoration: 'none', color:'inherit'}}>
        <ListItem
            key={props.index}
            secondaryAction={true}
            disablePadding
            button
            component={ListItemButton}
            style={{ height: 170 }}
        >
                <Grid sx={{ width: '10%' }}>
                    <Grid sx={{ width: '100%', height:'100%' }}>
                        <Image src={location.MainPhoto} fluid style={{height: 100, width: '100%', objectFit: 'cover', borderRadius:'15%'}}/>
                    </Grid>
                </Grid>
                <Grid style={{marginLeft: 42, height: '80%'}} sx={{width: '75%'}}>
                    <Grid item xs={12} sm={6}>
                        <h3 style={{fontWeight: 'bolder', fontSize: 23, marginTop: 12, marginBottom: 8 }}>
                        {`${props.index+1}. ${location.Name}`}
                        </h3>
                        <p style={{fontSize: 16, marginTop: 0, marginBottom: 0, color: '#505050' }}>
                            {location.Type.map((type, index) => {
                                return (
                                    <span key={index}>{type}{location.Type && index+1 !== location.Type.length && ',' } </span>
                                )
                            })} | <span>{location.Price && location.Price === 1 ? '$' : location.Price === 2 ? '$$' : location.Price === 3 ? '$$$' : '$$$$'}</span>
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <p style={{fontSize: 16, marginTop: 0, marginBottom: 0, color: '#505050'}}>
                        <LocationOnIcon fontSize="small" color="disabled" style={{paddingTop: 8}}/> {location.Suburb}
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <p style={{fontSize: 16, marginTop: 0, marginBottom: 0, color: '#505050', fontStyle:'italic' }}>
                        <SmsIcon fontSize="small" color="disabled" style={{paddingTop: 8}}/> "Get the steak!"
                        </p>
                    </Grid>
                </Grid>
                <Grid sx={{width: '15%'}}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    >
                    <Rating name="read-only" value={location.Rating} readOnly precision={0.5} />
                    <Box sx={{ ml: 2, color:'#505050' }}>{location.Rating}</Box>
                </Box>
                </Grid>
        </ListItem>
        </Link>
    );
};

export default PlaceItemList;