import Header from "../header/Header";
import Works from "../works/Works";
import AddWork from "../addWork/AddWork";
import Register from "../register/Register";
import Login from "../login/Login";
import Reset from "../reset/Reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = ()=> {
  return (
    <>
			<Router>
        <Header/>
				<Routes>
					<Route path="/" element={<Login />} />
          <Route path="/works" element={<Works />} />
          <Route path="/add-work" element={<AddWork />} />
          <Route path="/update-work/:id" element={<AddWork />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-reset" element={<Reset />} />
				</Routes>
			</Router>
		</>
  );
} 

export default App;
