import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TabsBar from "../components/TabsBar";
import DashboardTab from "../components/DashboardTab";
import { Box, Toolbar } from "@mui/material";
import SiteInfoTab from "../components/SiteInfoTab";
import AnomaliesTab from "../components/AnomaliesTab";
import ReportTab from "../components/ReportTab";
import Footer from '../components/Footer';

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#fafafa",
          minHeight: "100vh",
        }}
      >
        <Toolbar />

        {/* Top Tabs */}
        <TabsBar value={tabIndex} setValue={setTabIndex} />

        {/* Render content based on tab */}
        <Box sx={{ mt: 4 }}>
          {tabIndex === 0 && <DashboardTab />}
          {tabIndex === 1 && <SiteInfoTab />}
          {tabIndex === 2 && <AnomaliesTab />}
          {tabIndex === 3 && <ReportTab />}
        </Box>
         <Footer />
      </Box>
    </Box>
  );
};

export default Dashboard;
