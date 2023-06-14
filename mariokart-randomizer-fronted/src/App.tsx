import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Toolbar,
  Typography,
  colors,
} from "@mui/material";
import { getRandomKartCombination } from "./api-service";
const assetsURL =
  "https://github.com/Doderich/MarioKartrandomizer/blob/main/mariokart-randomizer-fronted/src/assets";

function App() {
  const [players, setPlayers] = useState([1]);

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5">Mario Kart 8 Randomizer</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "fit-content" }}>
        <Box
          sx={{
            display: "flex",
            height: "fit-content",
            flexDirection: "column",
            backgroundColor: "grey.200",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ width: "100%" }}
            align="center"
          >
            {players.length} Players
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mb: 1,
            }}
          >
            <ButtonGroup>
              <Button
                onClick={() =>
                  setPlayers((prev) => {
                    return [...prev, prev.length];
                  })
                }
                variant="contained"
              >
                +
              </Button>
              <Button
                onClick={() =>
                  setPlayers((prev) => {
                    return prev.slice(0, -1);
                  })
                }
                variant="contained"
              >
                -
              </Button>
              <Button
                onClick={() => {
                  setPlayers((prev) => {
                    return [...prev];
                  });
                }}
                variant="contained"
              >
                Randomize
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
        <Divider />
        <Box>
          {players.map((player, index) => {
            return <PlayerCard key={player} id={index + 1} />;
          })}
        </Box>
      </Box>
    </>
  );
}

function PlayerCard(props: { id: number }) {
  const [combination, setCombination] = useState({
    characters: { name: "" },
    kart: { name: "" },
    tire: { name: "" },
    glider: { name: "" },
  });
  useEffect(() => {
    console.log("PlayerCard mounted");
    setRandomCombination();
  }, []);

  async function setRandomCombination() {
    const combo = await getRandomKartCombination(0);
    if (!combo) return;
    setCombination(combo);
  }

  return (
    <Card sx={{ margin: 1 }}>
      <CardHeader title={`Player ${props.id}`} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <Typography variant="subtitle1">Character</Typography>
            <img
              src={`${assetsURL}/characters/combination.characters.name]`}
              className="w-24 h-24"
            />
            <Typography variant="subtitle1">
              {combination.characters.name}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography variant="subtitle1">Kart</Typography>
            <img
              src={`${assetsURL}/karts/${combination.kart.name}`}
              className="w-24 h-24"
            />
            <Typography variant="subtitle1">{combination.kart.name}</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography variant="subtitle1">Tire</Typography>
            <img
              src={`${assetsURL}/tires/${combination.tire.name}`}
              className="w-24 h-24"
            />
            <Typography variant="subtitle1">{combination.tire.name}</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography variant="subtitle1">Glider</Typography>
            <img
              src={`${assetsURL}/gliders/${combination.glider.name}`}
              className="w-24 h-24"
            />
            <Typography variant="subtitle1">
              {combination.glider.name}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default App;
