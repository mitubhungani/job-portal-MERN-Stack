const { Router } = require("express");
const userRoutes = require("./user");
const userDetailRoutes = require('./details')
const companyRoute = require('./company');
const jobRouter = require("./job");
const applicationRoute = require("./application");

const index = Router()

index.use('/users',userRoutes)
index.use('/user-details',userDetailRoutes)
index.use('/companies',companyRoute)
index.use('/jobs',jobRouter)
index.use('/applications',applicationRoute)

module.exports = index;