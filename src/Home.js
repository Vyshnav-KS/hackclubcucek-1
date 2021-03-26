
import home_image from './images/bg1.png';

const Home = () => {
    return (
        <div className="home">
            <div className="row home-stmt1">
            <div className="col-1">
                <h2>Welcome to<br/> Hack club Cucek</h2>
                <h3>Looking for a tech group accepted worldwide 
                    from our college?. You just got into the right place.</h3>
                <p>DWJHhjd wdbwabdwha</p>
                <button type="button">Join Now</button>
            </div>
            <div className="col-2">
                <img src={home_image} alt="" className="bg"/>
                <div className="color-box"></div>
            </div>
        </div>
        <div className="social-links">
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
            </div>
        </div>
    );
}

export default Home
