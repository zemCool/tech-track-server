const { Equipment } = require('../models/models')
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, status, installationDate, typeId, brandId, userId, info } = req.body;
      const equipment = await Equipment.create({ name, status, installationDate, typeId, brandId, userId });
      return res.status(201).json(equipment);
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const equipment = await Equipment.findAll();
    return res.json(equipment);
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const equipment = await Equipment.findByPk(id);
      if (!equipment) {
        return res.status(404).json({ message: 'Equipment not found' });
      }
      return res.json(equipment);
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async updateOne(req, res) {
    try {
      const { id } = req.params;
      const { name, status, installationDate, typeId, brandId, userId } = req.body;
      const equipment = await Equipment.findByPk(id);
      if (!equipment) {
        return res.status(404).json({ message: 'Equipment not found' });
      }
      equipment.name = name;
      equipment.status = status;
      equipment.installationDate = installationDate;
      equipment.typeId = typeId;
      equipment.brandId = brandId;
      equipment.userId = userId;
      await equipment.save();
      return res.json(equipment);
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async deleteOne(req, res) {
    try {
      const { id } = req.params;
      const equipment = await Equipment.findByPk(id);
      if (!equipment) {
        return res.status(404).json({ message: 'Equipment not found' });
      }
      await equipment.destroy();
      return res.json({ message: 'Equipment deleted successfully' });
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new DeviceController()