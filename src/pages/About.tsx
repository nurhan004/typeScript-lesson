import React, { useState, useEffect } from 'react';

const Api = "https://reqres.in/api/users";

function About() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(Api);
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        setUsers(data.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.first_name} {user.last_name}</p>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default About;
