const Company = require("../model/Company");

exports.createCompany = async (payload) => {
  let company = await Company.create(payload);
  return company;
};

exports.getAllCompany = async (query) => {
  let company = await Company.find(query);
  return company;
};

exports.getCompanyById = async (id) => {
  let company = await Company.findById(id);
  return company;
};

exports.updateCompany = async (id, payload) => {
  let company = await Company.findByIdAndUpdate(id, payload, { new: true });
  return company;
};

exports.deleteCompany = async (id) => {
  let company = await Company.findByIdAndDelete(id);
  return company;
};
