import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import Hole from "./Hole";
import HoleModel from "../js/hole_model";

const RabbitHole = ({
  updateNumberOfTries,
  numberOfHoles,
  resetNumberOfTries,
  resetGame,
}) => {
  const [rabbitLocation, setRabbitLocation] = useState(
    Math.floor(Math.random() * numberOfHoles)
  );
  const [holes, setHoles] = useState([]);

  useEffect(() => {
    generateHoles();
  }, [numberOfHoles]);

  const generateHoles = () => {
    let holes = [];
    for (let i = 0; i < numberOfHoles; i++) {
      let newHole = new HoleModel(i, i === rabbitLocation, false);
      holes.push(newHole);
    }
    setHoles(holes);
  };

  const handleClick = (hole) => {
    if (hole.isDug) {
      return;
    }

    updateNumberOfTries();

    if (hole.isRabbit) {
      alert("You Win!");
      resetGame(); // prompt user to reset game
    } else {
      hole.isDug = true;
      hole.updateImagePath();

      setHoles(
        holes.map((h) => {
          if (h.location === hole.location) {
            return hole;
          }
          return h;
        })
      );

      let movedRabbit = false;
      while (!movedRabbit) {
        let direction = Math.floor(Math.random() * 2) === 0 ? 1 : -1;
        let newRabbitDirection = rabbitLocation + direction;

        // if new rabbit location is out of bounds, continue
        if (newRabbitDirection < 0 || newRabbitDirection >= numberOfHoles) {
          continue;
        }

        if (!holes[newRabbitDirection].isDug) {
          var newHole = holes[newRabbitDirection];
          newHole.isRabbit = true;
          newHole.updateImagePath();
          setHoles(
            holes.map((h) => {
              if (h.location === newHole.location) {
                return newHole;
              }
              return h;
            })
          );
          var rabbitHole = holes[rabbitLocation];
          rabbitHole.isRabbit = false;
          rabbitHole.updateImagePath();
          setHoles(
            holes.map((h) => {
              if (h.location === rabbitHole.location) {
                return rabbitHole;
              }
              return h;
            })
          );
          setRabbitLocation(newRabbitDirection);
          movedRabbit = true;
          continue;
        }

        // check if the rabbit is not on the edge of the board
        if (
          !(
            newRabbitDirection === 0 || newRabbitDirection === numberOfHoles - 1
          )
        ) {
          if (
            holes[rabbitLocation - 1].isDug &&
            holes[rabbitLocation + 1].isDug
          ) {
            movedRabbit = true;
          }
        }

        console.log("new rabbit location: " + newRabbitDirection);
      }
    }
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      style={{
        textAlign: "center",
      }}
    >
      {holes.map((_, i) => {
        return <Hole hole={holes[i]} handleClick={handleClick} key={i} />;
      })}
    </Grid>
  );
};

RabbitHole.propTypes = {
  updateNumberOfTries: PropTypes.func.isRequired,
  numberOfHoles: PropTypes.number.isRequired,
  resetNumberOfTries: PropTypes.func.isRequired,
};

export default RabbitHole;
