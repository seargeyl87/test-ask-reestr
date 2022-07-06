import React, {useEffect, useMemo, useState} from 'react';
import { Form, Table } from "react-bootstrap";
import './EditableTable.styles.scss';
import TablePagination from "../TablePagination";

const EditableTable = ({ columns, rows }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [rowsState, setRowsState] = useState(rows);
  const [editedRow, setEditedRow] = useState();

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage >= rows.length / pageSize)
      setCurrentPage(1);
  }, [pageSize])

  useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    const newData = rows.slice(firstPageIndex, lastPageIndex);

    setRowsState(newData);
  }, [currentPage, pageSize]);


  const handleOnChangeField = (e, rowID) => {
    const { name: fieldName, value } = e.target;

    setEditedRow({
      id: rowID,
      [fieldName]: value
    })
  }


  return (
    <>
      <Table striped bordered hover>
        <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column.field}>{ column.fieldName }</th>
          })}
        </tr>
        </thead>
        <tbody>
        {rowsState.map((row, index) => {
          if (index < pageSize) {
            return <tr key={row.id}>
              <td>
                {row.id}
              </td>
              <td>
                { isEditMode && rowIDToEdit === row.id
                  ? <Form.Control
                    type='text'
                    defaultValue={editedRow ? editedRow.name : row.name}
                    id={row.id}
                    name='name'
                    onChange={ (e) => handleOnChangeField(e, row.id) }
                  />
                  : row.name
                }
              </td>
              <td>
                { isEditMode && rowIDToEdit === row.id
                  ? <Form.Control
                    type='text'
                    defaultValue={editedRow ? editedRow.code : row.code}
                    id={row.id}
                    name='code'
                    onChange={ (e) => handleOnChangeField(e, row.id) }
                  />
                  : row.code
                }
              </td>
              <td>
               
                { isEditMode && rowIDToEdit === row.id
                  ? <Form.Select onChange={e => handleOnChangeField(e, row.id)} name="class" defaultValue={row.class}>
                    <option value='Admin'>Admin</option>
                    <option value='Editor'>Editor</option>
                    <option value='Subscriber'>Subscriber</option>
                    
                  </Form.Select>
                  : row.class
                }
              </td>
          
              <td>
              { isEditMode && rowIDToEdit === row.id
                  ? <Form.Control
                    type='text'
                    defaultValue={editedRow ? editedRow.Date : row.Date}
                    id={row.id}
                    name='Date'
                    onChange={ (e) => handleOnChangeField(e, row.id) }
                  />
                  : row.Date
                }
                
              </td>
              <td>
              { isEditMode && rowIDToEdit === row.id
                  ? <Form.Control
                    type='text'
                    defaultValue={editedRow ? editedRow.adds : row.adds}
                    id={row.id}
                    name='adds'
                    onChange={ (e) => handleOnChangeField(e, row.id) }
                  />
                  : row.adds
                } 
              </td>
              
            </tr>
          }
        })}
        </tbody>
      </Table>
      <TablePagination
        totalCount={rows.length}
        pageSize={pageSize}
        changeItemsPerPage={page => setPageSize(page)}
        onPageChange={page => setCurrentPage(page)}
        currentPage={currentPage}
      />
    </>
  );
};

export default EditableTable;