import React from 'react';
import { Container } from '@mui/material';
import Layout from '../../components/Layout';
import CoverLocation from '../../components/CoverLocation';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../util/firebase_config';
import LocationInfo from '../../components/LocationInfo/LocationInfo';
import Helmet from 'react-helmet';

export default function Location(props) {
    const [location, setLocation] = React.useState({});
	const { uid, type } = useParams();
    const getLocation = async () => {
        const locationRef = doc(db, "Locations", uid);
        const locDoc = await getDoc(locationRef);
        if (locDoc.exists()) {
            setLocation(locDoc.data());
        }
    }


    useEffect(() => {
        getLocation(uid);
    }, []);

	return (
        <>
        	<Helmet>
				<title>{location && location.Name }</title>
			</Helmet>
		<Layout>
			<CoverLocation location={location} type={type}/>
			<Container>
                <LocationInfo location={location} />
			</Container>
		</Layout>
        </>
	);
}
