import { useState } from "react";
import "./App.css";
import {BiSolidSortAlt} from "react-icons/bi"

const vehicle = [
  {
    id: 132456,
    type: "Scooter",
    lock: "Lock",
    speed: 0,
    battery: 100,
    status: "PARKING",
    location: "3.142,012",
    lastUpdate: "2019-07-02 9.00AM",
  },
  {
    id: 987654,
    type: "Scooter",
    lock: "Unlock",
    speed: 5,
    battery: 75,
    status: "MOVING",
    location: "2.125,114",
    lastUpdate: "2019-07-02 10.00AM",
  },
  {
    id: 569825,
    type: "Scooter",
    lock: "Unlock",
    speed: 0,
    battery: 50,
    status: "IDLING",
    location: "4.125,114",
    lastUpdate: "2019-07-02 10.00AM",
  },
  {
    id: 125864,
    type: "Scooter",
    lock: "Lock",
    speed: 0,
    battery: 15,
    status: "TOWING",
    location: "5.125,114",
    lastUpdate: "2019-07-02 10.00AM",
  },
  {
    id: 125864,
    type: "Scooter",
    lock: "Lock",
    speed: 0,
    battery: 0,
    status: "TOWING",
    location: "5.125,114",
    lastUpdate: "2019-07-02 10.00AM",
  },
];

function App() {
  const [sortKey, setSortKey] = useState(null)
  let sortedList = [...vehicle]

  if (sortKey !== null) {
    sortedList.sort((a,b) => {
      if (a[sortKey.key] < b[sortKey.key]){
        return sortKey.direction === "ascending" ? -1 : 1;
      }
      if (a[sortKey.key] > b[sortKey.key]){
        return sortKey.direction === "ascending" ? 1 : -1;
      }
      return 0;
    })
  }

  const executeSort = key => {
    let direction ="ascending"
    if (sortKey !== null){
    if (sortKey.key === key && sortKey.direction === "ascending"){
      direction ="descending"
    }
  }
    setSortKey({key, direction})
  }

  return (
    <>
    <div className="container">
      <h1 className="title">Vehicle Management</h1>
      <div className="btn-cont">
      <button className="addBtn">+ New Vehicle</button>
      </div>
      <div className="table-cont">
      <table>
        <thead>
          <tr>
          <th> </th>
          <th><button onClick={() => executeSort("id")}>Vehicle ID <BiSolidSortAlt/></button></th>
          <th><button onClick={() => executeSort("type")}>Type  <BiSolidSortAlt/></button></th>
          <th><button onClick={() => executeSort("lock")}>Lock/ Unlock  <BiSolidSortAlt/></button></th>
          <th><button onClick={() => executeSort("speed")}>Current Speed  <BiSolidSortAlt/></button></th>
          <th><button onClick={() => executeSort("battery")}>Battery Level  <BiSolidSortAlt/></button></th>
          <th><button onClick={() => executeSort("status")}>Status  <BiSolidSortAlt/></button></th>
          <th><button onClick={() => executeSort("location")}>Location  <BiSolidSortAlt/></button></th>
          <th><button onClick={() => executeSort("lastUpdate")}>Last Updated  <BiSolidSortAlt/></button></th>
          </tr>
        </thead>
        <tbody>
          {sortedList.map((e, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{e.id}</td>
              <td>{e.type}</td>
              <td>{e.lock}</td>
              <td>{e.speed} km/h</td>
              <td>{e.battery}%</td>
              <td>{e.status}</td>
              <td>{e.location}</td>
              <td>{e.lastUpdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
}

export default App;
