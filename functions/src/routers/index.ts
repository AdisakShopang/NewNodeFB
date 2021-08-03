const express = require('express');
const apiRouter = express();
import { router as v1 } from './v1'
import { router as v2 } from './v2'

apiRouter.use('/v1', v1);
apiRouter.use('/v2', v2);

export {
    apiRouter
}