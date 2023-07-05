import { Card,CardContent ,Grid,Typography,styled} from "@mui/material";
const Image=styled('img')({
    width:'70%',height:200,
    objectFit:'cover',
    borderRadius:8,
});
const Component =styled (Card)`
margin-bottom:20px;
box-shadow :0 2px 5px 0 rgb(0 0 0/16%);
line-height:27px;
`;
const container=styled(CardContent)`

padding:10px;`

const Text=styled(Typography)`
font-weight:300;
font-size:22px;
`
const nextcontainer=styled(Grid)`
margin :5px 0 0 -25px;`



const article=({data})=>{
    return(
        <Component>
            <CardContent>
            <Grid container>
                <Grid lg= {5} sm={5} xs={12} item>
               <Image src={data.url}/>
                </Grid>
                <Grid lg= {7} sm={7} xs={12} item>
               <Text>{data.title}</Text>
            <Typography><b>author</b> by {data.author}/{new Date(data.timestamp).toDateString()}</Typography>
            <Typography>{data.description}</Typography>
            <Typography>read more at <a href={data.link} target="blank">{data.publisher}</a></Typography>
                </Grid>
            </Grid>
                
            </CardContent>
        </Component>
    )
}
export default article;