import express from 'express';
import {rootRouter} from "./routers/rootRouter";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/hs_01/api', rootRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})