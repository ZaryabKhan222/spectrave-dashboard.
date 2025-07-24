import { Drawer, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 220,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 220, boxSizing: 'border-box', backgroundColor: '#fef9c3' }
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Spectrave
        </Typography>
      </Toolbar>
      <List>
        <ListItem button onClick={() => navigate('/dashboard')}>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar
