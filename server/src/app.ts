import express, { type Request, type Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  return res.json({
    message: `${id}`,
    success: true,
    uptime: process.uptime(),
  });
});

export default app;
