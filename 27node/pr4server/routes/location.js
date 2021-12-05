const express = require("express");

// db settings start
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://Artem2:artem2@cluster0.fikvk.mongodb.net/locations?retryWrites=true&w=majority";
const client = new MongoClient(uri);
// db settings end

const router = express.Router();

const locationStorage = {
  locations: [],
};

router.post("/add-location", (req, res, next) => {
  async function run() {
    try {
      await client.connect();
      const database = client.db("locations");
      const locations = database.collection("user-locations");
      // Query for a location
      const query = {
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
      };
      const location = await locations.insertOne(query);
      res.json({ message: "Stored location", locId: location.insertedId });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
});

router.get("/location/:lid", (req, res, next) => {
  const locationId = req.params.lid;

  async function run() {
    try {
      await client.connect();
      const database = client.db("locations");
      const locations = database.collection("user-locations");
      // Query for a location
      const query = { _id: new mongodb.ObjectId(locationId) };
      const location = await locations.findOne(query);
      if (!location) {
        return res.status(404).json({ message: "Not found" });
      }
      res.json({ address: location.address, coordinates: location.coords });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
});

module.exports = router;
