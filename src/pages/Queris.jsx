import React, { useEffect } from "react";
import { Button, Space } from "antd";
import axios from "axios";
import { loadData } from "../redux/reducer";
import { useDispatch } from "react-redux";

const Queries = () => {
  const dispatch = useDispatch();
  //---------------------------------------------------------------------------------------
  const getData = async (type) => {
    try {
      const res = await axios.post("http://immilicus-env.eba-pjegp3hx.ap-south-1.elasticbeanstalk.com/", { type });
      dispatch(loadData(res.data));
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  //===============================================================================================================
  useEffect(() => {
    getData({});
  }, []);
  //===============================================================================================================

  return (
    <div style={{marginTop:'20px',marginBottom:"20px"}}>
      <Space wrap>
        <Button
          type="primary"
          onClick={() => getData("INCOME")}
        >{`Income< $5 Car BMW Mercedes`}</Button>
        <Button
          type="primary"
          onClick={() => getData("PHONE")}
        >{`Phone Price>10000`}</Button>
        <Button
          type="primary"
          onClick={() => getData("STARTS_M")}
        >{`Last Name starts with M`}</Button>
        <Button
          type="primary"
          onClick={() => getData("EMAIL")}
        >{`Email not Include Digit and have BMW,MERCEDESE,AUDI`}</Button>
        <Button
          type="primary"
          onClick={() => getData("TOP_TEN")}
        >{`Top Ten With Highest No of Uers`}</Button>
      </Space>
    </div>
  );
};
export default Queries;
