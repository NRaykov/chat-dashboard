/**
 * SidebarModel, @member of interface
 */
const SidebarModel = {
  sidebar: [
    {
      id: 0,
      name: 'dashboard',
      icon: 'placeholder',
      title: 'Dashboard',
    },
    {
      id: 1,
      name: 'tasks',
      icon: 'placeholder',
      title: 'My Tasks',
    },
    {
      id: 2,
      name: 'projects',
      icon: 'placeholder',
      title: 'My Projects',
    },
    {
      id: 3,
      name: 'people',
      icon: 'placeholder',
      title: 'People',
    },
    {
      id: 4,
      name: 'statistics',
      icon: 'placeholder',
      title: 'Statistics',
    },
    {
      id: 5,
      name: 'help',
      icon: 'placeholder',
      title: 'Help',
    },
    {
      id: 6,
      name: 'settings',
      icon: 'placeholder',
      title: 'Settings',
    },
  ],
};

/**
 * A frozen object can no longer be changed;
 * freezing an object prevents new properties from being added to it,
 * existing properties from being removed
 */
Object.freeze(SidebarModel);

export default SidebarModel;
