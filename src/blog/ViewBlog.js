import {useState} from "react";
import {useParams} from "react-router";
import {Error_showError, Msg_Loading} from "../Messages";
import useFetch from "../useFetch";

const ViewBlog = () => {
    const {id} = useParams();
    const [target, setTarget] = useState({uri: '', data: {id: id}});
    const serverResponse = useFetch(target);

    let currentStatusJsx = "";
    let postJsx = "";

    if (serverResponse.isLoading) {
        currentStatusJsx = Msg_Loading();
    }
    else if (serverResponse.error.error) {
        currentStatusJsx = Error_showError(serverResponse.error.msg);
    }
    else if (!serverResponse.data.result) {
        currentStatusJsx = Error_showError(serverResponse.data.err);
    }
    else {
        postJsx = (
            <p>{serverResponse.data.post}</p>
        )
    }
    return (
        <div className="ViewBlog">
            <h1>ViewBlog</h1>
            <div className="status">
                {currentStatusJsx}
            </div>
            <div className="blog-post">
                {postJsx}
            </div>
        </div>
    );
}

export default ViewBlog
