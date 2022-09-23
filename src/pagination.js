import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="minipage">
      <h1>Welcome Here</h1>
      <div className="redirect">
        <Link 
        className="btn-pink" 
        role="button" 
        to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
