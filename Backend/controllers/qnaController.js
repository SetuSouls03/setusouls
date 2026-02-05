const { Qna, QnaMeta } = require("../models/qnaModel");

// GET /api/qna => return Q&A + meta info
const getAllQna = async (req, res) => {
  try {
    // Fetch Q&A sorted by ID
    const qnaList = await Qna.find().sort({ id: 1 });

    // Fetch meta info (assume only one document)
    const meta = await QnaMeta.findOne();

    res.json({
      qna: qnaList,
      meta: meta || { title: "Devotee Queries", description: "" },
    });
  } catch (err) {
    console.error("Error fetching Q&A:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getAllQna };
