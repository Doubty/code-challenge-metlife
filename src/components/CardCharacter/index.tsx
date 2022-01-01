import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ICharacter } from "../../types";
import ButtonCustom from "../Button";

export default function CardCharacter({
  character,
}: {
  character: ICharacter;
}) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="600"
        image={character.img}
        alt={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonCustom name="Informações" />
      </CardActions>
    </Card>
  );
}
