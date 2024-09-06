import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box display="flex" justifyContent="center" m={2}>
      <TextField
        fullWidth
        variant="outlined"
        label="Wyszukaj przepis"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleSearch}
        sx={{
          backgroundColor: '#FFD700',
          color: 'black',
          marginLeft: 2,
          '&:hover': {
            backgroundColor: '#FFC107',
          },
        }}
      >
        Szukaj
      </Button>
    </Box>
  );
};

export default SearchBar;