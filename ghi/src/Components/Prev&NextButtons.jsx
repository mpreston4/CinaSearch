import { useNavigate } from "react-router-dom";

function PrevNextButtons(props) {
    const navigate = useNavigate();
    let param = JSON.parse(JSON.stringify(props.param));
    let data = props.data;

    const handlePrevClick = () => {
        param["page"] = data.current_page;
        param["api_start_page"] = data.api_start_page;
        param["first_movie_index"] = data.first_movie_index;
        param["req_action"] = "prev"
        navigate(`/movies/${data.current_page - 1}`, { state: param });
    };

    const handleNextClick = () => {
        param["page"] = data.current_page;
        param["api_end_page"] = data.api_end_page;
        param["last_movie_index"] = data.last_movie_index;
        param["req_action"] = "next"
        navigate(`/movies/${data.current_page + 1}`, { state: param });
    };

    return (
        <>
            {data.current_page === 1 ? "" : <li className="page-item"><button className="btn btn-outline-primary" onClick={handlePrevClick}>Previous</button></li>}
            {data.next ? <li className="page-item"><button className="btn btn-outline-primary" onClick={handleNextClick}>Next</button></li> : ""}
        </>
    );
}

export default PrevNextButtons;
