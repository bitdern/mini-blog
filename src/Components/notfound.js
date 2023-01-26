import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Lo siento</h2>
      <p>That page cannot be fetched</p>
      <Link to="/">Back to homepage...</Link>
    </div>
  );
};

export default NotFound;
