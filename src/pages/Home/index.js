import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getData } from "../../lib/api";
import TopComponent from "../../components/navTop/TopComponent";

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
  const [lastMovements, setLastMovements] = useState([0]);
  const [dataMovements, setDataMovements] = useState();
  const [lastTithes, setLastTithes] = useState([0]);
  const [dataTithes, setDataTithes] = useState();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getLastMonth = async () => {
      const response = await getData(
        `${process.env.REACT_APP_APIURL}/movements/months`,
        token
      );
      const remaining = Number(response.remainingIncome.slice(1));
      const output = Number(response.total_output.slice(1));
      setLastMovements([remaining, output]);
    };

    const getLastTithe = async () => {
      const response = await getData(
        `${process.env.REACT_APP_APIURL}/tithes/percents`,
        token
      );
      setLastTithes([
        response.tenPercent,
        response.twoPercent,
        response.fivePercent,
      ]);
    };

    getLastMonth();
    getLastTithe();
  }, []);

  useEffect(() => {
    if (lastMovements.length > 0) {
      setDataMovements({
        labels: ["Ingreso restante", "Salida"],
        datasets: [
          {
            data: lastMovements,
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [lastMovements]);

  useEffect(() => {
    if (lastTithes.length > 0) {
      setDataTithes({
        labels: ["10%", "2%", "5%"],
        datasets: [
          {
            data: lastTithes,
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [lastTithes]);

  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <section className="container">
      <TopComponent back={false} />
      <div className="container-charts mx-6 mt-4">
        <div className="el-chart">
          <h3 className="subtitle is-4 ">Movimiento del ultimo mes</h3>
          {dataMovements && (
            <div style={{ width: 350, height: 350 }}>
              <Pie data={dataMovements} />
            </div>
          )}
        </div>
        <div className="el-chart">
          <h3 className="subtitle is-4 ">Diezmos del ultimo mes</h3>
          {dataTithes && (
            <div style={{ width: 350, height: 350 }}>
              <Pie data={dataTithes} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
