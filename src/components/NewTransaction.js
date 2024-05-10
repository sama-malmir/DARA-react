import React, { useEffect, useState } from "react";
import "./List.css";
const NewTransaction = ({e}) => {
  const [category, setCategory] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [selectedType, setSelectedType] = useState("depoist");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isWrongAmount, setIsWrongAmount] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrors, setIsErrors] = useState(false);
  const [errors,setErrors] = useState('')
  useEffect(() => {
    fetch("http://5.42.94.18:3000/api/v1/category")
      .then((response) => response.json())
      .then((categories) => {
        setCategory(categories.data);
        setSelectedCategory(categories.data[0].id);
      })
      .catch((error) => console.log(error));
  }, []);
  const getCategory = category.map((i) => (
    <option value={i.id} key={i.id}>
      {" "}
      {i.name}{" "}
    </option>
  ));

  const getInputAmount = (e) => {
    setIsWrongAmount(false);
    setInputNumber(e.target.value);
  };
  const getInputDiscription = (e) => {
    setInputText(e.target.value);
  };

  const handleSelectedChange = (e) => {
    setSelectedType(e.target.value);
  };
  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  const SubmitForm = (e) => {
    e.preventDefault();
    if (!inputNumber) {
      setIsWrongAmount(true);
      return;
    }
    fetch("http://5.42.94.18:3000/api/v1/wallet/1/wallet_transaction", {
      method: "POST",
      body: JSON.stringify({
        category_id: selectedCategory,
        amount: selectedType == "withdraw" ? -inputNumber : inputNumber,
        description: inputText,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => {
        if (response.status === 204) {
          setIsSuccess(true)
          setCategory([])
          setInputNumber('')
          setInputText('')
         } else {
          response.json()
          .then(response =>{
          setErrors(response.errors)
          setIsErrors(true)
          })
         }
      })  
     
  };
  return (
    <>
      <form className="flex justify-between mr-48 ml-10 -mt-28 border-2 border-[#ec8758] h-80 rounded-xl">
        <div className="border-[#ec8758] mr-3 mt-4">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label className="mb-5 ml-14">
                دسته‌ بندی<b className="text-red-500">*</b>
              </label>
              <select
                value={selectedCategory}
                onChange={handleSelectedCategory}
                className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-44"
              >
                {getCategory}
              </select>
            </div>
            <div className="flex justify-between">
              <label className="mb-5">
                نوع تراکنش <b className="text-red-500">*</b>
              </label>
              <select
                onChange={handleSelectedChange}
                value={selectedType}
                className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-44"
              >
                <option value="depoist"> واریز </option>
                <option value="withdraw"> برداشت </option>
              </select>
            </div>

            <div>
              <div className="flex justify-between">
                <label className="mb-5">
                  {" "}
                  مبلغ<b className="text-red-500">*</b>
                </label>
                <input
                  onChange={getInputAmount}
                  value={inputNumber}
                  type="number"
                  className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-44"
                />
              </div>
              {isWrongAmount == true ? (
                <b className="text-red-600 mr-36 mb-5">
                  لطفا مبلغ را وارد کنید
                </b>
              ) : (
                ""
              )}
            </div>

            <div className="flex justify-between">
              <label className="mb-5">توضیحات </label>
              <input
                onChange={getInputDiscription}
                value={inputText}
                type="text"
                className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-44"
              />
            </div>
          </div>
        </div>
        <div className="self-end">
          <button
            onClick={SubmitForm}
            type="submit"
            className="border-2 bg-gray-300 border-[#ec8758] m-10 w-20 h-9 rounded-xl"
          >
            ثبت
          </button>
          {isSuccess ? (
            <p className="mb-3 ml-3">عملیات با موفقیت انجام شد</p>
          ) : (
            ""
          )}
        </div>
      </form>
      {isErrors ? <div className='text-center mt-5'><b>{errors}</b></div> :''}
    </>
  );
};

export default NewTransaction;
