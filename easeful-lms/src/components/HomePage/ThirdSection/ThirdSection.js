import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import DropIcon from '../../../Assets/Imgs/dropdown.svg'
import FirstRowCards from './FirstRowCards';
import SecondRawCards from './SecondRowCards';


const useStyles = makeStyles((theme) => ({
    Main:{
        width: '100%',
    
    backgroundColor: '#ffffff',
    },

    subMain : {
       
    },

    head : {
        margin: '0',
        marginRight:'109px'
    },

    topBox:{
        width:'90%',
        margin:'auto',
        display:'flex',
        justifyContent:'center',
        paddingTop:'40px'
    },

    button: {
        
        minWidth: "unset",
      width:'140px',
        height: "43px",
        marginTop: '5px',
        color: "white",
       
        fontSize: "12px",
        textTransform:'unset',
        backgroundColor: "#f56962",
      },

      forDesign:{
          display:'flex',
          marginTop: '-4px',
      },

     
}))

const ThirdSection = () => {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
            <Box className = {classes.subMain}>
                <Box className = {classes.topBox}>
                    <h1 className = {classes.head}>
                Choose Favourite Course From Top Category
                </h1>
                
            <Button className={classes.button}>See all Categories</Button>
                </Box> 
            </Box>

            <FirstRowCards/>
            <SecondRawCards/>
           
        </div>
    );
};

export default ThirdSection;