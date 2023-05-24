import { useRouteError } from "react-router-dom";
function ErrorNotification(props) {
    const error = useRouteError()
    console.error(error)
    if (!props.error) {
        return null;
    }
    return (
        <div className="notification is-danger">
            {props.error}
        </div>
    );
}

export default ErrorNotification;
