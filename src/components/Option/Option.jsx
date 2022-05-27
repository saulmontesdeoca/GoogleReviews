import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	paddingTop: 42,
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height: '10rem',
	width: '100%',
	fontSize: '1.1rem',
  }));

const Option = ({title, item}) => {
    return (
        <Grid item xs={4}>
            <Button type="submit" sx={{width: '100%'}} aria-label="search">
                <Item>
                    <Grid item xs={12}>
                        {item}
                    </Grid>
                    <Grid item xs={12} sx={{paddingTop: 2}}>
                        {title}
                    </Grid>
                </Item>
            </Button>
        </Grid>
    );
};

export default Option;