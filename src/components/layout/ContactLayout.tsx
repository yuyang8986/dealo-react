import React, { useEffect, useState } from 'react';
import {
  ContactNavItem,
  ContactNavLink,
  ContactNavList,
} from './StyledContactLayout';
import { useLocation } from 'react-router-dom';
import { AddItemButton } from '../button/StyledButton';
import CommonModal from '../../features/modal/CommonModal';
import AddEmployeeForm from '../form/AddEmployeeForm';

interface MenuItem {
  link: string;
  name: string;
}

const menuList: MenuItem[] = [
  {
    link: '/contact/company',
    name: 'Company',
  },
  {
    link: '/contact/person',
    name: 'Person',
  },
  {
    link: '/contact/employee',
    name: 'Employee',
  },
];

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [buttonText, setButtonText] = useState<string>('company');

  useEffect(() => {
    const splitPathname = pathname.split('/').filter(Boolean);
    setButtonText(splitPathname[1]);
  }, [pathname]);

  const closeModal = (e: any) => setIsModalOpen(false);

  return (
    <div>
      <div className='card'>
        <div className='menu pl-5 pt-4'>
          <CommonModal open={isModalOpen} close={closeModal}>
            {buttonText === 'employee' && (
              <AddEmployeeForm close={closeModal} />
            )}
          </CommonModal>

          <div className='d-flex justify-content-end'>
            <AddItemButton onClick={() => setIsModalOpen(true)}>
              Add {buttonText}
            </AddItemButton>
          </div>
          <ContactNavList>
            {menuList.map((item: MenuItem) => (
              <ContactNavItem
                active={pathname === item.link}
                key={Math.random()}
              >
                <ContactNavLink to={item.link}>{item.name}</ContactNavLink>
              </ContactNavItem>
            ))}
          </ContactNavList>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContactLayout;
