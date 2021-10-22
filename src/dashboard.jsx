import React,{ useState ,useEffect}  from 'react';


import "./dashboard.scss";
import axios from "axios";
export default function Dashboard() {
  const [info, setInfo] = useState();

  const getData = async () => {
    await axios
      .get("https://api.bybits.co.uk/policys/details", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          environment: "mock",
          Authorization: "Bearer MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs",
        },
      })

      .then((res) => {
        const myInfo = res.data;
        // console.log(myInfo);
        setInfo(myInfo);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  if (info === undefined) {
    return null;
  }
  
  // console.log(
  //   Object.entries(info)[2][1].address
  //   );

  return (
    <div className="dashboard">
      <div className="innerDiv">
        <h1> My Policy </h1>

        <h2> Policy Reference :</h2>
        <p>{info.policy_reference}</p>
        <h3> Cover Type </h3>
        <p>{info.policy.cover}</p>
        <h3> Car </h3>
        <p>{info.vehicle.make} , {info.vehicle.model} , {info.vehicle.make}</p>
        <h3>Address</h3>
        <p>{ info.policy.address.line_1 } , {info.policy.address.line_1} , {info.policy.address.postcode}</p>
           
        
        
      </div>
    </div>
  );
}
