"use client"; // This is a client component 👈🏽
import {
  AppBar,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getRandomKartCombination } from "./api-service";

export default function Home() {
  const [players, setPlayers] = useState([1]);

  return (
    <>
      <AppBar position="static">
        <Toolbar className="flex justify-center">
          <Typography variant="h5">Mario Kart 8 Randomizer</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className=" bg-slate-400 flex flex-row p-3 justify-evenly">
          <Typography variant="h4" className=" mb-1">
            {players.length} Players
          </Typography>

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
        </div>
        {players.map((player, index) => {
          return <PlayerCard key={player} id={index + 1} />;
        })}
      </main>
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
    <Card>
      <CardHeader
        title={`Player ${props.id}`}
        subheader={combination.characters.name}
      />
      <CardContent>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <span className="text-xs">Kart</span>
              <span className="text-xs">{combination.kart.name}</span>
            </div>
            <div className="flex flex-row">
              <span className="text-xs">Tire</span>
              <span className="text-xs">{combination.tire.name}</span>
            </div>
            <div className="flex flex-row">
              <span className="text-xs">Glider</span>
              <span className="text-xs">{combination.glider.name}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src={`/assets/characters/${combination.characters.name}.png`}
              alt={combination.characters.name}
              className="w-24 h-24"
            />
            <img
              src={`/assets/karts/${combination.kart.name}.png`}
              alt={combination.kart.name}
              className="w-24 h-24"
            />
            <img
              src={`/assets/tires/${combination.tire.name}.png`}
              alt={combination.tire.name}
              className="w-24 h-24"
            />
          </div>
        </div>
      </CardContent>
    </Card>
    //<div className=" bg-green-300 flex flex-row justify-between p-8">
    //  <div className="flex flex-col">
    //    <div className="flex flex-row">Player {props.id}</div>
    //    <div className="flex flex-row">{combination.characters.name}</div>
    //  </div>
    //  <div className="flex flex-col">
    //    <div className="flex flex-row">
    //      <span className="text-xs">Kart</span>
    //      <span className="text-xs">{combination.kart.name}</span>
    //    </div>
    //    <div className="flex flex-row">
    //      <span className="text-xs">Tire</span>
    //      <span className="text-xs">{combination.tire.name}</span>
    //    </div>
    //    <div className="flex flex-row">
    //      <span className="text-xs">Glider</span>
    //      <span className="text-xs">{combination.glider.name}</span>
    //    </div>
    //  </div>
    //</div>
  );
}
