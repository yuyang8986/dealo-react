import React from 'react';
import { fireEvent } from '@testing-library/react';
import {render} from "../../../utils/test-utils"
import IconEnum from '../../../models/IconEnum';
import MenuItem from "./index";
import MenuItemDataType from "../../../models/MenuItemDataType";

test('render', () =>{
    const homeButton: MenuItemDataType = {linkAddress:"/about", linkText:"About",  icon: IconEnum.Home};
    const {getByText} = render(
            <MenuItem {...homeButton}/>
    )

    const link = getByText("About");
    fireEvent.click(link);
    expect(window.location.href).toContain("/about");
});