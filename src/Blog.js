import {useState} from "react";
import {Link} from "react-router-dom";
import useFetch from "./useFetch";
import {serverAddress} from './Utility';
import * as Messages from "./Messages";

const Blog = () => {
    const [target, setTarget] = useState({uri:  `${serverAddress}/blogs.php`, data: {sql: ""}});
    const previewData = useFetch(target);
    
    let currentStatusJsx = '';
    let blogsJsx = [];


    if (previewData.isLoading) {
        // Show loading message
        currentStatusJsx = Messages.Msg_Loading();
    } 
    else {
        if (previewData.error.error) {
            // Fetch request failed
            currentStatusJsx = Messages.Error_showError(previewData.error.msg);
        }
        else if (!previewData.data.result) {
            // Error from server
            currentStatusJsx = Messages.Error_showError(previewData.data.err);
        }
        else {
            // all ok
            currentStatusJsx = '';
            for (const blog of previewData.data.blogs) {
                let postJsx = (
                    <div className="blog-card" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <p>{blog.title}</p>
                        <p>Written by {blog.author}</p>
                    </Link>
                    </div>
                );
                blogsJsx.push(postJsx);
            }
        }
    } 

    return (
        <div className="blogs">
            <h1>Blogs</h1>
            <div className="blog-container">
                {blogsJsx}
            </div>
            <div className="status">
                {currentStatusJsx}
            </div>
            <div className="side-links">
                <Link to="/blog/create">Create Post</Link>
            </div>
        </div>
    );
}

export default Blog
