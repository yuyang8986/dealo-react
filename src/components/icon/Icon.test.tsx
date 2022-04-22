import React from 'react';
import { render } from '@testing-library/react';
import Icon from "./index";
import IconEnum from "../../models/IconEnum";

test('renders icon', () =>{
    const {container } = render(
        <Icon icon={IconEnum.Home}/>
    );

    const path = container.querySelector('path');
    expect(path).toHaveAttribute('d', IconEnum.Home);
});