import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

export default function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then(async (res) => {
        setData(res);
        console.log(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const deleteUser = (userId) => {
    // console.log(userId);
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then(() => {
        setData(data.filter((user) => user.id !== userId));
      });
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="container mt-4">
          <h4 className="text-center">Users</h4>
          <div className="d-flex justify-content-end">
            <Link to={"/add-user"} className="btn btn-success">
              Add User
            </Link>
          </div>
          <div className="row">
            {data.map((el, index) => (
              <div className="col-3 my-2" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={el.avatar} className="card-img-top" alt="..." />
                  <div className="d-flex justify-content-end">
                    <Link to={`/edit/${el.id}`} className="btn btn-info">
                      Edit
                    </Link>
                    <input
                      type="submit"
                      className="btn btn-danger"
                      onClick={() => deleteUser(el.id)}
                      value="Delete"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Name: {el.name}</h5>
                    <p className="card-text">Father Name: {el.father_name}</p>
                    <p className="card-text">Age: {el.age}</p>
                    <p className="card-text">Country: {el.country}</p>
                    <p className="card-text">State: {el.state}</p>
                    <p className="card-text">City: {el.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
