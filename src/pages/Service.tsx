import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/Users/usersThunk';
import { RootState, AppDispatch } from '../store/store';

function Service() {
    const dispatch = useDispatch<AppDispatch>();
    const { list, loading, error } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"30px",justifyContent:"center"}}>
                {list.map((user) => (
                    <div key={user.id}>
                        <img width={"240px"} style={{borderRadius:"50%"}} src={user.avatar} alt="avatar" />
                        <p>name:{user.name}</p>
                        <p>email:{user.email}</p>
                        <p>role:{user.role}</p>
                        <p>{user.creationAt}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
