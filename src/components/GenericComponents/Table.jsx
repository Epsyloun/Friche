import React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'PaleVioletRed ',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:hover': {
      backgroundColor: theme.palette.action.hover,

    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function handlerTableClick(index){
    console.log(index);
  }

function TableComponent({columns, rows}) {
  console.log('tabla')
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper className="orange-table" sx={{ width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{ maxHeight: 'auto' }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead >
                    <StyledTableRow>
                        {columns.map((column) => (
                        <StyledTableCell
                            align="left"
                            key={column.id}
                            style={{ minWidth: column.minWidth }}
                        >
                            {column.label}
                        </StyledTableCell>
                        ))}
                    </StyledTableRow>
                    </TableHead>
                <TableBody>
                {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                    return (
                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                            const value = row[column.id];
                            return (
                            <StyledTableCell onClick={() => handlerTableClick(row.nombre)}   key={column.id} align="left">
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                            </StyledTableCell>
                            );
                        })}
                        </StyledTableRow>
                    );
                    })}
                </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
     );
}
export {TableComponent};