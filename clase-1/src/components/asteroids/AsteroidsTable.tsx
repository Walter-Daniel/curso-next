import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { useContext, useState } from "react";
import { AsteroidsContext } from "../../context/AsteroidsContext";

export const AsteroidsTable = () => {

  const { asteroids } = useContext(AsteroidsContext);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  }; 

  return (
    <TableContainer sx={{ marginTop:'3rem' }}>
        
        <Table sx={{ minHeight:'100vh'}}>
            <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Absolute Magnitude</TableCell>
                <TableCell>Estimated Diameter (km)</TableCell>
                <TableCell>Is Potentially Hazardous?</TableCell>
            </TableRow>
            </TableHead>
            {asteroids && (
            <TableBody>
            {asteroids.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((object) => (
                <TableRow key={object.id}>
                <TableCell>{object.id}</TableCell>
                <TableCell>{object.name}</TableCell>
                <TableCell>{object.absolute_magnitude_h}</TableCell>
                <TableCell>{object.estimated_diameter.kilometers.estimated_diameter_min} - {object.estimated_diameter.kilometers.estimated_diameter_max}</TableCell>
                <TableCell>{object.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</TableCell>
                </TableRow>
            ))}
            </TableBody>
            )}
        </Table>
        <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={asteroids.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </TableContainer>
  )
}
