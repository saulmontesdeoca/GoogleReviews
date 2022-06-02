import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import List from '@mui/material/List';
import {Container, Slider, Grid, FormGroup, FormControlLabel, Switch, ToggleButtonGroup, ToggleButton} from '@mui/material';
import PlaceItemList from '../../components/PlaceItemList';
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import CoverList from '../../components/CoverList';
import { db } from '../../util/firebase_config';
import { getDocs, query, collection, where } from 'firebase/firestore';
import Helmet from 'react-helmet';

const Lists = () => {
    const { element } = useParams();
    const [locations, setLocations] = React.useState([]);
    const [onlyOpen, setOnlyOpen] = React.useState(true);
    const [orderValue, setOrderValue] = React.useState(0);
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
        });
        setLocations(allLocations);
    }

    const order = (event, newValue) => {
        setOrderValue(newValue);
        switch(newValue){
            case 0:
                setLocations(locations.sort((a, b) => (a.Rating < b.Rating) ? 1 : -1));
                break;
            case 1:
                setLocations(locations.sort((a, b) => (a.Price < b.Price) ? 1 : -1));
                break;
            default:
                setLocations(locations.sort((a, b) => (a.Rating < b.Rating) ? 1 : -1));
                break;
        }
    }

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <>
        <Helmet>
            <title>{element && element }</title>
        </Helmet>
        <Layout>
            <CoverList title={element} bg={`/images/${element}.jpeg`}/>
            <Container>
                <Grid container spacing={3} sx={{mb: 3 }}  style={{textAlign: 'center'}}>
                    <Grid item xs={4}>
                        <ToggleButtonGroup value={orderValue} onChange={order} size="small" exclusive>
                            <ToggleButton value={0} key="0"> Rating </ToggleButton>
                            <ToggleButton value={1} key="1"> $ Price </ToggleButton>
                            <ToggleButton value={2} key="2"> Distance </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={3} style={{textAlign: 'center'}}>
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
                    <Grid item xs={2} />
                    <Grid item xs={2} >
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
                </List>
            </Container>
        </Layout>
        </>
    );
};

export default Lists;