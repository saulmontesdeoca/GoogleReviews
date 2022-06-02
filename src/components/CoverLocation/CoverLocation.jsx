import React from 'react';
import {IconButton} from '@mui/material';
import { Image } from 'react-bootstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function CoverList(props) {
    const { type, location } = props;
	return (
		<>
		<div style={{position: 'relative', marginBottom: 32, textAlign: 'center'}}>
			<Link to={`/list/${type}`}>
					<IconButton onClick={() => {}} sx={{ position: 'absolute', top:'20%', left: '5%', alignSelf: 'center', backgroundColor:'rgba(255,255,255,0.7)' }} aria-label="search">
						<ArrowBackIcon sx={{ fontSize: 40, color: 'black'}} />
					</IconButton>
			</Link>
			<h1 className='title-bolder' style={{ 
				color: 'rgba(255,255,255,1)',
				fontSize: '6rem',
				position: 'absolute',
				top:'40%',
				alignSelf: 'center',
				left: 84,
				}}>
					{location.Name} 
			</h1>
			<Image src={location.MainPhoto} fluid style={{height: 400, width: '100%', objectFit: 'cover'}}/>
		</div>
		</>
	);
}
