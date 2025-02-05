import React, { useState } from 'react';
import TableComponent from './TableComponent'; 

export default function FormAp() {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [data, setData] = useState([]);
    

    const handleSubmit = (e) => {
      e.preventDefault();  
            const newData = { id: data.length + 1, name, job, email, age };
            setData([...data, newData]);
            setName('');
            setJob('');
            setEmail('');
            setAge('');
    };

    return (
        <div style={{ backgroundColor: '#6c757d', padding: '30px' }}>
            <h2 style={{ textAlign: 'center' }}>Data Entry Form</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ margin: '10px', padding: '10px', width: '300px' }}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter Your Job"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    style={{ margin: '10px', padding: '10px', width: '300px' }}
                    required
                />
                <input
                    type="email"
                    placeholder="Enter Your E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ margin: '10px', padding: '10px', width: '300px' }}
                    required
                />
                <input
                    type="number"
                    placeholder="Enter Your Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={{ margin: '10px', padding: '10px', width: '300px' }}
                    required
                />
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Add Data
                </button>
            </form>

            <TableComponent data={data} />
        </div>
    );
}

