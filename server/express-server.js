import express from "express";
import db from "../db/connection.js"; // Adjust the import based on your file structure
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

//Route to get children data
app.get("/api/family/children", async (req, res) => {
  try {
    const childrenCollection = db.collection("children"); // Replace with your collection name
    const children = await childrenCollection.find().toArray();
    res.json(children);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Route to get grand_children data
app.get("/api/family/grand_children", async (req, res) => {
  try {
    const grandchildrenCollection = db.collection("grand_children"); // Replace with your collection name
    const grandchildren = await grandchildrenCollection.find().toArray();
    res.json(grandchildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Route to get great_grandchildren data
app.get("/api/family/great_grandchildren", async (req, res) => {
  try {
    const greatgrandchildrenCollection = db.collection("great_grandchildren"); // Replace with your collection name
    const greatgrandchildren = await greatgrandchildrenCollection.find().toArray();
    res.json(greatgrandchildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Route to get great_great_grandchildren data
app.get("/api/family/great_great_grandchildren", async (req, res) => {
  try {
    const greatgreatgrandchildrenCollection = db.collection("great_great_grandchildren"); // Replace with your collection name
    const greatgreatgrandchildren = await greatgreatgrandchildrenCollection.find().toArray();
    res.json(greatgreatgrandchildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Route to get great_great_great_grandchildren data
app.get("/api/family/great_great_great_grandchildren", async (req, res) => {
  try {
    const greatgreatgreatgrandchildrenCollection = db.collection("great_great_great_grandchildren"); // Replace with your collection name
    const greatgreatgreatgrandchildren = await greatgreatgreatgrandchildrenCollection.find().toArray();
    res.json(greatgreatgreatgrandchildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Route to get tozi_children data
app.get("/api/family/tozi_children", async (req, res) => {
  try {
    const toziChildrenCollection = db.collection("tozi_children"); // Replace with your collection name
    const tozichildren = await toziChildrenCollection.find().toArray();
    res.json(tozichildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Route to get stefano_children data
app.get("/api/family/stefano_children", async (req, res) => {
  try {
    const stefanoChildrenCollection = db.collection("stefano_children"); // Replace with your collection name
    const stefanochildren = await stefanoChildrenCollection.find().toArray();
    res.json(stefanochildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Route to get silas_children data
app.get("/api/family/silas_children", async (req, res) => {
  try {
    const silasChildrenCollection = db.collection("silas_children"); // Replace with your collection name
    const silaschildren = await silasChildrenCollection.find().toArray();
    res.json(silaschildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Route to get nikiwe_children data
app.get("/api/family/nikiwe_children", async (req, res) => {
  try {
    const nikiweChildrenCollection = db.collection("nikiwe_children"); // Replace with your collection name
    const nikiwechildren = await nikiweChildrenCollection.find().toArray();
    res.json(nikiwechildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Route to get nokhaya_children data
app.get("/api/family/nokhaya_children", async (req, res) => {
  try {
    const nokhayaChildrenCollection = db.collection("nokhaya_children"); // Replace with your collection name
    const nokhayachildren = await nokhayaChildrenCollection.find().toArray();
    res.json(nokhayachildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Route to get lulama_children data
app.get("/api/family/lulama_children", async (req, res) => {
  try {
    const lulamaChildrenCollection = db.collection("lulama_children"); // Replace with your collection name
    const lulamachildren = await lulamaChildrenCollection.find().toArray();
    res.json(lulamachildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
//Route to get mampo_children data
app.get("/api/family/mampo_children", async (req, res) => {
  try {
    const mampoChildrenCollection = db.collection("mampo_children"); // Replace with your collection name
    const mampochildren = await mampoChildrenCollection.find().toArray();
    res.json(mampochildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
//Route to get mthunzi_children data
app.get("/api/family/mthunzi_children", async (req, res) => {
  try {
    const mthunziChildrenCollection = db.collection("mthunzi_children"); // Replace with your collection name
    const mthunzichildren = await mthunziChildrenCollection.find().toArray();
    res.json(mthunzichildren);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});