import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [odonto, setOdonto] = useState({});
  const params = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(
      (res) => setOdonto(res.data)
    );
  }, [params.id]);

  return (
    <div>
      <img src={odonto.image} alt="" />
      <h3>{odonto.name}</h3>
      <h3>{odonto.email}</h3>
      <h4>{odonto.phone}</h4>
      <h4>{odonto.website}</h4>
    </div>
  );
};

export default Detail;
