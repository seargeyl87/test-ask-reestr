import React, {useEffect, useMemo, useState, useContext} from 'react';
import { Form, Table } from "react-bootstrap";
import './EditableTable.styles.scss';
import TablePagination from "../TablePagination";
import Context from '../../Context';

let EditableTable = ({ columns, rows, row , stateSearch}) => {
  let {searchQuery, setSearchQuery} =  useContext(Context);
  let [isEditMode, setIsEditMode] = useState(false);
  let [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  let [rowsState, setRowsState] = useState(rows);
  let [editedRow, setEditedRow] = useState();
  let [pageSize, setPageSize] = useState(10);
  let [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage >= rows.length / pageSize)
      setCurrentPage(1);
   }, [pageSize])

  useEffect(() => {
    if(stateSearch) {
     setPageSize(5);
   } else {
     setPageSize(10)
   }
 
   }, [stateSearch]);

  useEffect(() => {
     if(searchQuery) {
      setPageSize(5);
    } else {
        setPageSize(10)
    }
    
    }, [searchQuery]);




  useMemo(() => {
    let firstPageIndex = (currentPage - 1) * pageSize;
    let lastPageIndex = firstPageIndex + pageSize;

    let newData = rows.slice(firstPageIndex, lastPageIndex);

    setRowsState(newData);
  }, [currentPage, pageSize]);


  let handleOnChangeField = (e, rowID) => {
    let { name: fieldName, value } = e.target;

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