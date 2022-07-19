import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  SearchBarSection,
  Search,
  StyledInputBase,
  SearchIconWrapper,
  Form,
  ButtonContainer,
  CustomButton,
} from './styles';
import { Button } from '@mui/material';

export default function SearchInput({ display }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const dark = true;

  const { pathname } = location;
  console.log(location);
  console.log(pathname);

  const handleSearch = e => {
    const query = e.target.value.replaceAll(' ', '+');
    setSearchTerm(query);
  };

  function handleSubmit(e) {
    e.preventDefault();
    //set search

    navigate(`/search?term=${searchTerm}`);
    setSearchTerm('');
    //navigate to search page
  }
  return (
    <SearchBarSection>
      <Form onSubmit={handleSubmit} type='POST'>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ fontSize: 33, color: 'tertiary.main' }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search Google'
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearch}
          />
        </Search>

        <ButtonContainer $display={display}>
          <Button variant='secondary'>Google Search</Button>
          <Button variant='secondary'>I'm Feeling Lucky</Button>
        </ButtonContainer>
      </Form>
    </SearchBarSection>
  );
}
