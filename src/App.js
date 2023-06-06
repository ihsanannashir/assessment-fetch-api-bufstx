import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [volcano, setVolcano] = useState([]);
  const fetchData = () => {
    fetch(process.env.REACT_APP_API)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVolcano(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Table Data</h1>
      <table>
        <thead>
          <tr>
            <th>nama</th>
            <th>bentuk</th>
            <th>tinggi_meter</th>
            <th>estimasi_letusan_terakhir</th>
            <th>geolokasi</th>
          </tr>
        </thead>
        {volcano.map((item, idx) => {
          return (
            <tbody key={idx}>
              <tr>
                <td>{item.nama}</td>
                <td>{item.bentuk}</td>
                <td>{item.tinggi_meter}</td>
                <td>{item.estimasi_letusan_terakhir}</td>
                <td>{item.geolokasi}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
