import React, {useState} from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';

const Container = () => {
  const [leftArrs, setLeftArrs] = useState(['Apple', 'Oneplus', 'Motorola', 'Oppo', 'Vivo']);
  const [rightArrs, setRightArrs] = useState(['Asus', 'Lenovo', 'Acer', 'HP', 'Dell']);
  const [arrLtoR, setArrLtoR] = useState([]);
  const [arrRtoL, setArrRtoL] = useState([]);

  // Selected element taken into the new array for Left to Right
  const handleArrLtoR = (e) => {
    setArrLtoR([...arrLtoR, e.target.value]);
    console.log(arrLtoR);
  };

  // Selected element taken into the new array for Right to Left
  const handleArrRtoL = (e) => {
    setArrRtoL([...arrRtoL, e.target.value]);
    console.log(arrRtoL);
  };

  // Appending the selected array into right original array to update it.
  const handleAddLtoR = () => {
    const unique1 = leftArrs.filter((o) => arrLtoR.indexOf(o) === -1);
    const unique2 = arrLtoR.filter((o) => leftArrs.indexOf(o) === -1);
    const unique = unique1.concat(unique2);
    setLeftArrs(unique);
    setRightArrs([...rightArrs, ...arrLtoR]);
    setArrLtoR([]);
  };

  // Appending the selected array into left original array to update it.
  const handleAddRtoL = () => {
    const unique1 = rightArrs.filter((o) => arrRtoL.indexOf(o) === -1);
    const unique2 = arrRtoL.filter((o) => rightArrs.indexOf(o) === -1);
    const unique = unique1.concat(unique2);
    setRightArrs(unique);
    setLeftArrs([...leftArrs, ...arrRtoL]);
    setArrRtoL([]);
  };

  return (
    <>
      <h3 className="text-center">Category Matching</h3>
      <div className="row m-5 justify-content-center text-center">
        {/* First Container */}
        <div className="col-4 border border-secondary">
          {
            leftArrs.map((leftItem) => {
              return (
                <p key={leftItem} className="d-flex flex-row">
                  <input type="checkbox" id={leftItem} name={leftItem} value={leftItem} onClick={handleArrLtoR} />
                  <label className="" htmlFor={leftItem}>{leftItem}</label>
                </p>
              );
            })}
        </div>
        {/* Buttons */}
        <div className="col-2 ms-1 me-0 text-center mt-5 pt-1">
          <div>
            <button onClick={handleAddLtoR} className="m-2 border border-success"> <AiOutlineArrowRight /></button>
          </div>
          <div>
            <button onClick={handleAddRtoL} className="border border-success">< AiOutlineArrowLeft /></button>
          </div>
        </div>

        {/* Second Container */}
        <div className="col-4 border border-secondary">
          {
            rightArrs.map((rightItem) => {
              return (
                <p key={rightItem} className="d-flex flex-row">
                  <input type="checkbox" id={rightItem} name={rightItem} value={rightItem} onClick={handleArrRtoL} />
                  <label htmlFor={rightItem}>{rightItem}</label>
                </p>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Container;
