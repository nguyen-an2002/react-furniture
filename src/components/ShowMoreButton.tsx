import { useNavigate } from "react-router-dom";

const ShowMoreButton = () => {
    const navigate = useNavigate();

    return (
        <button
            className="btn-show-more"
            onClick={() => navigate("/shop")}
        >
            Show More
        </button>
    );
};

export default ShowMoreButton;
