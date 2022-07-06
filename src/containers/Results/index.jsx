import { useEffect, useMemo } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useStateContext } from '../../contexts/StateContextProvider';
import { CustomAppBar } from '../../components';
import { Box } from '@mui/material';
import {
  LinkContainer,
  ResultsHeader,
  InnerContainer,
  NavOption,
} from './styles';

export default function ResultsContainer() {
  const { results, loading, getResults } = useStateContext();
  const location = useLocation();
  const searchTerm = useMemo(
    () => location.search.split('=').at(-1),
    [location]
  );

  console.log(searchTerm);

  useEffect(() => {
    let canSearch = Boolean(searchTerm);
    if (canSearch) {
      if (location.pathname === '/search') {
        getResults(`/search/q=${searchTerm}&num=40`);
      }
      if (location.pathname === '/image') {
        getResults(`/image/q=${searchTerm}&num=40`);
      }
      if (location.pathname === '/news') {
        getResults(`/news/q=${searchTerm}&num=40`);
      }
      if (location.pathname === '/news') {
        getResults(`/video/q=${searchTerm}&num=40`);
      }
    }
  }, []);

  console.log(results);
  console.log(loading);

  return (
    <Box>
      <ResultsHeader>
        <InnerContainer>
          <CustomAppBar />
          <LinkContainer>
            <NavOption
              to={`/search?term=${searchTerm}}`}
              $url='url(images/icons/active-search.svg)'>
              All
            </NavOption>

            <NavOption
              to={`/image?term=${searchTerm}`}
              $url='url(images/icons/active-images.svg)'>
              Images
            </NavOption>
            <NavOption
              to={`/news?term=${searchTerm}`}
              $url='url(images/icons/active-news.svg)'>
              News
            </NavOption>

            {/* <Icon src='images/icons/google_search.svg' alt='' /> */}
            <NavOption
              to={`/videos?term=${searchTerm}`}
              $url='url(images/icons/active-videos.svg)'>
              Video
            </NavOption>
          </LinkContainer>
        </InnerContainer>
      </ResultsHeader>
      <Outlet />
    </Box>
  );
}
