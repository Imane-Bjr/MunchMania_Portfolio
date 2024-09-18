const express = require('express');
const cors = require('cors');
const app = express();

//boujirimane1
//LOkI0q93OOsVHkyO

// Define the port from environment variables or use 5000 as default.
const port = process.env.PORT || 5000;

// Use CORS middleware to allow cross-origin requests
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's URL
  credentials: true, // Allow cookies and credentials to be sent
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to set security headers for COOP and COEP
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});


//MongoDb config

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://boujirimane1:LOkI0q93OOsVHkyO@munchmania-cluster.fgp9q.mongodb.net/?retryWrites=true&w=majority&appName=munchmania-cluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //Database & Collections
    const menuCollections = client.db("munchmania-db").collection("menus");
    const cartCollections = client.db("munchmania-db").collection("cartItems");

    //all menu items ops
    app.get('/menu', async(req, res) => {
        const result = await menuCollections.find().toArray();
        res.send(result)
    })

    //all cart items ops

    //Posting cart to your DB
    app.post('/carts', async(req, res) => {
      const cartItem = req.body;
      const result = await cartCollections.insertOne(cartItem);
      res.send(result)
    })
    
    //get cart items using email
    app.get('/carts', async(req, res) => {
      const email = req.query.email;
      const filter = {email: email};
      const result = await cartCollections.find(filter).toArray();
      res.send(result)
    })

    //get specific cart items
    app.get('/carts/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await cartCollections.findOne(filter);
      res.send(result)
    })

    //Delete item from cart
    app.delete('/carts/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await cartCollections.deleteOne(filter);
      res.send(result)
    })

    //Update number of items from cart
    app.put('/carts/:id', async(req, res) => {
      const id = req.params.id;
      const {quantity} = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true};
      
      const updateDoc = {
        $set: {
          quantity: parseInt(quantity, 10)
        }
      };

      const result = await cartCollections.updateOne(filter, updateDoc, options);
      //res.send(result)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
