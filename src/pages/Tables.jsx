import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Queries from "./Queris";
import { useSelector } from "react-redux";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Income",
    dataIndex: "income",
  },
  {
    title: "Phone Price",
    dataIndex: "phone_price",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "Car",
    dataIndex: "car",
  },
  {
    title: "Quote",
    dataIndex: "quote",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

const Tables = () => {
  const store_data = useSelector((state) => state.userData);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(store_data);
    
  }, [store_data]);
     
  useEffect(() => {
    setData(store_data);
  }, []);

  return (
    <div>
      <Queries/>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Tables;
