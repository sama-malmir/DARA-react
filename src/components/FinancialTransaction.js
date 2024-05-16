import React, { useEffect, useState } from "react";
import './List.css'
const FinancialTransaction = ({ getDataUser }) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = () => {
    fetch("http://5.42.94.18:3000/api/v1/wallet/1/wallet_transaction")
      .then((response) => response.json())
      .then((transactions) => {
        setTransactions(transactions.data);
      })
      .catch((error) => console.log(error));
  };

  const handleRemove = (id) => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(
      "http://5.42.94.18:3000/api/v1/wallet_transaction/" + id,
      requestOptions
    ).then((response) => {
      if (response.status === 204) {
        fetchTransaction();
        getDataUser();
      }
    });
  };
  const transactionsList = transactions.map((item) => (
    <div  key={item.id}>
      <div className = {item.amount > 0 ? 'bgWithdraw' :'bgDepoist'}>
        <div className="mt-4 w-full flex justify-around">
          <div className="inline-flex  flex-col">
            <label className="mb-5">دسته‌بندی</label>
            <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36">
              {item.category.name}{" "}
            </div>
          </div>
          <div className="inline-flex flex-col ">
            <label className="mb-5">نوع تراکنش</label>
            {item.amount > 0 ? (
              <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36">
                {" "}
                واریز{" "}
              </div>
            ) : (
              <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36">
                {" "}
                برداشت{" "}
              </div>
            )}
          </div>
          <div className="inline-flex flex-col">
            <label className="mb-5">تاریخ</label>
            <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36">
              {" "}
              {item.at_date}{" "}
            </div>
          </div>
          <div className="inline-flex flex-col">
            <label className="mb-5">مبلغ</label>
            <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36">
              {" "}
              {item.amount}{" "}
            </div>
          </div>
          <div className="inline-flex flex-col">
            <label className="mb-5">توضیحات</label>
            <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36">
              {item.description}{" "}
            </div>
          </div>
        </div>
        <div className="flex justify-center m-8 ">
          <button className="border-2 bg-gray-300 border-[#ec8758] m-4 w-14 h-9 rounded-xl">
            ویرایش
          </button>
          <button
            onClick={(e) => handleRemove(item.id)}
            className="border-2 bg-gray-300 border-[#ec8758] m-4 w-14 h-9 rounded-xl"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  ));

  return <>{transactionsList}</>;
};

export default FinancialTransaction;
