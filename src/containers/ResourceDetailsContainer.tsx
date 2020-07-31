import React from "react";
import {
  Alert,
  Box,
  Button,
  Heading,
  Spinner,
  Stack,
  Text,
  PageContent
} from "bumbag";
import * as Loads from "react-loads";
import _get from "lodash/get";
import _startCase from "lodash/startCase";
import { useHistory, useParams } from "react-router-dom";

import { FnArg } from "react-loads/ts/types";

interface ResourceResponse {
  data: Record<string, any>;
}

interface Props {
  resource: string;
  resourceFunction: FnArg<ResourceResponse>;
  detailsKeys: Array<string>;
  titleKey: string;
}

const formatKey = (key: string) => _startCase(key).replace(/_/g, " ");

function ResourceDetailsContainer(props: Props) {
  const { resource, resourceFunction, detailsKeys, titleKey } = props;
  const history = useHistory();
  const { id } = useParams();

  function fetchData() {
    return resourceFunction(id);
  }

  const resourceLoader = Loads.useLoads(
    `${resource}-${id}`,
    fetchData as FnArg<any>
  );
  const data = _get(resourceLoader, "response");

  return (
    <PageContent>
      <Box display="flex" alignItems="center" marginBottom="major-2">
        <Button
          onClick={() => history.push(`/${resource}`)}
          variant="outlined"
          palette="primary"
        >
          Back
        </Button>
      </Box>

      {resourceLoader.isPending && <Spinner />}
      {resourceLoader.isResolved && (
        <Box>
          <Heading use="h3">{_get(data, titleKey)}</Heading>
          <Stack spacing="major-1">
            {detailsKeys.map(key => (
              <Box key={key}>
                <Text fontWeight="semibold">{formatKey(key)}</Text>:{" "}
                {_get(data, key)}{" "}
              </Box>
            ))}
          </Stack>
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
          Unable to load data
        </Alert>
      )}
    </PageContent>
  );
}

export default ResourceDetailsContainer;
