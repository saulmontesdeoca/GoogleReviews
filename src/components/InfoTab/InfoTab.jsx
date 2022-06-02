import React from 'react';
import { Rating } from '@mui/material'; 
import { Chip, Stack } from '@mui/material';

const InfoTab = (props) => {
    const { location } = props;

    return (
        <>
            <h3>Address:</h3>
            <div>
                <span style={{fontSize: 24}}>{location.Address}, {location.Suburb}, {location.City}</span>
            </div>
            <h3>Total rating:</h3>
            <div style={{display: 'flex'}}>
                <p style={{fontSize: 28, margin: 0}}>{location.Rating}</p>
                <Rating style={{paddingTop: 4, paddingLeft: 8}} name="size-large" defaultValue={4} value={location.Rating} size="large" readOnly precision={0.5} controlled/>
            </div>
            <h3>Price:</h3>
            <div>
                <span style={{fontSize: 24, fontWeight: 'bolder'}}>{location.Price && location.Price === 1 ? '$' : location.Price === 2 ? '$$' : location.Price === 3 ? '$$$' : '$$$$'}</span>
            </div>
            <h3>Type:</h3>
            <div style={{fontSize: 24}}>
            <Stack direction="row" spacing={1}>
                
                {location.Type &&location.Type.map((type, index) => {
                    return (
                        <Chip style={{fontSize: 24, height: 42, width: 132}} label={type} color={type === 'dinner' ? 'primary': type === 'lunch' && 'success'} />
                    )
                })}
            </Stack>

            </div>
        </>
    );
};

export default InfoTab;