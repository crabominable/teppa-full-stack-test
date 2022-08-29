import * as express from 'express';
import { Router } from 'express';
import cors from 'cors';
import 'dotenv/config';

class App {
  public app: express.Application;

  constructor() {
    this.app = express.default();
    this.app.use(express.json());
    this.app.use(cors());
  }

  public startServer(PORT: string | number = process.env.PORT || 3001): void {
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;