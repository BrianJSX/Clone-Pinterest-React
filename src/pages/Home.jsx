import React, { useEffect } from "react";
import Pin from "../features/Pin";
import { useDispatch, useSelector } from "react-redux";
import {fetchPin} from '../features/Pin/pinSlice';
import ActionIndex from '../features/ActionIndex';

export default function Home() {
  const productList = useSelector((state) => state.pins.result);
  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchAction = () => { 
      dispatch(fetchPin());
    }
    dispatchAction();
  }, []);

  return (
    <div className="list-pin">
      <ActionIndex></ActionIndex>
      {productList != null && productList.map((photo, index) => {
        return <Pin photo={photo} key={index}></Pin>;
      })}
    </div>
  );
}
