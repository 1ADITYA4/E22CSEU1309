import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import TopUsers from './components/TopUsers';
import TrendingPosts from './components/TrendingPosts';
import Feed from './components/Feed';

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: '#1A1A1A' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ 
              flexGrow: 1,
              color: '#FFD700',
              fontWeight: 'bold',
              letterSpacing: '1px'
            }}>
              SOCIAL MEDIA ANALYTICS
            </Typography>
            <Button 
              color="inherit" 
              component={Link} 
              to="/"
              sx={{ 
                color: '#FFD700',
                '&:hover': {
                  bgcolor: 'rgba(255, 215, 0, 0.1)'
                }
              }}
            >
              Feed
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/top-users"
              sx={{ 
                color: '#FFD700',
                '&:hover': {
                  bgcolor: 'rgba(255, 215, 0, 0.1)'
                }
              }}
            >
              Top Users
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/trending"
              sx={{ 
                color: '#FFD700',
                '&:hover': {
                  bgcolor: 'rgba(255, 215, 0, 0.1)'
                }
              }}
            >
              Trending Posts
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/top-users" element={<TopUsers />} />
            <Route path="/trending" element={<TrendingPosts />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
