import React, { useEffect, useState } from "react";
import Pin from "../features/Pin";
import pexelApi from "../api/PexelApi";
import { useDispatch, useSelector } from "react-redux";
import {fetchPin} from '../features/Pin/pinSlice';

export default function Home() {
  const productList = useSelector((state) => state.pins.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPin());
  }, []);

  return (
    <div className="list-pin">
      {productList != null && productList.map((photo, index) => {
        return <Pin photo={photo} key={index}></Pin>;
      })}
    </div>
  );
}
