import React from 'react';
import './results.scss'

const Results = (props:any) => {
  let valid
  let number

  props.valid ? valid = "Yes" : valid = "No"
  props.valid ? number = props.number : number = ""
  
  return (
    <div className="parent-div">
      <div className="table-div">
        <table>
          <tr>
            <th>Valid</th>
            <td>{valid}</td>
          </tr>
          <tr>
            <th>Country Code</th>
            <td>{props.country_code}</td>
          </tr>
          <tr>
            <th>Number</th>
            <td>{number}</td>
          </tr>
          <tr>
            <th>Carrier</th>
            <td>{props.carrier}</td>
          </tr>
          <tr>
            <th>Country Name</th>
            <td>{props.country_name}</td>
          </tr>
          <tr>
            <th>Country Prefix</th>
            <td>{props.country_prefix}</td>
          </tr>
          <tr>
            <th>International Format</th>
            <td>{props.international_format}</td>
          </tr>
          <tr>
            <th>Line Type</th>
            <td>{props.line_type}</td>
          </tr>
          <tr>
            <th>Local Format</th>
            <td>{props.local_format}</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>{props.location}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Results;