import React from "react";
import * as Types from "./interfaces";


const Loginpage (props: Types.Loginprops) => {
  
    return (
      <div className="card bg-light shadow">
        <div className="card-body">
          <h5 className="card-title text-center">Please log in</h5>
          <input type="text" value={props.username} className="card-text" onChange={(e) => props.setUsernameChange(e)} />
          <button className="btn btn-primary my-2 ms-2" type="button" onClick={props.setLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Loginpage;