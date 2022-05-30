import { useCallback, useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Menu, Avatar, Tooltip, MenuItem, IconButton } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../../util/firebase_config';


export default function NavBar() {
	const logOut = useCallback(() => {
		signOut(auth);
	}, []);
	const settings = ['Profile', 'Account', 'Logout'];
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
					<Button onClick={logOut} color='inherit'>Log Out</Button>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
						</IconButton>
						</Tooltip>
						<Menu
						sx={{ mt: '45px' }}
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
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={handleCloseUserMenu}>
							<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
