import React from "react";
import { Box, Card, Stack, PageContent, styled } from "bumbag";
import { Link } from "react-router-dom";
import _startCase from "lodash/startCase";

import { SWAPI_RESOURCES_ARRAY } from "../constants";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Index() {
  return (
    <PageContent breakpoint="tablet">
      <Stack>
        {SWAPI_RESOURCES_ARRAY.map(resource => (
          <Box key={resource}>
            <StyledLink to={`/${resource}`}>
              <Card _hover={{ backgroundColor: "primaryTint" }}>
                {_startCase(resource)}
              </Card>
            </StyledLink>
          </Box>
        ))}
      </Stack>
    </PageContent>
  );
}

export default Index;
