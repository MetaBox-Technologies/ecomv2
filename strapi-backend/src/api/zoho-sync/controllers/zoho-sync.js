export default {
  async syncItem(ctx) {
    try {
      const payload = ctx.request.body;

      const zohoId = payload.zoho_item_id;

      // Try to find existing product in Strapi
      const existing = await strapi.entityService.findMany('api::product.product', {
        filters: { zoho_item_id: zohoId }
      });

      if (existing.length > 0) {
        // UPDATE EXISTING
        const productId = existing[0].id;

        const updated = await strapi.entityService.update(
          'api::product.product',
          productId,
          { data: payload }
        );

        return { status: 'updated', product: updated };
      }

      // CREATE NEW
      const created = await strapi.entityService.create(
        'api::product.product',
        { data: payload }
      );

      return { status: 'created', product: created };

    } catch (error) {
      ctx.throw(400, error.message);
    }
  }
};