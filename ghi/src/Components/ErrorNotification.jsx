import { useRouteError, Link } from "react-router-dom";
function ErrorNotification(props) {
    const error = useRouteError()

    return (
        <div className="notification is-danger">
            {props.error}
            <h1>{error.status} {error.statusText}</h1>
            <p>
                <i>{error.data}</i>
            </p>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Finzonedesign.com%2Fblog%2F28-cleverly-funny-creative-404-error-pages%2F&psig=AOvVaw20GdEEyLPpWYADzusDFaA4&ust=1685811138363000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDE-oGGpf8CFQAAAAAdAAAAABAO" alt="Funny Dog" />
            <button onClick={() => window.history.back()}>Go Back</button>
            <Link to="/">Go back to homepage</Link>
        </div>
    );
}

export default ErrorNotification;
