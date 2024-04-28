import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Action from "./pages/Action";
import Animation from "./pages/Animation";
import Horror from "./pages/Horror";
import Comedy from "./pages/Comedy";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Romance from "./pages/Romance";
import SharedLayout from "./pages/SharedLayout";

function Parent() {
  return (
    <header className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/action" element={<Action />} />
            <Route path="/comedy" element={<Comedy />} />
            <Route path="/romance" element={<Romance />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/horror" element={<Horror />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </header>
  );
}

export default Parent;
