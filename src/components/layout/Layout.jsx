import {useState } from "react";

import Header from "../header/Header.jsx"
import Form from "../form/Form.jsx"
import List from "../list/List.jsx"
import "./style.css";

function Layout() {
  return (
    <div className="layout">
      <Header/>
      <Form/>
      <List/>
    </div>
  );
}

export default Layout;