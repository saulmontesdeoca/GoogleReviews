import { Container } from '@mui/material';
import Layout from '../../components/Layout';
import Cover from '../../components/Cover';
import Options from '../../components/Options';
import Helmet from 'react-helmet';

export default function MainPage() {
	
	return (
		<>
			<Helmet>
				<title>GoogleReviews</title>
			</Helmet>
		<Layout>
			<Cover />
			<Container>
				<Options />
			</Container>
		</Layout>
		</>
	);
}
