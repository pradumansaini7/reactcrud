import { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";

export default function Edit() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [age, setAge] = useState("");
  const [avatar, setAvatar] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { userId } = useParams();
  // console.log(userId);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${userId}`)
      .then((res) => res.json())
      .then((resData) => {
        // console.log(resData);
        // setUserData(resData);
        setName(resData.name || "");
        setFatherName(resData.father_name || "");
        setAge(resData.age || "");
        setAvatar(resData.avatar || "");
        setCountry(resData.country || "");
        setState(resData.state || "");
        setCity(resData.city || "");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      father_name: fatherName,
      age: age,
      avatar: avatar,
      country: country,
      state: state,
      city: city,
    };
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData) {
          navigate("/users");
        }
      });
  };

  //   Api Call
  // setUserData(response)

  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     const { fatherName } = event.target;
  //     setFormdata({});
  //   };

  return (
    <div className="container mt-3">
      <h4 className="text-center">Add User</h4>
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-4">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <label htmlFor="" className="form-label">
              Father Name
            </label>
            <input
              type="text"
              className="form-control"
              value={fatherName}
              onChange={(e) => {
                setFatherName(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <label htmlFor="" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <label htmlFor="" className="form-label">
              Avatar
            </label>
            <input
              type="text"
              className="form-control"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <label htmlFor="" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <label htmlFor="" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <label htmlFor="" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="mt-5">
            <button className="btn btn-success" type="submit">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
