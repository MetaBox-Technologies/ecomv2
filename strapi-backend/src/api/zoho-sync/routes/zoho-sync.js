export default {
  routes: [
    {
      method: 'POST',
      path: '/zoho-sync/item',
      handler: 'zohoSync.syncItem',
      config: {
        auth: false
      }
    }
  ]
};