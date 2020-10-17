import React from "react";
import { Helmet } from "react-helmet";

const DocTitle = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8" />
        <title>Welcome</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    </div>
  );
};

export default DocTitle;
