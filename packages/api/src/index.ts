import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import 'dotenv/config';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const NPM_BASE_URL = 'https://registry.npmjs.org/';
const GH_BASE_URL = 'https://raw.githubusercontent.com/';

app.post('/', async (req: Request, res: Response) => {
  const packageId = req.body?.packageId || '';

  if (!packageId) {
    return res.status(400).send('Package ID is required');
  }

  try {
    const response = await axios.get(`${NPM_BASE_URL}/${packageId}/latest`);
    const homepage = response?.data?.homepage;
    const ghRepoName = homepage?.split('github.com/')[1];
    const url = `${GH_BASE_URL}${ghRepoName}/refs/heads/master/CHANGELOG.md`;
    console.log(url);

    const changelog = await axios.get(url);
    console.log('Changelog:', changelog.data);
  } catch (error) {
    console.error('Error:', error);
    return res.status(400).send('Package not found');
  }
  return res.send(packageId);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
