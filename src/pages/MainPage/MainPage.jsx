import { Container } from '@mui/material';
import Layout from '../../components/Layout';
import Cover from '../../components/Cover';
import Options from '../../components/Options';

export default function MainPage() {
	
	return (
		<Layout>
			<Cover />
			<Container>
				<Options />
			</Container>
		</Layout>
	);
}
