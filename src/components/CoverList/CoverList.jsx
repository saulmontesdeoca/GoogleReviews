import React from 'react';
import {IconButton} from '@mui/material';
import { Image } from 'react-bootstrap';
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
				top:'20%',
				width:'90%',
				alignSelf: 'center',
				left: 0,
				right: 0,
				marginLeft: 'auto',
				marginRight: 'auto' 
				}}>
					{props.title && props.title === 'things' ? 'things to do' : props.title} 
			</h1>
			<Image src={props.bg} fluid style={{height: 400, width: '100%', objectFit: 'cover'}}/>
		</div>
		</>
	);
}
