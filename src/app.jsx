import { Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route exact path="/" element={<Login authService={authService} />} />
        <Route path="/maker" element={<Maker authService={authService} />} />
      </Routes>
    </div>
  );
}

export default App;
