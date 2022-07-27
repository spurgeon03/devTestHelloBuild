import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import Link from '@mui/material/Link';

import './Repository.css';

const Repository = ({ children, name, url }) => (
  <>
    <Card>
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          URL:
          <Link href={url} target="_blank" rel="noreferrer" variant="body2">
            {url}
          </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>{children}</CardActions>
    </Card>
  </>
);

export { Repository };
