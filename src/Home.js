// Home component
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from 'react';
import home_image from "./images/hm2.png";
import instagram from "./images/icons/instagram.png";
import twitter from "./images/icons/twitter.png";
import github from "./images/icons/github.png";

const useStyles = makeStyles({
    row:{
        display:'flex',
        flexDirection: 'row',
        width: "100%",
        height: '100vh',
        '@media screen and (max-width: 1200px)':{
            height: '100vh',
        },
        '@media screen and (max-width: 750px)':{
            flexDirection: 'column-reverse',
            width: 'auto',
            height: '100%',
        },
    },
    col1:{
        width: "50%",
        '@media screen and (max-width: 1200px)':{
        },
        '@media screen and (max-width: 750px)':{
            width: '100%',
        },
     },
     col2:{
        width: '50%',
        '@media screen and(max-width: 1200px)':{
            textAlign: 'center',
        },
        '@media screen and (max-width: 750px)':{
            width: '100%',
        },
     },    
    small:{
        fontFamily: 'Kanit',
    },
	maintitle:{
        fontSize: 50,
        paddingLeft: '8%',
        marginTop: 200,
        color: 'white',
        '@media screen and (max-width: 1200px)':{
            fontSize: 40,
            marginTop: 170,
        },
        '@media screen and (max-width: 750px)':{
            fontSize: 35,
            marginTop: 20,
        },
    },
    subtitle:{
        fontSize: 35,
        paddingLeft: '8%',
        marginTop: 25,
        color: 'rgb(212, 209, 209)',
        '@media screen and (max-width: 1200px)':{
            fontSize: 30,
        },
        '@media screen and (max-width: 750px)':{
            fontSize: 22,
        },
    },

	
    joinbtn:{
        width: 120,
        height: 40,
        marginLeft: '8%',
        background: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)',
        color: 'blue',
        fontSize: '18',
        fontFamily: 'Kanit', 
        border: 0,
        borderRadius: 50,
        marginBottom: 20,
        '&:hover':{
            background: 'black',
            color: 'white',
            textTransform: 'uppercase'
        },
    },
    image:{
        textAlign: 'center',
        marginTop: 100,
        '@media screen and (max-width: 750px)':{
            marginTop: 10,
            paddingTop: 20,
        },
    },
    col2_img:{
        width: 500,
        height: 500,
        textAlign: 'center',
        alignItems: 'center',
        '@media screen and (max-width: 1200px)':{
            width: 350,
            height: 380,
        },
        '@media screen and (max-width: 750px)':{
            width: 300,
            height: 350,
        }
    },
  root: {
    background: '#004792'
  }

   /* social_links: {
		textAlign: "center",
        
	},
	sociial_icons: {
		maxHeight: 30,
		margin: 20,
        cursor: "pointer",
        
    },*/

});

const Home = () => {
  const classes = useStyles();

	return (
        <div className={classes.root}>

<div className={classes.row}>
        <div className={classes.col1}>
            <h1 className={classes.maintitle}>
               <small>welcome to</small>  <br/> HACK CLUB CUCEK
            </h1>
            <p className={classes.subtitle}>
                Looking for a tech group accepted worldwide from our college?. You just got into the right place.
            </p>
            <button className={classes.joinbtn}>
                Join Now
            </button>
        </div>
        <div className={classes.col2}>
            <div className="col_box">

            <div className={classes.image}>
                <img alt="ximage" src={home_image} className={classes.col2_img}/>
                </div>
            </div>
        </div>
    </div>
			
		
           {/* <footer
            className={classes.footer}>
            <div className={classes.social_links}>
				<img className={classes.sociial_icons} src={instagram} alt="O" />
				<img className={classes.sociial_icons} src={github} alt="O" />
				<img className={classes.sociial_icons} src={twitter} alt="O" />
			</div>
           </footer>*/}
            </div>


/*
            
            <div className="home-about">
                <h1>Coding is my super power</h1>
                <h2>What do we do here</h2>
                <p>
                    Please don't get fooled by the name. Hacking is not the only thing happening around . We do a lot of stuff here.
                    We just want you to grasp every teeny tiny bit of info about tech.
                </p>
                <h2>What is Hackclub</h2>
                <p>
                    Cucek Hack Club is a chapter of the international non-profit Hack Club and is a developers club at Cochin university college 
                    of engineering Kuttanad.
                </p>
            </div> 
            <div className="home-cards">
                <div className="card">
                    <h3>Events</h3>
                    <p>Events which help you to learn something new.</p>
                    <button>View</button>
                </div>
                <div className="card">
                    <h3>Mentors</h3>
                    <p>Group of student mentors, who are ready to help you.</p>
                    <button>View</button>
                </div>
            </div>*/
	);
};

export default Home;
