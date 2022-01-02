import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import ButtonCustom from "../Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Star from '@mui/icons-material/Star';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Swal from 'sweetalert2'


import { ICharacter } from "../../types";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#2ecc71',
    color: 'white',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: 'none',
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

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

  function addToFavoriteList() {

    handleClose();

    Swal.fire({
      icon: 'success',
      title: 'Favoritos',
      text: 'Adicionado aos favoritos com sucesso',
      focusConfirm: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Confirmar',
      confirmButtonAriaLabel: 'Confirmar',
      confirmButtonColor: '#2ecc71',
    })

  }

  return (
    <div>
      <ButtonCustom name="Informações" func={handleClickOpen} />

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <DialogTitle id="scroll-dialog-title" sx={{ backgroundColor: "#2ecc71", color: "white", textTransform: "uppercase" }}>{character.name}</DialogTitle>
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
                  <HtmlTooltip
                    title={
                      <>
                        <Typography sx={{ textAlign: 'center' }} color="success">Informações</Typography>
                        <hr />
                        <p style={{ textAlign: 'justify', textOverflow: "ellipsis", overflow: 'hidden' }}> Nome: {item.name} <br />
                          Descrição: {item.description}</p>

                      </>
                    }
                  >
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                        alt={item.name}
                        loading="lazy"

                      />
                    </ImageListItem>
                  </HtmlTooltip>
                ))}
              </ImageList>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" startIcon={<Star />} onClick={addToFavoriteList} >Favoritar</Button>
          <Button variant="contained" color="inherit" onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </BootstrapDialog >
    </div >
  );
}
