import { Container } from '@mui/material';
import NavBar from './NavBar.component';
import Feed from '../../components/Feed'

export default function MainPage() {
	
	return (
		<>
			<NavBar />
			<Container>
				<Feed />
			</Container>
		</>
	);
}
