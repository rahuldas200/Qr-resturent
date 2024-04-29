import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { MdTableRestaurant } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { GoListOrdered } from "react-icons/go";
import { SiAirtable } from "react-icons/si";
export const sideLink = [
    {
        id:1,
        title:"DashBord",
        link:"/restaurant/restaurant_Id/dashboard",
        icon:"gydjqb"

    },
    {
        id: 2,
        title: "Manu",
        link: "/order",
        aditionalLink:[
          {
            id:1,
            title:"Table list",
            path:"/restaurant/restaurant_Id/menu"
          },
          {
            id:2,
            title:"Create Table",
            path:"/restaurant/restaurant_Id/menu/add-menu"
          },
          {
            id:3,
            title:"Update Table",
            path:"restaurant/restaurant_Id/menu/update-menu"
          }
        ],
        icon: SiAirtable,
    },
    {
      id: 3,
      title: "Tables",
      link: "/table",
      aditionalLink:[
        {
          id:1,
          title:"Table list",
          path:"/restaurant/restaurant_Id/menu/table"
        },
        {
          id:2,
          title:"Create Table",
          path:"/restaurant/restaurant_Id/menu/add-menu/create-table"
        },
        {
          id:3,
          title:"Update Table",
          path:"/restaurant/restaurant_Id/update-menu/update-table"
        }
      ],
      icon: SiAirtable,
    },
    {
      id: 4,
      title: "Orders",
      link: "/orders",
      aditionalLink:[
        {
          id:1,
          title:"Order list",
          path:"/restaurant/restaurant_Id/all-orders"
        },
      ],
      icon: GoListOrdered,
    },
    {
      id: 5,
      title: "Restaurant Details",
      link: "/profile",
      aditionalLink:[
        {
          id:1,
          title:"Restaurant Details",
          path:"/restaurant/restaurant_Id/restaurant-details"
        },
        {
          id:2,
          title:"Update restaurant",
          path:"/restaurant/restaurant_Id/update-restaurant-details"
        },
        {
          id:3,
          title:"Delete Restaurant",
          path:"/restaurant/restaurant_Id/delete-restaurant"
        }
      ],
      icon: FaUserAlt,
    },
  ];
  