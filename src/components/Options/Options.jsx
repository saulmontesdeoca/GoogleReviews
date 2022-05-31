import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CoffeeIcon from '@mui/icons-material/Coffee';
import EggAltIcon from '@mui/icons-material/EggAlt';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router-dom';
import { auth } from '../../util/firebase_config';

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

const Options = () => {
    return (
		<Box sx={{width: '100%', marginBottom: 10}}>
			<Grid container spacing={{ xs: 2, md: 3 }}>
				<Grid item xs={4}>
					<Link to="/list/breakfast"  style={{textDecoration: 'none'}}>
						<Button type="submit" sx={{width: '100%'}} aria-label="search">
							<Item>
								<Grid item xs={12}>
									<EggAltIcon sx={{fontSize: 64}}/>
								</Grid>
								<Grid item xs={12} sx={{paddingTop: 2}}>
									Breakfast
								</Grid>
							</Item>
						</Button>
					</Link>
				</Grid>
				<Grid item xs={4}>
					<Link to="/list/lunch"  style={{textDecoration: 'none'}}>
						<Button type="submit" sx={{width: '100%'}} aria-label="search">
							<Item>
								<Grid item xs={12}>
									<LunchDiningIcon sx={{fontSize: 64}}/>
								</Grid>
								<Grid item xs={12} sx={{paddingTop: 2}}>
									Lunch
								</Grid>
							</Item>
						</Button>
					</Link>
				</Grid>
				<Grid item xs={4}>
					<Link to="/list/dinner"  style={{textDecoration: 'none'}}>
						<Button type="submit" sx={{width: '100%'}} aria-label="search">
							<Item>
								<Grid item xs={12}>
									<DinnerDiningIcon sx={{fontSize: 64}}/>
								</Grid>
								<Grid item xs={12} sx={{paddingTop: 2}}>
									Dinner
								</Grid>
							</Item>
						</Button>
					</Link>
				</Grid>
				<Grid item xs={4}>
					<Link to="/list/coffee"  style={{textDecoration: 'none'}}>
						<Button type="submit" sx={{width: '100%'}} aria-label="search">
							<Item>
								<Grid item xs={12}>
									<CoffeeIcon sx={{fontSize: 64}}/>
								</Grid>
								<Grid item xs={12} sx={{paddingTop: 2}}>
									Coffee & Tea
								</Grid>
							</Item>
						</Button>
					</Link>
				</Grid>
				<Grid item xs={4}>
					<Link to="/list/nightlife"  style={{textDecoration: 'none'}}>
						<Button type="submit" sx={{width: '100%'}} aria-label="search">
							<Item>
								<Grid item xs={12}>
									<SportsBarIcon sx={{fontSize: 64}}/>
								</Grid>
								<Grid item xs={12} sx={{paddingTop: 2}}>
									Nightlife
								</Grid>
							</Item>
						</Button>
					</Link>
				</Grid>
				<Grid item xs={4}>
					<Link to="/list/things"  style={{textDecoration: 'none'}}>
						<Button type="submit" sx={{width: '100%'}} aria-label="search">
							<Item>
								<Grid item xs={12}>
									<AccountBalanceIcon sx={{fontSize: 64}}/>
								</Grid>
								<Grid item xs={12} sx={{paddingTop: 2}}>
									Things to do
								</Grid>
							</Item>
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Box>
    );
};

export default Options;