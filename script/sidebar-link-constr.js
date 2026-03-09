import { SideBarLink } from "./sidebar-link-class.js";

const sideBarLinkArr = { 
  top: [
    new SideBarLink('Home', 'icons/home.svg'),
    new SideBarLink('Profile', 'icons/profile.svg'),
    new SideBarLink('Messages', 'icons/message.svg'),
    new SideBarLink('History', 'icons/history.svg'),
    new SideBarLink('Tasks', 'icons/tasks.svg'),
    new SideBarLink('Communinities', 'icons/community.svg')
  ],
  bottom: [
    new SideBarLink('Settings', 'icons/settings.svg'),
    new SideBarLink('Support', 'icons/support.svg'),
    new SideBarLink('Privacy', 'icons/privacy.svg')
  ]
};

export { sideBarLinkArr }