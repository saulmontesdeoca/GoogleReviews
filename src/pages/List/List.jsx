import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import List from '@mui/material/List';
import {Container, Slider, Grid, FormGroup, FormControlLabel, Switch} from '@mui/material';
import PlaceItemList from '../../components/PlaceItemList';
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import CoverList from '../../components/CoverList';
import { db } from '../../util/firebase_config';
import { getDocs, query, collection, where } from 'firebase/firestore';

const Lists = () => {
    const { element } = useParams();
    const [locations, setLocations] = React.useState([]);
    const [onlyOpen, setOnlyOpen] = React.useState(true);

    function valuetext(value) {
		return `${value}$`;
    }

    const marks = [
    {
        value: 0,
        label: '$',
    },
    {
        value: 1,
        label: '$$',
    },
    {
        value: 2,
        label: '$$$',
    },
    {
        value: 3,
        label: '$$$$',
    },
    ];
    // get places from firestore
    const getLocations = async () => {
        const q = query(collection(db, "Locations"), where("Type","array-contains", element));

        const querySnapshot = await getDocs(q);
        const allLocations = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          allLocations.push(doc.data());
          allLocations.push(doc.data());
          allLocations.push(doc.data());
        });
        setLocations(allLocations);
    }

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <Layout>
            <CoverList title={element} bg={`/images/${element}.jpeg`}/>
            <Container>
                <Grid container spacing={3} sx={{mb: 3 }}>
                    <Grid item xs={3}>
                        <Slider
                                aria-label="Small steps"
                                defaultValue={1}
                                getAriaValueText={valuetext}
                                step={1}
                                marks={marks}
                                min={0}
                                max={3}
                                valueLabelDisplay="auto"
                                />
                    </Grid>
                    <Grid item xs={3}>
                        <FormGroup>
                            <FormControlLabel  control={<Switch defaultChecked onChange={()=>setOnlyOpen(false)}/>} label="Opened Now" />
                        </FormGroup>
                    </Grid>
                </Grid>
                <List dense sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                    {locations && locations.map((location, index) => {
                        return (
                            <>
                                <PlaceItemList index={index} location={location} type={element}/>
                                <Divider />
                            </>
                        );
                    })
                    }
                    {locations && JSON.stringify(locations) }
                </List>
            </Container>
        </Layout>

    );
};

export default Lists;