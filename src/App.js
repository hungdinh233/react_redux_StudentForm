import { Provider } from "react-redux";
import { store } from "./Redux/configStore";
import GiaoDien from "./ThongTinSinhVien/GiaoDien";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GiaoDien />
      </Provider>
    </div>
  );
}

export default App;
