import React from "react";
import BackButton from "../button/BackButton";
import ProfileButton from "../button/ProfileButton";
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
