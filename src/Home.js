// Home component
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import home_image from "./images/devtp.png";

const useStyles = makeStyles({

    
    container:{
        paddingLeft: "8%",
        paddingRight: "8%%",
        maxWidth: "100%",
        minHeight: "100vh",

    },
	row: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 150,
	},
	col_1: {
		flexBasis: "40%",
		position: "relative",
		marginLeft: 50,
	},
	main_title: {
		fontFamily: "Poppins",
		fontWeight: 700,
        color: "hsla(0, 4%, 10%, 1)",
        fontSize: 54,
    },
    sub_title:{
        fontSize: 30,
        color: "#707070",
        fontWeight: 100,
        marginTop: 30,
        marginBottom: 20 
       },
    join_button:{
        maxWidth: 145,
        border: 0,
        borderRadius: "20px 0px 20px 0px",
        padding: 12,
        color: "#fff",
        backgroundColor: "hsla(0, 100%, 50%, 1)",
        "&:hover":{
            backgroundColor: "black"
        }
    },
    col_2:{
        position: "relative",
        flexBasis: "60%",
        display: "flex",
        alignItems: "center",
    },
    bg:{
        maxWidth: "60%",
        paddingLeft: "10%",
    },
    color_box:{
        position: "absolute",
        right: 0,
        top: 0,
        backgroundColor: "hsla(0, 100%, 50%, 1)",
        borderRadius: "150px 0px 0px 0px",
        height: "100%",
        width: "80%",
        zIndex: "-1",
        transform: "translateX(150px)",
        
    }
});

const Home = () => {
	const classes = useStyles();

	return (
		<Container className={classes.container}
        >
			<div className={classes.row}>
				<div className={classes.col_1}>
                    <Typography 
                    variant="h2" 
                    className={classes.main_title}>
						Welcome to
						<br /> Hack Club Cucek
					</Typography>
                    <Typography 
                    variant="h3"
                    className={classes.sub_title}
                    >
						Looking for a tech group accepted worldwide from our college?. You
						just got into the right place.
					</Typography>
					{/*<p>DWJHhjd wdbwabdwha</p>*/}
                    <Button 
                    type="button"
                    variant= "contained"
                    className={classes.join_button}
                    >Join Now</Button>
				</div>
				<div className={classes.col_2}>
                <img src={home_image} alt="" className={classes.bg}/>
                <div className={classes.color_box}></div>
            </div> 
			</div>
			{/*<div className="social-links">
            <img src="" alt="O"/>
            <img src="" alt="O"/>
            <img src="" alt="O"/>
        </div>
            
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
            </div>*/}
		</Container>
    );
}

export default Home
