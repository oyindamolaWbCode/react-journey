import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div className="intro">
      <h4>Welcome !</h4>
      <p> Its's a pleasure to have you here.</p>
      <div className="pagination">
        <Link to ="/pagination">
          <button>Click Me To Pagination</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
