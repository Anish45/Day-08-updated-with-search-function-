import React, { useState, useEffect } from "react";
import axios from "axios";


function Display() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [q, setQ] = useState("");

  function getUsers(){
    axios
      .get("http://localhost:5000/submit")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  function userDelete(id) {
    axios
      .delete("http://localhost:5000/submit/" + id)
      .then((res) => {
        alert("successfully deleted");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function updateUser(id, name, phone, email) {
    setName(name);
    setPhone(phone);
    setEmail(email);
    setUserId(id);
  }

 function updateUse() {
    axios.patch(`http://localhost:5000/submit/${userId}`, {name: name, phone: phone, email: email})
    .then(res => {
      console.log(res.data);
      getUsers();
      // window.location.reload(false);
    
    })
  }

  return (
    <>
      <div className="container pt-5">
        <div className='row pb-3'>
          <div className='col-12'>
            <input placeholder='Search By Name...' type='text' value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
        <table class="table table-bordered table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          {posts.filter(val => {
            if(q === ""){
              return val;
            } else if(val.name.toLowerCase().includes(q.toLocaleLowerCase())) {
              return val;
            } else{
              return false;
            }
          }).map((post, index) => (
            <tbody>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{post.name}</td>
                <td>{post.phone}</td>
                <td>{post.email}</td>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <button
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#staticBackdrop"
                        onClick={() =>
                          updateUser(
                            post._id,
                            post.name,
                            post.phone,
                            post.email
                          )
                        }
                      >
                        Update
                      </button>
                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-backdrop="static"
                        data-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="staticBackdropLabel"
                              >
                                Update User
                              </h5>
                              <button
                                type="button"
                                className="close btn"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">X</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="form-group">
                                  <label>Name</label>
                                  <input
                                    type="name"
                                    className="form-control"
                                    id="name"
                                    onChange={(e) => handleName(e)}
                                    value={name}
                                    required
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Phone</label>
                                  <input
                                    type="Number"
                                    className="form-control"
                                    id="phone"
                                    onChange={(e) => handlePhone(e)}
                                    value={phone}
                                    required
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Email</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    onChange={(e) => handleEmail(e)}
                                    value={email}
                                    required
                                  />
                                </div>
                              </form>
                            </div>

                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>

                              <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={updateUse}
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-danger"
                        onClick={() => userDelete(post._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default Display;
