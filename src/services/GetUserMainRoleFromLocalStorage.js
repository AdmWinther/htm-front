const GetUserMainRoleFromLocalStorage = () => {
    const userRolesString =  localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_ROLES);
    const userRolesArray = userRolesString.split(",");
    const userRolesArrayLowercase = userRolesArray.map(role => role.toLowerCase());
    if(userRolesArrayLowercase.includes('admin')){
        return 'admin';
    } else if(userRolesArrayLowercase.includes('superuser')){
        return 'superuser';
    } else if(userRolesArrayLowercase.includes('supporter')){ 
        return 'supporter';
    }else {
        return 'user';
    }
}

export default GetUserMainRoleFromLocalStorage;