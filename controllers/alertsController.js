const { Alerts } = require('../models/models')

class AlertsController {
  async getAll(req, res) {
    const alerts = await Alerts.findAll()
    const filteredAlerts = alerts.filter(alert => alert.equipmentId !== null);
    return res.json({...filteredAlerts, message: 'not good'});
  }
}

module.exports = new AlertsController()