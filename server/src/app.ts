import express, { type Request, type Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  console.log(id);

  return res.json({
    message: `${id}`,
    success: true,
    uptime: process.uptime(),
  });
});

app.get("/health", (_: Request, res: Response) => {
  res.json({
    status: true,
    message: "healthy",
  });
});

export default app;
