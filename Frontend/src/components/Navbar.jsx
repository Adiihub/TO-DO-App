import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ProfileInfo from "./Cards/ProfileInfo";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  const onLogout = () => {
    navigate("/login"); // yha navigate krenge through React-Router-DOM
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <Link to={"/"}>
        <h2 className="text-xl font-medium text-black py-2">
          <span className="text-slate-500">Good</span>
          <span className="text-slate-900">Notes</span>
        </h2>
      </Link>

      <SearchBar
        value={SearchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
