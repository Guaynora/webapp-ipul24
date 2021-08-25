import React from "react";
import BackButton from "./BackButton";
import ProfileButton from "./ProfileButton";
import Search from "./Search";

function TopComponent({ back }) {
  return (
    <div className="box is-flex is-justify-content-space-between">
      {back ? <BackButton /> : <Search />}
      <ProfileButton />
    </div>
  );
}

export default TopComponent;
