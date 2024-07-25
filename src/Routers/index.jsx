import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Users from "../containers/Users";
import NotFound from "../containers/NotFound";
import AddUser from "../containers/AddUser";
import Edit from "../containers/Edit";

const Routers = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="users" element={<Users />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/edit/:userId" element={<Edit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Routers;
