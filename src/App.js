//import logo from './logo.svg';
//import './App.css';
import{Box,styled} from '@mui/material';
import Header from './components/header';
import Articles from './components/articles';
const container=styled(Box)`
  width:60%;
  margin:40px auto 0 auto`;
function App() {
  return (
    
    <Box>
      <Header/>
      <container><Articles/></container>
    
    </Box>
    
  );
}

export default App;
