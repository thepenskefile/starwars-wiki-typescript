import React from "react";
import { PageContent, Spinner } from "bumbag";

function LoadingPage() {
  return (
    <PageContent display="flex" alignItems="center" justifyContent="center">
      <Spinner />
    </PageContent>
  );
}

export default LoadingPage;
