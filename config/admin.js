module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ec19faea2d7436bd97876e08a310315f'),
  },
});
