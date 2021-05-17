import React, { useState, useEffect } from "react";
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Favorecido', width: 250 },
  { field: 'cpf_cnpj', headerName: 'CPF/CNPJ', width: 160 },
  { field: 'bank_code', headerName: 'Banco', type: 'number', width: 130 },
  { field: 'agency', headerName: 'Agência', width: 150 },
  { field: 'account', headerName: 'CC', width: 150 },
  { field: 'status', headerName: 'Status Favorecido', width: 150 },
];

export default function CustomerDatatable() {
  const [customers, setCustomers] = useState([]);

  // Similar a componentDidMount e componentDidUpdate:
  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/customer`)
        .then(response => response.json())
        .then(responseItens => {
          setCustomers(responseItens);
        })
    } catch (error) {
      console.log(error);
    }    
  });

  return (
    <div style={{ height: 400, margin: '0 auto', width: "90%" }}>      
      <DataGrid rows={customers} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}