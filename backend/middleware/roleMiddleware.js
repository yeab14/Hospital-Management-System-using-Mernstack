// middleware/roleMiddleware.js

const roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user.role; // Assuming user role is stored in req.user
  
      // Check if user role is included in allowedRoles
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ error: 'Unauthorized' });
      }
  
      next();
    };
  };
  
  module.exports = roleMiddleware;
  
