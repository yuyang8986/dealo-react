import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaEllipsisV } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
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
import { deletePerson as removePerson, fetchPerson } from './action';
import PersonInfo from './PersonInfo';

interface CompanyItem {
  id: any;
  name: string;
  contact: string;
  created: any;
  data: any;
  setPersonId: Function;
  setActionMenuId: Function;
  openEditModal: Function;
  deletePerson: Function;
  actionMenuId: any;
}

const columns = [
  {
    name: 'Person Name',
    selector: (row: CompanyItem) => row.name,
    sortable: true,
  },
  {
    name: 'Contacts',
    selector: (row: CompanyItem) => row.contact,
    sortable: true,
  },
  {
    name: 'Date Created',
    selector: (row: CompanyItem) => row.created,
    sortable: true,
    cell: (row: CompanyItem) => (
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
    cell: (row: CompanyItem) => {
      const {
        setPersonId,
        id,
        openEditModal,
        actionMenuId,
        setActionMenuId,
        deletePerson,
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
                setPersonId(id);
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
                    deletePerson(id);
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

const Person = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<any>({});

  const [personId, setPersonId] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [actionMenuId, setActionMenuId] = useState<String | undefined>('');

  const openEditModal = () => {
    setEditModal(true);
    setActionMenuId('');
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const deletePerson = (id: any) => {
    dispatch(removePerson(id));
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setActionMenuId);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPerson());
  }, [dispatch]);

  const closeInfoModal = () => {
    setIsModalOpen(false);
    setSelectedData({});
  };

  const openInfoModal = (data: any) => {
    setSelectedData(data);
    setIsModalOpen(true);
    console.log(data);
  };
  const items: CompanyItem[] = useSelector((state: RootState) => {
    return state.persons.all.map((item: any) => {
      const { name, phone, id } = item;
      return {
        name,
        id,
        contact: phone,
        created: Date.now(),
        data: item,
        setPersonId,
        openEditModal,
        actionMenuId,
        setActionMenuId,
        deletePerson,
      };
    });
  });
  return (
    <ContactLayout>
      <div className='mt-4 px-5'>
        <div ref={wrapperRef}>
          <DataTable
            columns={columns}
            data={items}
            pagination
            onRowClicked={(row: CompanyItem) => openInfoModal(row.data)}
          />
        </div>
      </div>
      <CommonModal open={isModalOpen} close={closeInfoModal}>
        <PersonInfo data={selectedData} />
      </CommonModal>
      <CommonModal open={editModal} close={closeEditModal}>
        <h2>Person Edit</h2>
        <h2>{personId}</h2>
        <p>Please provide the design</p>
      </CommonModal>
    </ContactLayout>
  );
};

export default Person;
