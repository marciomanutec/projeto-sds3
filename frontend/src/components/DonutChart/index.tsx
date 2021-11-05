import axios from 'axios';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { Fornecedores } from 'types/fornecedor';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[],
    series: number[];
}

const DonutChart = () => {

    //Forma certa
    const [chartData, setChartData] = useState<ChartData>({ labels: ['Cudinha'], series: [852088] });

    // Forma errada
    // let chartData: ChartData = { labels: ['Cudinha'], series: [85200.20] };



    // forma errada
    axios.get(`${BASE_URL}search/shows?q=star%20wars`)
        .then(response => {
            const data = response.data as SaleSum[]; // cast
            const datafornec = response.data as Fornecedores[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);
            const fornecNome = datafornec.map(f => f.fornecedor);

            //  chartData = { labels: ['Gilmar'], series: [100000] };
            console.log(chartData.labels);
            console.log(chartData.series);
            //  setChartData({ labels: ['Gilmar'], series: [120000] })

            //  console.log(response.data)


        })

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088, 852088],
        labels: ['Márcio Manutec', 'Gilmar Alves', 'Cuda Cat', 'Mônica Cota', 'Tipitica', 'Cuda']
    }

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            //   options={{ ...options, labels: mockData.labels }}
            //   series={mockData.series}
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;