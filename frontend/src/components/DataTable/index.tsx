import axios from "axios";
import Pagination from "components/Pagination/pagination";
import { useEffect, useState } from "react";
import { DadosTable } from "types/sale";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    const [page, setPage] = useState<DadosTable>([{
        score: 0,
        show: {
            name: '',
            type: '',
            language: '',
            id: 0,
            premiered: ''
        }
    }]);

    useEffect(() => {
        axios.get(`${BASE_URL}search/shows?q=star%20wars`)
            .then(response => {
                setPage(response.data);
            });

    }, []);


    return (

        < >
            <Pagination />
            <div className="table-responsive">

                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.map(item => (
                            <tr key={item.show.id}>
                                <td>{item.show.premiered}</td>
                                <td>{item.show.name}</td>
                                <td>{item.show.language}</td>
                                <td>{item.show.id}</td>
                                <td>{item.show.id}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;