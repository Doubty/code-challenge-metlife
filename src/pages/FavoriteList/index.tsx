import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CardCharacter from "../../components/CardCharacter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

function FavoriteList() {
  const [search, setSearch]: [string, (search: string) => void] = useState("");

  const { favoriteCharacters, isLoading, error } = useAppSelector(
    (state) => state.characterReducer
  );

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  function filterCharacters() {
    if (search === "" || search === " ") {
      return favoriteCharacters;
    } else {
      let aux = [];

      aux = favoriteCharacters.filter((item) =>
        item.name.toLowerCase().match(search.toLocaleLowerCase())
      );
      return aux;
    }
  }

  return (
    <>
      <Header name="Pyschonauts - lista de favoritos" />
      <Container sx={{ minWidth: "100%" }}>
        <Grid item xs={12} md={12} sx={{ marginTop: "2rem" }}>
          <Paper component="form" className="inputSearchContainer">
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Pesquisar personagem"
              inputProps={{ "aria-label": "Pesquisar personagem" }}
              onChange={handleChange}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="pesquisar">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>

        <Grid container xs={12} md={12}>
          {isLoading && (
            <Grid item xs={12} md={12} className="ContainerLoading">
              <CircularProgress sx={{ color: "white" }} />
              <h3 className="loadingText"> Carregando...</h3>
            </Grid>
          )}

          {filterCharacters().length === 0 && !isLoading && (
            <Grid item xs={12} md={12} className="ContainerMessage">
              <h3 className="loadingText">
                Nenhum personagem por aqui ainda...
              </h3>
            </Grid>
          )}

          {error && (
            <Grid item xs={12} md={12} className="ContainerMessage">
              <h3 className="loadingText">
                Ops... tivemos um problema ao carregar a listagem
              </h3>
            </Grid>
          )}

          {!isLoading &&
            filterCharacters().map((character) => (
              <Grid item xs={12} md={3} sx={{ marginTop: "2rem" }} spacing={3}>
                <CardCharacter type="favorite" character={character} />
              </Grid>
            ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default FavoriteList;
