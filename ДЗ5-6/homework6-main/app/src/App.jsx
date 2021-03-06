import "./App.css";
import Container from "@mui/material/Container";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import PostForm from "./components/PostForm/PostForm";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PostsList from "./components/PostsList/PostsList";
import { Box } from "@mui/material";
import Footer from "./components/Footer/Footer";
import PostDetail from "./components/PostDetail/PostDetail";

const themeLight = createTheme({
  palette: {
    background: {
      default: "whitesmoke",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Container
            maxWidth="md"
            sx={{ flexGrow: 1, display: "flex", mt: 3, flexDirection: 'column' }}
            className="container"
          >
            <Routes>
              <Route 
                path="/"
                element={
                    <Main />
              } />
              <Route
                path="/posts"
                element={
                    <PostsList />
                }
              />
              <Route
                path="/posts/:_id"
                element={
                    <PostDetail />
                }
              />
              <Route
                path="/postform"
                element={
                    <PostForm />
                }
              />
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
