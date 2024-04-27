import React, { useState } from "react";

const data = [
  {
    id: 1,
    tableNumber:1,
    capacity:4,
    orderDetails:[
      {
        id:1,
        manu:"veg alu porotha",
        quentity:2,
        totalPrice:256,
      }
    ]

  },
  {
    id: 2,
    tableNumber:2,
    capacity:4,
    orderDetails:[
      {
        id:1,
        manu:"veg alu porotha",
        quentity:2,
        totalPrice:256,
      }
    ]

  },
  {
    id: 3,
    tableNumber:3,
    capacity:4,
    orderDetails:[
      {
        id:1,
        manu:"veg alu porotha",
        quentity:2,
        totalPrice:256,
      }
    ]

  },
  {
    id: 4,
    tableNumber:4,
    capacity:4,
    orderDetails:[
      {
        id:1,
        manu:"veg alu porotha",
        quentity:2,
        totalPrice:256,
      }
    ]

  },
  {
    id: 5,
    tableNumber:5,
    capacity:4,
    orderDetails:[
      {
        id:1,
        manu:"veg alu porotha",
        quentity:2,
        totalPrice:256,
      }
    ]

  },
  {
    id: 6,
    tableNumber:6,
    capacity:4,
    orderDetails:[
      {
        id:1,
        manu:"veg alu porotha",
        quentity:2,
        totalPrice:256,
      }
    ]

  },
  {
    id: 7,
    tableNumber:7,
    capacity:4,
    orderDetails:[
      {
        id:1,
        manu:"veg alu porotha",
        quentity:2,
        totalPrice:256,
      }
    ]

  },
  {
    id: 8,
    tableNumber:8,
    capacity:4,
    orderDetails:[
      {
        id:1,
        manu:"veg alu porotha",
        quentity:2,
        totalPrice:256,
      }
    ]

  },
];

const Tables = () => {
  const [tables, setTables] = useState(data)

  return (
    <div>
      <div className="text-white">
        <h1>Tables</h1>
      </div>

      <div>
        {
          tables ? (
            <div className="grid grid-cols-3  gap-3 mt-5">
              {
              tables.map( (item) => (
                <div key={item.id} className=" h-32 rounded-sm    bg-green-500">
                  <p className="">Table number : {item.tableNumber}</p>
                </div>
              ))
            }
            </div>
          ) :
          (
            <div> </div>
          )
        }
      </div>
    </div>
  )
};

export default Tables;
