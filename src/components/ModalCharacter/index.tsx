import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ButtonCustom from "../Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Star from '@mui/icons-material/Star';


import { ICharacter } from "../../types";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs({
  character,
}: {
  character: ICharacter;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonCustom name="Informações" func={handleClickOpen} />

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="xl"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {character.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Card>
            <CardMedia
              component="img"
              sx={{ width: 350, maxHeight: '50%', margin: "0 auto" }}
              image={character.img}
              alt={character.name}
            />

            <CardContent>
              <Typography
                component="div"
                variant="h4"
                sx={{ textAlign: "center", marginBottom: "1rem" }}
              >
                Informações
                <hr />
              </Typography>
              <Typography component="div" variant="h5">
                Nome: {character.name}
              </Typography>
              <Typography component="div" variant="h5">
                Gênero: {character.gender}
              </Typography>
              <Typography
                component="div"
                variant="h4"
                sx={{ textAlign: "center", marginBottom: "1rem", marginTop: '1rem' }}
              >
                Poderes
                <hr />
              </Typography>
              <ImageList sx={{ width: 500, height: 200 }} cols={5} rowHeight={100}>
                {character.psiPowers.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                      alt={item.name}
                      loading="lazy"

                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" startIcon={<Star />}>Favoritar</Button>
          <Button variant="contained" color="inherit" onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
