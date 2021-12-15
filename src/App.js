import { Button, Card, Grid, Tooltip, Typography } from "@mui/material";
import RabbitHole from "./components/RabbitHole";
import React, { useState } from 'react';
import { style } from "@mui/system";


function App() {

  /*
      Rules:
      - The rabbit is randomly placed in a collection
          of holes.
      - Search one hole at a time
      - When a hole is searched, the rabbit leaves
          it's current hole and hops to a hole adjecent
          to it's previous hole. 
  */

  const [gameStarted, setGameStarted] = useState(false);
  const [numberOfTries, setNumberOfTries] = useState(0);
  const [numberOfHoles, setNumberOfHoles] = useState(10);

  const updateNumberOfTries = () => {
    setNumberOfTries(numberOfTries + 1);
  }

  const resetNumberOfTries = () => {
    setNumberOfTries(0);
  // }i love you!
  }

  const resetGame = () => {
    setGameStarted(false);
    resetNumberOfTries();
  }


  return (
    <div
      style={{
        backgroundImage: `url(${("images/background.jpeg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        margin: "0",
        padding: "0",
      }}

    >
      <Typography
        variant="h1"
        gutterBottom
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "white"
        }}
      >
        Rabbit Hole
      </Typography>
     <Card
      //remove background color

        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em",
          backgroundColor: "rgba(0,0,0,0)"
        }}
      >
        {
          gameStarted ?
          <RabbitHole
          updateNumberOfTries={updateNumberOfTries}
          numberOfHoles={numberOfHoles}
          resetGame={resetGame}
          resetNumberOfTries={resetNumberOfTries}
        />
          : 
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  color="#fff"
                  style={{
                    textAlign: "center",
                    marginTop: "20px"
                  }}
                >
                  How many holes?
                </Typography>
              </Grid>
              <Grid item>
                <input
                  type="number"
                  value={numberOfHoles}
                  onChange={(e) => setNumberOfHoles(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                style={{
                  marginBottom: "20px"
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "green",
                    color: "white"
                  }}
                  onClick={() => {
                    if (numberOfHoles < 1 || numberOfHoles > 100 || isNaN(numberOfHoles)) {
                      alert("Please enter a number between 1 and 100");
                      return;
                    }
                    setGameStarted(true);
                  }}
                >
                  Start Game
                </Button>
              </Grid>
          </Grid>
        }
      </Card>
    </div>
  );
}

export default App;
