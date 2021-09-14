import "./App.scss";
import Search from "./components/search/Search";
import Buttons from "./components/buttons/Buttons";
import Stories from "./components/stories/Stories";

function App() {
  return (
    <div className="App">
      <Search />
      <Buttons />
      <Stories />
    </div>
  );
}

export default App;
