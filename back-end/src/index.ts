import cluster from 'cluster';
import { cpus } from 'os';
import { application } from './infrastructure/webserver';

const PORT = process.env.PORT || 4545;
const numCPUs = cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++)
    cluster.fork();

  cluster.on('exit', () => cluster.fork());

} else
  application.listen(PORT, () => console.log('ok'));