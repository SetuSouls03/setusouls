const mongoose = require("mongoose");

// Q&A Schema
const qnaSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  header: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
}, { timestamps: true });

// Meta Schema
const qnaMetaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

// Export both models
const Qna = mongoose.model("Qna", qnaSchema);
const QnaMeta = mongoose.model("QnaMeta", qnaMetaSchema);

module.exports = { Qna, QnaMeta };
