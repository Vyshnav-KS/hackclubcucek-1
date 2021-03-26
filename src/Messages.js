export function Error_showError(errorMsg) {
    return (
        <div className="errorMsg">
            <p>{errorMsg}</p>
        </div>
    );
}

export function Msg_Loading() {
    return (
        <div className="Loading">
            <p>Loading... Please wait</p>
        </div>
    );
}
