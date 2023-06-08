import { useRouteError } from "react-router-dom";
import ErrorPageLogo from "../images/ErrorPageLogo.jpg";

function ErrorNotification(props) {
    const error = useRouteError();

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="col-md-6 text-white bg-dark shadow p-3 rounded-4">
                {props.error}
                <h1 className="text-center">{error.status} {error.statusText}</h1>
                <p className="text-center">
                    <i>{error.data}</i>
                </p>
                <img className="d-flex justify-content-center mx-auto shadow-lg mb-3" style={{ height: "400px", width: "400px" }} src={ErrorPageLogo} alt="" />
                <div className="d-flex justify-content-center p-2">
                    <button className="btn btn-outline-primary" onClick={() => window.history.back()}>Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default ErrorNotification;
