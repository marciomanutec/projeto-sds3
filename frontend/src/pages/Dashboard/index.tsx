import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        < >
        <NavBar />
        <div className="container">
          <h1 className="text-primary py-3">Dashboard Manutec</h1>
          <p>Retorceder nunca render-se jamais...</p>
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Percent %</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Percent %</h5>
              <DonutChart />
            </div>
          </div>
  
          <div className="py-3">
  
            <h2 className="text-primary">Todas Vendas</h2>
            <hr />
          </div>
          <DataTable />
        </div>
        <Footer />
  
      </ >
    );
}

export default Dashboard;
