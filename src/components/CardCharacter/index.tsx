import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ICharacter } from "../../types";
import ModalCharacter from "../ModalCharacter";

export default function CardCharacter({
  character,
  type
}: {
  character: ICharacter;
  type: string
}) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="500"
        image={character.img}
        alt={character.name}
      />
      <CardContent>
        <Typography
          sx={{ textTransform: "uppercase", textAlign: 'center' }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {character.name}
        </Typography>
      </CardContent>
      <CardActions>
        <ModalCharacter type={type} character={character} />
      </CardActions>
    </Card>
  );
}
