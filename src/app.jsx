import { Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route exact path="/" element={<Login authService={authService} />} />
        <Route
          path="/maker"
          element={<Maker FileInput={FileInput} authService={authService} />}
        />
      </Routes>
    </div>
  );
}

export default App;
