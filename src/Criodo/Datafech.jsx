import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const Datafech = () => {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [image, setImage] = useState("https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg");
  const dataFech = async () => {
    let requst = await fetch("https://reqres.in/api/users/1");
    let data = await requst.json();
    console.log(data);
    setMail(() => data.data.email);
    setName(() => data.data.first_name);
    setLast(() => data.data.last_name);
    setImage(() => data.data.avatar);
  };
  const deleteData = () => {
    setMail(() => "");
    setName(() => "");
    setLast(() => "");
    setImage(
      () =>
        "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
    );
  };
  return (
    <>
      <div className="border border-black m-2" style={{ height: "100vh" }}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div>
            <button className="btn btn-success m-1" onClick={dataFech}>
              User 1
            </button>
            <button className="btn btn-success m-1" onClick={dataFech}>
              User 2
            </button>
            <button className="btn btn-success m-1" onClick={dataFech}>
              User 3
            </button>
            <button className="btn btn-danger m-1" onClick={deleteData}>
              Delete Data
            </button>
            <div className="card mt-3" style={{ width: "18rem" }}>
              <img src={image} className="card-img-top" alt="Not available" />
              <div className="card-body">
                <h5 className="card-title">Name :{` ${name} ${last}`}</h5>
                <p className="card-text">Email : {mail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Datafech;
