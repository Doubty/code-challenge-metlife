import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCharacters } from "../../store/reducers/characters/ActionCreator";
import { characterSlice } from "../../store/reducers/characters/CharacterSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
    <Container style={{ minWidth: "100%" }}>
      <Grid item xs={8}>
        a de 8
      </Grid>
      <Grid item xs={4}>
        de 4
      </Grid>
      <p>testando</p>
      <h1> {count} </h1>
      <Button variant="contained" onClick={() => dispatch(increment(1))}>
        incrementar
      </Button>

      <br />

      {isLoading && (
        <div>
          <Box sx={{ display: "flex", color: "red" }}>
            <CircularProgress />
          </Box>
          <h3> Carregando...</h3>
        </div>
      )}
      {error && <h3> Ops... tivemos um problema ao carregar a listagem</h3>}
      {!isLoading && JSON.stringify(characters, null, 2)}
    </Container>
  );
}

export default MainScreen;
