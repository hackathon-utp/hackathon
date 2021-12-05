let express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");
  require('dotenv').config({path:"./.env"});

// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database could't be connected to: " + error);
    }
  );

const normatividadAPI = require("./routes/evaluacion.route");
const empresaAPI = require("./routes/empresa.route");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// API
app.use("/normatividad", normatividadAPI);
app.use("/usuarios", empresaAPI);


// Create port
const port = process.env.PORT_DB || 3000;

const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Find 404
function createError(codigo) {
  console.log("error 404");
}
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
  });