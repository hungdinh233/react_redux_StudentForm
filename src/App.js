import { Provider } from "react-redux";
import { store } from "./Redux/configStore";
import GiaoDienTTSV from "./ThongTinSinhVien/GiaoDienTTSV";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GiaoDienTTSV/>
      </Provider>
    </div>
  );
}

export default App;
