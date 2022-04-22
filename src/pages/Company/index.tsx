import moment from 'moment';
import React, { useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaAngleDown, FaEllipsisV } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import EditCompany from '../../components/form/EditCompany';
import ContactLayout from '../../components/layout/ContactLayout';
import {
  ActionMenuItem,
  ActionMenuList,
  ActionMenuWrapper,
  DownIconWrapper,
  TableMoreIconWrapper,
  TableText,
  Time,
} from '../../components/styledComponents/table';
import CommonModal from '../../features/modal/CommonModal';
import { useOutsideAlerter } from '../../hook/useOutsideAlerter';
import { deleteCompany as removeCompany } from './action';
import CompanyInfo from './CompanyInfo';

interface CompanyItem {
  id: any;
  name: string;
  contacts: any;
  created: any;
  data: any;
  setCompanyId: Function;
  setActionMenuId: Function;
  openEditModal: Function;
  deleteCompany: Function;
  actionMenuId: any;
}

const columns = [
  {
    name: 'Name',
    selector: (row: CompanyItem) => row.name,
    sortable: true,
  },
  {
    name: 'Contacts',
    selector: (row: CompanyItem) => row.contacts,
    sortable: true,
    cell: (row: CompanyItem) => (
      <div className='d-flex justify-content-center gap-3 align-items-center'>
        {row.contacts.length > 0 ? (
          <>
            <p className='mb-0'>{row.contacts[0].name}</p>
            <DownIconWrapper className='mb-0'>
              <FaAngleDown />
            </DownIconWrapper>
          </>
        ) : (
          <p className='mb-0'>{''}</p>
        )}
      </div>
    ),
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
        setCompanyId,
        id,
        openEditModal,
        actionMenuId,
        setActionMenuId,
        deleteCompany,
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
                setCompanyId(id);
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
                    deleteCompany(id);
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

const Company = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<any>({});
  const [companyId, setCompanyId] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [actionMenuId, setActionMenuId] = useState<String | undefined>('');
  const dispatch = useAppDispatch();
  const openEditModal = () => {
    setEditModal(true);
    setActionMenuId('');
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const deleteCompany = (id: any) => {
    dispatch(removeCompany(id));
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setActionMenuId);

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
    return state.company.all.map((item: any) => {
      const { id, name, peoples } = item;
      return {
        id,
        name,
        contacts: peoples,
        created: Date.now(),
        data: item,
        setCompanyId,
        openEditModal,
        actionMenuId,
        setActionMenuId,
        deleteCompany,
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
        <CompanyInfo data={selectedData} />
      </CommonModal>
      <CommonModal open={editModal} close={closeEditModal}>
        <EditCompany companyId={companyId} />
      </CommonModal>
    </ContactLayout>
  );
};

export default Company;
