import DataTable from "components/DataTable";
import Footer from "components/Footer/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    < >
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Manutec de Volta...</h1>
        <p>Retorceder nunca render-se jamais...</p>
        <DataTable />
      </div>
      <Footer />

    </ >
  );
}

export default App;
