import {useState} from "react";
import {useHistory} from "react-router";
import useFetch from "../useFetch";
import {getCookie, serverAddress} from "../Utility.js"
import * as Messages from "../Messages";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('write your post here in Markdown');
    const [isSubmitPressed, setIsSubmitPressed] = useState(false);
    const [target, setTarget] = useState({uri: '', data: {}});

    const serverResponse = useFetch(target);
    const history = useHistory();

    let currentStatusJsx = '';

    // Called when submit button is pressed
    const handleSubmit = () => {
        setIsSubmitPressed(true);
        setTarget({uri: `${serverAddress}/createBlogPost.php`, data: {
            author: getCookie("username"),
            authorPass: getCookie("hash"),
            title: title,
            content: body
        }})
    }

    if (isSubmitPressed) {
        if (serverResponse.isLoading) {
            // Show Loading Message
            currentStatusJsx = Messages.Msg_Loading();
        } 
        else {
            if (serverResponse.error.error) {
                // Fetch request failed
                currentStatusJsx = Messages.Error_showError(serverResponse.error.msg);
            } 
            else if (!serverResponse.data.result) {
                // Error from server
                currentStatusJsx = Messages.Error_showError(serverResponse.data.err);
            } 
            else {
                // All ok
                history.push("/blog");
            }
        }
    }


    return (
        <div className="createBlog">
            <h1>Create Blog</h1>
            <div className="container">
                <label>Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/> 
                <label>Content</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div className="status">
                {currentStatusJsx}
            </div>
        </div>
    );
}

export default CreateBlog
