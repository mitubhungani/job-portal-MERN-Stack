const jobService = require("../service/jobs");

exports.createJob = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    let job = await jobService.create(req.body);
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    let job = await jobService.getAll(req.query);
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getJobById = async (req, res) => {
  try {
    let job = await jobService.getJobById(req.params.id);
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getJobsByCompanyId = async (req, res) => {
  try {
    let job = await jobService.getAllByCompanyId(req.params.companyId);
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateJob = async (req, res) => {
  try {
    let job = await jobService.update(req.params.id, req.body);
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    let job = await jobService.delete(req.params.id);
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
