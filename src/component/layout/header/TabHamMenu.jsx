import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";


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
        <Box sx={{width:"100%",height:"51px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabHamMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <Tabs
          className="tab-edit"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{height:"56px",width:"100%"}}
        >
          <Tab className="tab-edit" label="کتگوری" {...a11yProps(0)} />
          <Tab className="tab-edit" label="منو" {...a11yProps(1)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
      <div className="flex items-center py-[5px] px-[20px] h-[50px] border-b text-[13px]">
        <img src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/08/cases.svg" alt="" className="object-cover ml-[5px]"/>
        <p>قاب</p> 
      </div>
      <div className="flex items-center py-[5px] px-[20px] h-[50px] border-b text-[13px]">
        <img src="https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/08/cases.svg" alt="" className="object-cover ml-[5px]"/>
        <p>قاب</p> 
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="flex items-center py-[5px] px-[20px] h-[50px] border-b text-[13px]">
        <p>قاب</p> 
      </div>
      <div className="flex items-center py-[5px] px-[20px] h-[50px] border-b text-[13px]">
        <p>ماب</p> 
      </div>
      </TabPanel>
    </div>
  );
}
