import {useState} from "react";
import {Link} from "react-router-dom";
import useFetch from "./useFetch";

const Blog = () => {
    const [target, setTarget] = useState({uri: '', data: ''});
    const previewData = useFetch(target);
    
    let currentStatusJsx = '';
    let blogsJsx = '';

    if (previewData.isLoading) {
        currentStatusJsx = (
            <div className="Loading">
                <p>Loading...</p>
            </div>
        );
    } else {
        // Check error
        if (previewData.error.error) {
            currentStatusJsx = (
                <div className="errorMsg">
                    <p>{previewData.error.msg}</p>
                </div>
            )
        }
        else if (previewData.data.result) {
            for (const blog in previewData.data.blogs) {
                blogsJsx = blogsJsx + (
                    <div className="blog-card">
                        <p>{blog.title}</p>
                        <p>by {blog.author}</p>
                    </div>
                );
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
