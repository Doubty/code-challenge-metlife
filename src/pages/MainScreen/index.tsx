import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCharacters } from "../../store/reducers/characters/ActionCreator";
import { characterSlice } from "../../store/reducers/characters/CharacterSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CardCharacter from "../../components/CardCharacter";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function MainScreen() {
  const { count } = useAppSelector((state) => state.characterReducer);
  const { increment } = characterSlice.actions;
  const dispatch = useAppDispatch();
  const { characters, isLoading, error } = useAppSelector(
    (state) => state.characterReducer
  );

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <>
      <Header />
      <Container sx={{ minWidth: "100%" }}>

        <Grid item xs={12} md={12} sx={{ marginTop: "2rem" }}>
          <Paper component="form" className="inputSearchContainer">
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Pesquisar personagem"
              inputProps={{ "aria-label": "Pesquisar personagem" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="pesquisar">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} className="inputSearchContainer">
          <p>testando</p>
          <h1> {count} </h1>
          <Button variant="contained" onClick={() => dispatch(increment(1))}>
            incrementar
          </Button>

          <br />
        </Grid>

        <Grid container xs={12} md={12}>
          {isLoading && (
            <Grid item xs={12} md={12} className="ContainerLoading">
              <CircularProgress sx={{ color: "white" }} />
              <h3 className="loadingText"> Carregando...</h3>
            </Grid>
          )}
          {error && <h3> Ops... tivemos um problema ao carregar a listagem</h3>}
          {!isLoading &&
            characters.map((character) => (
              <Grid item xs={12} md={3} sx={{ marginTop: "2rem" }} spacing={3}>
                <CardCharacter character={character} />
              </Grid>
            ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default MainScreen;
