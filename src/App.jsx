import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let id = nanoid();
    const payload = { ...form, id };
    users.push(payload);
    setUsers([...users]);
    event.target.reset();
  };
  const deleteUsers = (id) => {
    let new_users = users.filter((item) => item.id != id);
    setUsers([...new_users]);
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <form id="submit" onSubmit={handleChange}>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-control mx-2"
                  />
                  <input
                    type="number"
                    name="age"
                    required
                    onChange={handleChange}
                    placeholder="Age"
                    className="form-control mx-2"
                  />
                  <input
                    type="number"
                    name="phone"
                    required
                    onChange={handleChange}
                    placeholder="Phone"
                    className="form-control mx-2"
                  />
                  <input
                    type="text"
                    name="address"
                    required
                    onChange={handleChange}
                    placeholder="Address"
                    className="form-control mx-2"
                  />
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" form="submit">
                  add user
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                  className=""
                />
              </div>
            </div>
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <td>T/R</td>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Phone</td>
                  <td>Address</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {users
                  ?.filter((item) => {
                    let name = item?.name?.toLowerCase();
                    let address = item?.address?.toLowerCase();
                    let find = search.toLowerCase();
                    if (name.includes(find) || address.includes(find)) {
                      return item;
                    }
                  })
                  .map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteUsers(index)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
