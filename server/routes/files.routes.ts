import mongoose from "mongoose";
import express, { Request, Response } from "express";
const router = express.Router();
let gfb: mongoose.mongo.GridFSBucket;
const connection = mongoose.connection;
connection.once("open", () => {
  gfb = new mongoose.mongo.GridFSBucket(connection.db, {
    bucketName: "uploads",
  });
});
router.get("/all", async (req, res) => {
  const files = await gfb.find().toArray();
  res.status(200).send({ code: 200, result: files });
});
router.get("/get/:filename", async (req, res) => {
  const file = await getFile(req, res);
  if (!file)
    return res.status(404).send({ code: 404, message: "File is not found" });
  const readStream = gfb.openDownloadStream(file._id);
  readStream.on("error", (err) => {
    throw err;
  });
  readStream.pipe(res.contentType(file?.contentType || "text/plain"));
});
router.delete("/delete/:filename", async (req, res) => {
  const file = await getFile(req, res);
  if (!file)
    return res.status(404).send({ code: 404, message: "File is not found" });
  await gfb.delete(file._id);
  res.status(204).send({ code: 204, message: "File has been deleted" });
});

async function getFile(req: Request, res: Response) {
  const files = await gfb.find({ filename: req.params.filename }).toArray();
  if (files && files.length) return files[0];
}
export default router;
