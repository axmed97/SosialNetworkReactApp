import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MyRouter from "./router/MyRouter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByToken } from "./redux/actions/UserAction";

function App() {
  const { userinfo } = useSelector((x) => x.user);
  const { user } = useSelector((x) => x.auth);

  const dispatch = useDispatch();

  const getUserInfo = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token != null) {
      dispatch(getUserByToken(token));
    }
    if (token == null) {
      dispatch(getUserByToken(""));
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MyRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;