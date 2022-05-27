import React from 'react';
import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Card, Image, Form, InputGroup, Button  } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function Cover() {
	return (
		<>
		<div style={{position: 'relative', marginBottom: 32, textAlign: 'center'}}>
			<h1 className='title-bolder' style={{ 
				color: 'rgba(255,255,255,1)',
				fontSize: '7rem',
				position: 'absolute',
				top:'5%',
				width:'90%',
				alignSelf: 'center',
				left: 0,
				right: 0,
				marginLeft: 'auto',
				marginRight: 'auto' 
				}}>
					What'd you like to do?
			</h1>
			<Card style={{
					backgroundColor: 'rgba(255, 255, 255, 0)',
					position: 'absolute',
					top:'60%',
					width:'30%',
					alignSelf: 'center',
					left: 0,
					right: 0,
					marginLeft: 'auto',
					marginRight: 'auto'
			}}>
				<Card.Body style={{fontSize: 24, textAlign: 'center', fontWeight: 'bolder'}}>
					<Paper
						component="form"
						sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
						>
						<IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
							<SearchIcon />
						</IconButton>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							placeholder="Search Google Reviews"
							inputProps={{ 'aria-label': 'search google maps' }}
						/>
					</Paper>
				</Card.Body>
			</Card>
			<Image src='/images/mexico_city.jpeg' fluid style={{height: 450, width: '100%', objectFit: 'cover'}}/>
		</div>
		</>
	);
}
