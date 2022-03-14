// import { decks } from "../data/db.json"
import React from "react";
import { HouseFill } from "react-bootstrap-icons";
import { useHistory, useParams, Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function BreadCrumb({ path }) {
  const history = useHistory();
  const iconStyle = "d-flex flex-row align-items-center";


  const homeLink = (
    <div>
      {/* fix history push */}
      {/* <Link to="/" className="d-flex align-items-center text-primary">
        <HouseFill className="mr-1" />Home
      </Link> */}
      {path}
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );

  return <div className="container">{homeLink}</div>;
}

export default BreadCrumb;







// {routes.map(({ path, name, Component }, key) => (
//   <Route
//     exact
//     path={path}
//     key={key}
//     render={props => {
//       const crumbs = routes
//         // Get all routes that contain the current one.
//         .filter(({ path }) => props.match.path.includes(path))
//         // Swap out any dynamic routes with their param values.
//         // E.g. "/pizza/:pizzaId" will become "/pizza/1"
//         .map(({ path, ...rest }) => ({
//           path: Object.keys(props.match.params).length
//             ? Object.keys(props.match.params).reduce(
//                (path, param) => path.replace(
//                  `:${param}`, props.match.params[param]
//                ), path
//               )
//             : path,
//           ...rest
//         }));
//       console.log(`Generated crumbs for ${props.match.path}`);
//       crumbs.map(({ name, path }) => console.log({ name, path }));
//       return (
//         <div className="p-8">
//           <Component {...props} />
//         </div>
//       );
//     }}
//   />
// ))}