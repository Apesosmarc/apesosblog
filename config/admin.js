module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9cfe9643fe67bfac8e41607308eb77d9'),
  },
});
