import { Tabs, Tab } from '@mui/material'

const TabsBar = ({ value, setValue }) => {
  const handleChange = (event, newValue) => setValue(newValue)

  return (
    <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary">
      <Tab label="Dashboard" />
      <Tab label="Site Info" />
      <Tab label="Anomalies" />
      <Tab label="Report" />
    </Tabs>
  )
}

export default TabsBar
