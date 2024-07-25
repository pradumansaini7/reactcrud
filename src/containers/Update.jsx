

const update=()=>{
    return(
        <div>
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

    )
}