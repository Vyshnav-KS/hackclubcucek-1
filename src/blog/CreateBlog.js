import {useState} from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('write your post here in Markdown');

    const handleSubmit = () => {
    
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
        </div>
    );
}

export default CreateBlog
