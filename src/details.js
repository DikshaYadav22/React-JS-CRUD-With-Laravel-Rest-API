import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

const Details = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/forms");
    setUser(result.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/forms/${id}`);
    loadUsers();
  };
  return (
    <div className="container m-5">
      <Table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td colSpan="2">
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={() => deleteUsers(user.id)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Details;
