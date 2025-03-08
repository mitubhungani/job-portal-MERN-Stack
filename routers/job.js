const { Router } = require("express");

const router = Router()

const jobController =require('../controller/job')

router.get('/',jobController.getAllJobs)

router.post('/', jobController.createJob)

router.get('/:id', jobController.getJobById)

router.get('/company/:companyId', jobController.getJobsByCompanyId)

router.put('/:id', jobController.updateJob)

router.delete('/:id', jobController.deleteJob)

module.exports = router;