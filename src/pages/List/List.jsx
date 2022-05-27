import React from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';

const List = () => {
    const { element } = useParams();

    return (
        <Layout>
            {element}
        </Layout>
    );
};

export default List;