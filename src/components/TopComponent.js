import React from "react";
import ProfileButton from "./ProfileButton";
import Search from "./Search";

function TopComponent() {
  return (
    <div className="box is-flex is-justify-content-space-between">
      <Search />
      <ProfileButton />
    </div>
  );
}

export default TopComponent;
