import React from 'react';
import { Header } from './Header';
export default {
    title: 'Example/Header',
    component: Header,
};
const Template = (args) => React.createElement(Header, Object.assign({}, args));
export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {};
//# sourceMappingURL=Header.stories.js.map