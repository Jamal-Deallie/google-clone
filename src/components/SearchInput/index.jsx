import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import {
  SearchBarSection,
  Search,
  StyledInputBase,
  SearchIconWrapper,
  Logo,
  Form,
  FormWrapper,
  SubmitBtn,
} from './styles';

export default function SearchInput({ handleClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  let [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = location;
  console.log(location);
  console.log(pathname);
  const query = useQuery();

  if (searchTerm) {
    const searchQuery = query.get('term');
  }

  const handleSearch = e => {};

  function searchProducts() {}
  function useQuery() {}

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <SearchBarSection>
      <FormWrapper>
        <Logo src='images/google-logo.svg' alt='Google Logo' />
        <Form onSubmit={handleSubmit} type='POST'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon
                color='primary.main'
                sx={{ fontSize: 25, color: 'secondary.main' }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search Google or type a url'
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
            />
            <SubmitBtn type='submit'></SubmitBtn>
          </Search>
        </Form>
      </FormWrapper>
    </SearchBarSection>
  );
}
