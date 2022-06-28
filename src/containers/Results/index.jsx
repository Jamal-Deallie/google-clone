import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../contexts/StateContextProvider';
import {
  CustomLoader,
  VideoResults,
  NewsResults,
  ImagesResults,
  SearchResults,
} from '../../components';
import ReactPlayer from 'react-player';
import { Box, Typography, Link, Tab, Tabs } from '@mui/material';

export default function ResultsContainer() {
  const { results, loading, getResults } = useStateContext();
  const searchTerm = 'elon+musk';
  const location = useLocation();
  const pathname = '/search';

  useEffect(() => {
    if (searchTerm !== '') {
      if (pathname === '/search') {
        getResults(`/search/q=${searchTerm}&num=100`);
      }
    }
  }, [searchTerm, pathname]);

  console.log(results);
  const [index, setIndex] = useState(0);
  const onTabClicked = (event, index) => {
    setIndex(index);
  };
  const Panel = props => (
    <div hidden={props.value !== props.index}>
      <div>{props.children}</div>
    </div>
  );
  return (
    <Box>
      <Box>
        <Tabs value={index} onChange={onTabClicked}>
          <Tab label='All' />
          <Tab label='News' />
          <Tab label='Images' />
          <Tab label='Videos' />
        </Tabs>
      </Box>
      <Panel value={index} index={0}>
        <SearchResults />
      </Panel>
      <Panel value={index} index={1}>
        <NewsResults />
      </Panel>
      <Panel value={index} index={2}>
        <ImagesResults />
      </Panel>
      <Panel value={index} index={3}>
        <VideoResults />
      </Panel>
    </Box>
  );
}
