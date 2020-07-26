import React from "react";
import * as Loads from "react-loads";
import {
  Alert,
  Box,
  Button,
  Heading,
  Card,
  Spinner,
  Stack,
  PageContent,
  Pagination
} from "bumbag";
import _get from "lodash/get";
import _startCase from "lodash/startCase";
import { useHistory } from "react-router-dom";

import { SWAPI_RESOURCES } from "../constants";
import { FnArg } from "react-loads/ts/types";

interface Data {
  _id: number | string;
  _name: string;
}

interface ResourceResponse {
  data: Array<Data>;
  meta: Record<string, any>;
}

interface Props {
  resourceFunction: FnArg<ResourceResponse>;
  name: typeof SWAPI_RESOURCES;
}

function ResourceContainer(props: Props) {
  const { name, resourceFunction } = props;
  const [currentPage, setCurrentPage] = React.useState(1);
  const history = useHistory();
  const resourceLoader = Loads.useLoads(name, resourceFunction);
  const { data, meta }: ResourceResponse = _get(resourceLoader, "response") || {
    data: [],
    meta: {}
  };

  function handleChangePage(page: number) {
    setCurrentPage(page);
    resourceLoader.load({ params: { page } });
  }

  return (
    <PageContent>
      <Box display="flex" alignItems="center" marginBottom="major-2">
        <Button
          onClick={() => history.push("/")}
          variant="outlined"
          palette="primary"
        >
          Back
        </Button>
        <Heading use="h3" marginLeft="major-2">
          {_startCase((name as unknown) as string)}
        </Heading>
      </Box>

      {resourceLoader.isPending && <Spinner />}
      {resourceLoader.isResolved && (
        <Box>
          <Stack>
            {data.map(item => (
              <Card
                key={_get(item, "_id")}
                _hover={{ backgroundColor: "primaryTint" }}
              >
                {item._name}
              </Card>
            ))}
          </Stack>
          {_get(meta, "count") > 10 && (
            <Box display="flex" alignItems="center" paddingTop="major-2">
              <Pagination
                currentPage={currentPage}
                onChangePage={page => handleChangePage(page)}
                numberOfPages={Math.ceil(_get(meta, "count") / 10)}
              />
              {resourceLoader.isReloading && <Spinner marginLeft="major-2" />}
            </Box>
          )}
        </Box>
      )}
      {resourceLoader.isRejected && (
        <Alert
          title="Oh no!"
          type="danger"
          variant="tint"
          accent
          marginTop="major-2"
        >
          Unable to load {name}
        </Alert>
      )}
    </PageContent>
  );
}

export default ResourceContainer;
