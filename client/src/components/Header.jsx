import React from "react";
import "./header.css"
function Header() {
  return (
    <header>
      <h1>Task App</h1>
      <nav class="navbar navbar-default">
    <div class="container">
    
        <ul class="nav navbar-nav navbar-right">
          <li id="all"><a href="/">All Tasks</a></li>
          <li id="complete"><a href="/complete">Cpmpleted tasks</a></li>
          <li id="incomplete"><a href="/incomplete">Incompleted Tasks</a></li>
        </ul>
    </div>
  </nav>
    </header>
  );
}

export default Header;
