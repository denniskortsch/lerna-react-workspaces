import * as React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div>
      <Link to="search-experience">Search Experience</Link>
      <Link to="content-experience">Content Experience</Link>
    </div>
  );
}
