import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Galeria from '../Gallery';
import ReviewsList from '../ReviewsList';
import InfoTab from '../InfoTab';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const LocationInfo = (props) => {
    const { location } = props;
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Info" />
                <Tab label="Reviews" />
                <Tab label="Photos" />
            </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <InfoTab location={location}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ReviewsList reviewsIds={location.Reviews}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Galeria images={location.Photos}/>
            </TabPanel>
        </div>
    );
};

export default LocationInfo;