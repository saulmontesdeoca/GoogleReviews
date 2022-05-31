import { useCallback, useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Menu, Avatar, Tooltip, MenuItem, IconButton } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../../util/firebase_config';
import { Link } from 'react-router-dom';
import useApp from '../../hooks/userApp.hook';

export default function NavBar() {
	const { currentUser } = useApp();
	const handleLogout = useCallback(() => {
		signOut(auth);
	}, []);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenUserMenu = (event) => {
	setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
	setAnchorElUser(null);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed' style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						<img src="/images/googlereviews-nobg.png" alt="logo" style={{height: 25, marginTop: 10}}/>
					</Typography>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt={currentUser && currentUser.displayName} src={currentUser ? currentUser.photoURL : ''} />
						</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px'}}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
							>
							<Link to='profile' style={{ textDecoration: 'none', color: 'inherit' }}>
								<MenuItem key={'profile'} >
									<Typography textAlign="center">Profile</Typography>
								</MenuItem>
							</Link>
							<MenuItem key={'signOut'} onClick={handleLogout}>
								<Typography textAlign="center">Logout</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
