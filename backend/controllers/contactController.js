const Contact = require("../models/Contact");
const sendContactEmail = require("../utils/sendContactEmail");

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    await sendContactEmail({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully."
    });
  } catch (error) {
    console.error("Contact message submission failed:", error);

    if (error.message === "SMTP settings are missing or invalid.") {
      return res.status(503).json({
        success: false,
        message:
          "Email delivery is not configured. Add the SMTP settings to backend/.env."
      });
    }

    res.status(500).json({
      success: false,
      message: "Unable to send your message right now. Please try again later."
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1
    });

    res.status(200).json({
      success: true,
      contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Message not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Message deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact
};