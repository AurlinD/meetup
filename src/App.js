import { Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import { useNavigate } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetups />} />
      <Route path="/new-meetup" element={<NewMeetup />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
}

export default App;
