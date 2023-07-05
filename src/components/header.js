import {AppBar,Toolbar,styled} from '@mui/material';
//import { Menu } from '@mui/icons-material';
//import MenuIcon from '@mui/icons-material/Menu';
//using styled components cssof material ui can be handled
const Styledheader=styled(AppBar)`
   background:navy;
   height:90px;`
   
 const image=styled('img')({
    height:300,

 })
 

const header=()=>{
    return (
        <Styledheader position="static">
            <Toolbar>
              <h1>News GLANCE</h1>
              <image src="/image/news.png" alt="logo"/>
            </Toolbar>
        </Styledheader>
    )
}
export default header;