import React from 'react'

const Button = ({ children, clickFunc, delete_for, bt_type }: { children: any, clickFunc?: () => void, delete_for: boolean, bt_type: "button" | "reset" | "submit" }) => {
  return (
    <button type={bt_type} className={`text-white font-para p-3 px-5 duration-500  ${delete_for ? "bg-red-600 hover:bg-red-500" : "bg-green-600  hover:bg-gray-900"}`} onClick={clickFunc}>
      {children}
    </button>
  )
}

export default Button