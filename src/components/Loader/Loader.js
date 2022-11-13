import SquareLoader from "react-spinners/SquareLoader";
import './Loader.css';

const override = {
    display: "block",
    margin: "0 auto",
    marginTop: "200px",
    borderColor: "black",
};

export const Loader = ({ loaded }) => {
    return (
        <div className={"Loader " + (loaded ? 'fadeOut' : "")} >
            <SquareLoader
                color={"black"}
                loading={!loaded}
                cssOverride={override}
                size={100}
                speedMultiplier={0.5}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}