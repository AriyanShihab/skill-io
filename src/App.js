import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Components/Routes/Routes";
import Root from "./Root/Root";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
