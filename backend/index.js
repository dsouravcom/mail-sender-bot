const express = require("express");
require("dotenv").config();
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const logger = require ("./logger.js");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.json());

// Configure the CORS for whitelisted domains.
const allowedOrigins = process.env.WHITELISTED_DOMAINS;
const corsOptions = {
  origin: (origin, callback) => {
    // Check if the origin is allowed
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS -> " + origin));
    }
  },
  methods: "POST,GET",
  credentials: true, // Enable credentials (if needed)
  optionsSuccessStatus: 204, // Respond with a 204 status for preflight requests
};

// Apply CORS middleware globally to all routes
app.use((req, res, next) => {
  const excludeRoutes = ["/test"]; // You can include routes that don't use Whitelisted domains.
  if (excludeRoutes.includes(req.path)) {
    cors()(req, res, next);
  } else {
    cors(corsOptions)(req, res, next);
  }
});

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { subject, email, description } = req.body;

    const mailOptions = {
      from: "Mail sender Bot",
      to: email,
      subject: subject,
      text: description,
    };

    if (req.file) {
      console.log("File received:", req.file);
      const { originalname, filename } = req.file;
      mailOptions.attachments = [
        {
          filename: originalname,
          path: path.join("uploads", filename),
        },
      ];
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        logger.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        logger.info("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }

      if (req.file) {
        const filePath = path.join("uploads", req.file.filename);
        try {
          await fs.promises.unlink(filePath);
          logger.info("File deleted:", filePath);
        } catch (error) {
          logger.error("Error deleting file:", error);
        }
      }
    });
  } catch (error) {
    logger.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL,
      to: "hello@dsourav.com",
      subject: name,
      text: email + "\n\n" + message,
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const info = await transporter.sendMail(mailOptions);

    logger.info("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    logger.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

app.get("/test", (req, res) => {
  res.send("API is running");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
