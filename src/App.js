
import DataContextProvider from "./context/DataContextProvider";
import MainPage from "./screens";


function App() {
 
  return (
    <DataContextProvider>
      <MainPage />
    </DataContextProvider>
  );
}

export default App;
