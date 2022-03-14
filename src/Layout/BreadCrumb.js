// import { decks } from "../data/db.json"
import React from "react";
import { HouseFill } from "react-bootstrap-icons";
import { useHistory, useParams, Link, useRouteMatch } from "react-router-dom";

function BreadCrumb({ path }) {
  const history = useHistory();
  const iconStyle = "d-flex flex-row align-items-center";
  // const { path } = useRouteMatch()

  const crumbs = (
    // <div className="breadcrumb">
    //   {/* fix history push */}
    //   {/* <Link to="/" className="d-flex align-items-center text-primary">
    //     <HouseFill className="mr-1" />Home
    //   </Link> */}
    //     <div>
    //     </div>{path}
    // </div>
  <nav aria-label="breadcrumb">
    {path}
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
  </nav>
  );

  return <div className="container">{crumbs}</div>;
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