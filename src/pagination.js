import { Link } from "react-router-dom";

const Pagination = () => {
    return (  
        <div className="minipage">
            <h1>WElcome</h1>
            <div className="redirect">
                <Link to = "./">
                    <button> Back to Homepage</button>
                </Link>
            </div>
        </div>
    );
}
 
export default Pagination;