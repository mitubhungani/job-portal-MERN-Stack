const ApplicationService = require("../service/application");

const ApplicationController = {
  getAllApplications: async (req, res) => {
    try {
      const query = req.query || {};
      const aplications = await ApplicationService.getAll(query);
      res.status(200).json(applications);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createApplication: async (req, res) => {
    try {
      req.body.userId = req.user.id;
      const payload = req.body;
      const newApplication = await ApplicationService.create(payload);
      res.status(201).json(newApplication);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateApplication: async (req, res) => {
    try {
      let { id } = req.params;
      const payload = req.body;
      const updatedApplication = await ApplicationService.update(id, payload);
      res.status(200).json(updatedApplication);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getApplicationsByUserId: async (req, res) => {
    try {
      let { userId } = req.params;
      const applications = await ApplicationService.getByUserId(userId);
      res.status(200).json(applications);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getApplicationsByJobId: async (req, res) => {
    try {
      let { jobId } = req.params;
      const applications = await ApplicationService.getByJobId(jobId);
      res.status(200).json(applications);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = ApplicationController;
