import React from 'react';

const ContingencyTable = ({ data }) => {

    const contingencyData = [
        { year: 2020, categoryA: 1010, categoryB: 9949 },
        { year: 2021, categoryA: 1330, categoryB: 14564 },
        { year: 2022, categoryA: 1679, categoryB: 17420 },
        { year: 2023, categoryA: 819, categoryB: 12827 },
      ];


    return (
      <table className="contingency-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Played And Released in the Same Year</th>
            <th>Total Play Count</th>
          </tr>
        </thead>
        <tbody>
          {contingencyData.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.categoryA}</td>
              <td>{row.categoryB}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  

export default ContingencyTable