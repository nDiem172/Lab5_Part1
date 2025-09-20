// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// ===== Controllers =====
const ctrl = require('./controllers/renderController');

// ===== Routes =====
const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');

// ===== Middleware =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ===== MongoDB =====
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ===== Swagger Config =====
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Global Haven API",
      version: "1.0.0",
      description: "API documentation for Suppliers and Products (CRUD)",
    },
    servers: [{ url: "http://localhost:" + (process.env.PORT || 3000) }],
  },
  apis: ["./routes/*.js"], // đọc mô tả API từ các file routes
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ===== Routes =====
app.get("/", ctrl.renderDashboard);
app.use("/suppliers", supplierRoutes);
app.use("/products", productRoutes);

// ===== Start server =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📖 Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
