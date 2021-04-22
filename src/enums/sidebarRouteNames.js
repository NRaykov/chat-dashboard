const SidebarRouteNames = {
  DASHBOARD: 'dashboard',
  MY_TASKS: 'tasks',
  USER_PROFILE: 'user-profile',
  MY_PROJECTS: 'projects',
  PEOPLE: 'people',
  STATISTICS: 'statistics',
  HELP: 'help',
  SETTINGS: 'settings',
};

/**
 * A frozen object can no longer be changed;
 * freezing an object prevents new properties from being added to it,
 * existing properties from being removed
 */
Object.freeze(SidebarRouteNames);

export default SidebarRouteNames;
