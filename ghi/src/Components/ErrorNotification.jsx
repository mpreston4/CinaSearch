import { useRouteError, Link } from "react-router-dom";
function ErrorNotification(props) {
    const error = useRouteError()
    console.log(error)

    return (
        <div className="notification is-danger">
            {props.error}
            <h1>{error.status} {error.statusText}</h1>
            <p>
                <i>{error.data}</i>
            </p>
            <Link to="/">Go back to homepage</Link>
        </div>
    );
}

export default ErrorNotification;
