import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';

const PlaceItemList = (props) => {
    return (
        <ListItem
            key={props.value}
            secondaryAction={true}
            disablePadding
        >
            <ListItemButton>
                <Grid sx={{ width: '10%' }}>
                    <Grid sx={{ width: '100%' }}>
                        <ListItemAvatar>
                                <Avatar
                                alt={`Avatar n°${props.value + 1}`}
                                src={`/static/images/avatar/${props.value + 1}.jpg`}
                                />
                        </ListItemAvatar>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid item xs={12} sm={6}>
                        <ListItemAvatar>
                            <Avatar
                            alt={`Avatar n°${props.value + 1}`}
                            src={`/static/images/avatar/${props.value + 1}.jpg`}
                            />
                        </ListItemAvatar>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ListItemText id={props.labelId} primary={`Line item ${props.value + 1}`} />
                    </Grid>
                </Grid>

            </ListItemButton>
        </ListItem>
    );
};

export default PlaceItemList;