import { Link } from "react-router-dom";
import Pagination from "./pagination";

const Welcome = (props) => {
  return (
    <div className="intro">
      <h4>Welcome !</h4>
      <p> Its's a pleasure to have you here.</p>
      <Link to="/mini">Mini Homepage</Link>
      <div className="pagination">
        <Link
          className="btn-pink"
          role="button"
          to="/pagination"
        >
          Click Me To Pagination
        </Link>
        {/* <Link to ="/pagination">
          <button>Click Me To Pagination</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Welcome;
