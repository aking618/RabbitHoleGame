import React from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import HoleModel from "../js/hole_model";

const Hole = ({ hole, handleClick }) => {
  return (
    <Grid
      item
      xs={1}
      style={{
        width: "50px",
        height: "50px",
        border: "1px solid black",
        backgroundImage: `url(${hole.getImagePath()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "white",
        cursor: "pointer",
      }}
      onClick={() => handleClick(hole)}
    />
  );
};

Hole.propTypes = {
  hole: PropTypes.instanceOf(HoleModel),
  handleClick: PropTypes.func,
};

export default Hole;
