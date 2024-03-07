import { Outlet } from "react-router-dom";

const Service = () => {
    return (
      <>
      <h1>Page de toutes les cats</h1>
<Outlet />
</>
    );
  };
  
  export default Service;