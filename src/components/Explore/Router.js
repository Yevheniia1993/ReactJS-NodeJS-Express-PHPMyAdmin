import { Routes, Route, Link } from "react-router-dom";
import Explore from "./Explore";
import Samples from "./Samples";
import Packs from "./Packs";
import Selections from "./Selections";
import Creators from "./Creators";
import CardSong from "./CardSong";
import Account from "./Account";
import HomePage from "./HomePage";
function Routing(props) {
  return (
    <div>
      <div className="ForRouter">
        <div>
          <Link className="RouterLink" to="/HomePage">
            Home page
          </Link>
        </div>
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
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Samples" element={<Samples />} />
        <Route path="/Packs" element={<Packs />} />
        <Route path="/Selections" element={<Selections />} />
        <Route path="/Creators" element={<Creators />} />
        <Route path="/CardSong" element={<CardSong />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default Routing;
