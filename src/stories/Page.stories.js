import React from 'react';
import { Page } from './Page';
import * as HeaderStories from './Header.stories';
export default {
    title: 'Example/Page',
    component: Page,
};
const Template = (args) => React.createElement(Page, Object.assign({}, args));
export const LoggedIn = Template.bind({});
LoggedIn.args = Object.assign({}, HeaderStories.LoggedIn.args);
export const LoggedOut = Template.bind({});
LoggedOut.args = Object.assign({}, HeaderStories.LoggedOut.args);
//# sourceMappingURL=Page.stories.js.map