import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaEllipsisV } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import ContactLayout from '../../components/layout/ContactLayout';
import {
  ActionMenuItem,
  ActionMenuList,
  ActionMenuWrapper,
  TableMoreIconWrapper,
  TableText,
  Time,
} from '../../components/styledComponents/table';
import CommonModal from '../../features/modal/CommonModal';
import { useOutsideAlerter } from '../../hook/useOutsideAlerter';
import { deleteEmployeeAction, fetchEmployees } from './action';

interface EmployeeItem {
  id: any;
  name: string;
  created: any;
  setEmployeeId: Function;
  setActionMenuId: Function;
  openEditModal: Function;
  deleteEmployee: Function;
  actionMenuId: any;
}

const columns = [
  {
    name: 'Employee Name',
    selector: (row: EmployeeItem) => row.name,
    sortable: true,
    cell: (row: EmployeeItem) => <TableText>{row.name}</TableText>,
  },
  {
    name: 'Date Created',
    selector: (row: EmployeeItem) => row.created,
    sortable: true,
    cell: (row: EmployeeItem) => (
      <div className='mt-3'>
        <TableText className='mb-0'>
          {row.created ? moment(row.created).format('MMM DD , YYYY') : ''}
        </TableText>
        <Time>{row.created ? moment(row.created).format('h:mm a') : ''}</Time>
      </div>
    ),
  },
  {
    button: true,
    cell: (row: EmployeeItem) => {
      const {
        setEmployeeId,
        id,
        openEditModal,
        actionMenuId,
        setActionMenuId,
        deleteEmployee,
      } = row;
      return (
        <div
          style={{
            width: '80px',
          }}
        >
          <TableMoreIconWrapper>
            <FaEllipsisV
              onClick={(): any => {
                setEmployeeId(id);
                setActionMenuId(id);
              }}
            />
          </TableMoreIconWrapper>
          {id === actionMenuId && (
            <ActionMenuWrapper>
              <ActionMenuList>
                <ActionMenuItem onClick={() => openEditModal()}>
                  Edit
                </ActionMenuItem>
                <ActionMenuItem
                  onClick={() => {
                    deleteEmployee(id);
                  }}
                >
                  Delete
                </ActionMenuItem>
              </ActionMenuList>
            </ActionMenuWrapper>
          )}
        </div>
      );
    },
  },
];

const Employee = () => {
  const dispatch = useAppDispatch();

  const [employeeId, setEmployeeId] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [actionMenuId, setActionMenuId] = useState<String | undefined>('');

  const openEditModal = () => {
    setEditModal(true);
    setActionMenuId('');
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const deleteEmployee = (id: any) => {
    dispatch(deleteEmployeeAction(id));
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setActionMenuId);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const items: EmployeeItem[] = useSelector((state: RootState) => {
    const employees = state.employees.employees;

    return employees.map((item: any) => {
      const { name, id, createdDate } = item;
      return {
        name,
        id,
        created: createdDate,
        setEmployeeId,
        openEditModal,
        actionMenuId,
        setActionMenuId,
        deleteEmployee,
      };
    });
  });
  return (
    <ContactLayout>
      <div className='mt-4 px-5'>
        <div ref={wrapperRef}>
          <DataTable columns={columns} data={items} pagination />
        </div>
      </div>
      <CommonModal open={editModal} close={closeEditModal}>
        <h2>{employeeId}</h2>
      </CommonModal>
    </ContactLayout>
  );
};

export default Employee;
