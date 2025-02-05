import React from 'react'

export default function TableComponent({data}) {
  return (
    <div style={{ marginTop: '20px' }}>
    <h3 style={{ textAlign: 'center' }}>Data Table</h3>
    <table style={{ width: '100%', border: '1px solid #ddd', marginTop: '20px' }}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Job</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.job}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}
