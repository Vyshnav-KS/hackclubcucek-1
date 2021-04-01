// Home component
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from 'react';
import home_image from "./images/devtp.png";
import instagram from "./images/icons/instagram.png";
import twitter from "./images/icons/twitter.png";
import github from "./images/icons/github.png";

const useStyles = makeStyles({
	container: {
		paddingLeft: "8%",
		paddingRight: "8%%",
		maxWidth: "100%",
        minHeight: "80vh",
        top: 0,
	},
	row: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 160,
		"@media only screen and (max-width: 850px)": {
			flexDirection: "column-reverse",
			margin: "50px 0px 0px 0px",
		},
	},
	col_1: {
		flexBasis: "40%",
		position: "relative",
		marginLeft: 50,
		"@media only screen and (max-width: 850px)": {
            flexBasis: "100%",
            
            
		},
	},
	main_title: {
		fontFamily: "Poppins",
		fontWeight: 700,
		color: "hsla(0, 4%, 10%, 1)",
        fontSize: 54,
        marginTop: 0,
		"@media only screen and (max-width: 850px)": {
			fontSize: 35,
		},
	},
	sub_title: {
		fontSize: 30,
		color: "#707070",
		fontWeight: 100,
		marginTop: 30,
		marginBottom: 20,
		"@media only screen and (max-width: 850px)": {
			fontSize: 20,
		},
	},
	join_button: {
		maxWidth: 145,
		border: 0,
		borderRadius: "20px 0px 20px 0px",
		padding: 12,
		color: "#fff",
		backgroundColor: "hsla(0, 100%, 50%, 1)",
		"&:hover": {
			backgroundColor: "black",
		},
	},
	col_2: {
		position: "relative",
		flexBasis: "60%",
		display: "flex",
		alignItems: "center",
		"@media only screen and (max-width: 850px)": {
			flexBasis: "100%",
			marginBottom: 0,
		},
	},
	bg: {
		maxWidth: "60%",
		paddingLeft: "10%",
		"@media only screen and (max-width: 850px)": {
			width: "77%",
		},
	},
	color_box: {
		position: "absolute",
		right: 0,
		top: 0,
		backgroundColor: "hsla(0, 100%, 50%, 1)",
		borderRadius: "10px 0px 0px 10px",
		height: "100%",
		width: "80%",
		zIndex: "-1",
		transform: "translateX(150px)",
		"@media only screen and (max-width: 850px)": {
            transform: "translateX(75px)",
		},
    },
    /*footer:{
        minWidth: "100%",
        minHeight: 100,
        border: " 1px solid black",
        top: 0,
        bottom: 0,
        "@media only screen and (max-width: 850px)": {
            bottom: 0
		},
    },*/
	social_links: {
		textAlign: "center",
        
	},
	sociial_icons: {
		maxHeight: 30,
		margin: 20,
        cursor: "pointer",
        
	},
});

const Home = () => {
	const classes = useStyles();

	return (
        <React.Fragment>
		<Container className={classes.container}>
			<div className={classes.row}>
				<div className={classes.col_1}>
					<Typography variant="h2" className={classes.main_title}>
						Welcome to
						<br /> Hack Club Cucek
					</Typography>
					<Typography variant="h3" className={classes.sub_title}>
						Looking for a tech group accepted worldwide from our college?. You
						just got into the right place.
					</Typography>
					{/*<p>DWJHhjd wdbwabdwha</p>*/}
					<Button
						type="button"
						variant="contained"
						className={classes.join_button}
					>
						Join Now
					</Button>
				</div>
				<div className={classes.col_2}>
					<img src={home_image} alt="" className={classes.bg} />
					<div className={classes.color_box}></div>
				</div>
			</div>
		
		</Container>
            <footer
            className={classes.footer}>
            <div className={classes.social_links}>
				<img className={classes.sociial_icons} src={instagram} alt="O" />
				<img className={classes.sociial_icons} src={github} alt="O" />
				<img className={classes.sociial_icons} src={twitter} alt="O" />
			</div>
            </footer>
            </React.Fragment>


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
