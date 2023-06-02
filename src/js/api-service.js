import shortid from 'shortid';

export const fetchAllUsers = () => {
    console.log('fetchAllUsers');
};

export const fetchUserById = () => {
    console.log('fetchUserById');
};

export const updateUserById = () => {
    console.log('updateUserById');
};

export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name
    }
    console.log(user);
}

