const GetUserMainRoleFromLocalStorage = () => {
  const userRoles =  localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_ROLES);
  return userRoles[0];
}

export default GetUserMainRoleFromLocalStorage;