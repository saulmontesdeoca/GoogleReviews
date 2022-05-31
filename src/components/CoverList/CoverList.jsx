import React from 'react';
import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {Button, IconButton} from '@mui/material';
import { Card, Image, Form, InputGroup  } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import DirectionsIcon from '@mui/icons-material/Directions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function CoverList(props) {
	return (
		<>
		<div style={{position: 'relative', marginBottom: 32, textAlign: 'center'}}>
			<Link to="/">
					<IconButton type="submit" sx={{ position: 'absolute', top:'20%', left: '5%', alignSelf: 'center', backgroundColor:'rgba(255,255,255,0.7)' }} aria-label="search">
						<ArrowBackIcon sx={{ fontSize: 40, color: 'black'}} />
					</IconButton>
			</Link>
			<h1 className='title-bolder' style={{ 
				color: 'rgba(255,255,255,1)',
				fontSize: '7rem',
				position: 'absolute',
				top:'10%',
				width:'90%',
				alignSelf: 'center',
				left: 0,
				right: 0,
				marginLeft: 'auto',
				marginRight: 'auto' 
				}}>
					{props.title}
			</h1>
			<Card style={{
					backgroundColor: 'rgba(255, 255, 255, 0)',
					position: 'absolute',
					top:'70%',
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
			<Image src={props.bg} fluid style={{height: 400, width: '100%', objectFit: 'cover'}}/>
		</div>
		</>
	);
}
