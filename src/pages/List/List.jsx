import React from 'react';
import Layout from '../../components/Layout';
import List from '@mui/material/List';
import {Container} from '@mui/material';
import PlaceItemList from '../../components/PlaceItemList';
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const Lists = () => {
    const { element } = useParams();

    return (
        <Layout>
            {element}
            <Container>
                <List dense sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                    {[0, 1, 2, 3].map((value) => {
                        const labelId = `checkbox-list-secondary-label-${value}`;
                        return (
                            <>
                                <PlaceItemList value={value} labelId={labelId} />
                                <Divider />
                            </>
                        );
                    })}
                </List>
            </Container>
        </Layout>

    );
};

export default Lists;