export function Error_showError(type = "") {
  if ("REQUEST_FAILED" === type) {
    return "Failed to contact server. Check your connection or maybe something is wrong with the server.";
  }
  else if ("NO_RESPONSE" === type) {
    return "Server did not respond. Try again Later";
  }
  return "Operation Failed.";
}

export function Msg_Loading() {
    return (
        <div className="Loading">
            <p>Loading... Please wait</p>
        </div>
    );
}
