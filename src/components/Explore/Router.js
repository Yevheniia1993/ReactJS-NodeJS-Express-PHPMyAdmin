import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Explore from "./Explore";
import Samples from "./Samples";
import Packs from "./Packs";
import Selections from "./Selections";
import Creators from "./Creators";
function Routing() {
  return (
    <div>
      <Router>
        <div className="ForRouter">
          <div>
            <Link className="RouterLink" to="/Explore">
              Explore
            </Link>
          </div>
          <div>
            <Link className="RouterLink" to="/Samples">
              Samples
            </Link>
          </div>
          <div>
            <Link className="RouterLink" to="/Packs">
              Packs
            </Link>
          </div>
          <div>
            <Link className="RouterLink" to="/Selections">
              Selections
            </Link>
          </div>
          <div>
            <Link className="RouterLink" to="/Creators">
              Creators
            </Link>
          </div>
        </div>

        <Routes>
          <Route exact path="/Explore" element={<Explore />} />
          <Route exact path="/Samples" element={<Samples />} />
          <Route exact path="/Packs" element={<Packs />} />
          <Route exact path="/Selections" element={<Selections />} />
          <Route exact path="/Creators" element={<Creators />} />
        </Routes>
      </Router>{" "}
    </div>
  );
}

export default Routing;
