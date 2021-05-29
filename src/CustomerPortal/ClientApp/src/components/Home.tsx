import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Customers } from '../repository/Customer.Repository';
import { chromeTabsStylesHook } from '@mui-treasury/styles/tabs';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.tabpanel}
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabpanel: {
    border: "1px black",
    backgroundColor: "#f7f7f9",
  },
}));

export function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    setTabIndex(newValue);
  };

  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = chromeTabsStylesHook.useTabs();
  const tabItemStyles = chromeTabsStylesHook.useTabItem();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
      <Tabs
          classes={tabsStyles}
          value={tabIndex}
          onChange={handleChange}
        >
          <Tab classes={tabItemStyles} label="Customers" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Customers />
      </TabPanel>


    </div>
  );
}