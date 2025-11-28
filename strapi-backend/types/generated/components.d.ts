import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFooter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    logos: Schema.Attribute.Component<'resuable.logo', true>;
    text: Schema.Attribute.String;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    text4: Schema.Attribute.String;
  };
}

export interface BlocksHeader extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    icons: Schema.Attribute.Media<'images', true>;
    text: Schema.Attribute.String;
  };
}

export interface HomepageBlogPreview extends Struct.ComponentSchema {
  collectionName: 'components_homepage_blog_previews';
  info: {
    displayName: 'blog-preview';
  };
  attributes: {
    heading: Schema.Attribute.String;
    limit: Schema.Attribute.Integer;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::blog-post.blog-post'>;
  };
}

export interface HomepageCategoryGrid extends Struct.ComponentSchema {
  collectionName: 'components_homepage_category_grids';
  info: {
    displayName: 'category-grid';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    heading: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['item 1', 'item 2 ', 'item 3']>;
  };
}

export interface HomepageFeatureCards extends Struct.ComponentSchema {
  collectionName: 'components_homepage_feature_cards';
  info: {
    displayName: 'feature-cards';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'homepage.feature-item', true>;
  };
}

export interface HomepageFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_feature_items';
  info: {
    displayName: 'feature-item';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageFeaturedProducts extends Struct.ComponentSchema {
  collectionName: 'components_homepage_featured_products';
  info: {
    displayName: 'featured-products';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    layout: Schema.Attribute.Enumeration<['item1', 'item2', 'item3']>;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    buttonLabel: Schema.Attribute.String;
    buttonLink: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepagePromoBanner extends Struct.ComponentSchema {
  collectionName: 'components_homepage_promo_banners';
  info: {
    displayName: 'promo-banner';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    tagline: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageStatItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_stat_items';
  info: {
    displayName: 'stat-item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    number: Schema.Attribute.Integer;
  };
}

export interface HomepageStats extends Struct.ComponentSchema {
  collectionName: 'components_homepage_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    items: Schema.Attribute.Component<'homepage.stat-item', true>;
  };
}

export interface HomepageTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonial_items';
  info: {
    displayName: 'testimonial-item';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    message: Schema.Attribute.String;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface HomepageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    heading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'homepage.testimonial-item', true>;
  };
}

export interface ResuableLogo extends Struct.ComponentSchema {
  collectionName: 'components_resuable_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedImageCarousel extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_carousels';
  info: {
    displayName: 'image-carousel';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean;
    delay: Schema.Attribute.Integer;
    height: Schema.Attribute.Enumeration<['small ', 'medium ', 'full']>;
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.footer': BlocksFooter;
      'blocks.header': BlocksHeader;
      'homepage.blog-preview': HomepageBlogPreview;
      'homepage.category-grid': HomepageCategoryGrid;
      'homepage.feature-cards': HomepageFeatureCards;
      'homepage.feature-item': HomepageFeatureItem;
      'homepage.featured-products': HomepageFeaturedProducts;
      'homepage.hero': HomepageHero;
      'homepage.promo-banner': HomepagePromoBanner;
      'homepage.stat-item': HomepageStatItem;
      'homepage.stats': HomepageStats;
      'homepage.testimonial-item': HomepageTestimonialItem;
      'homepage.testimonials': HomepageTestimonials;
      'resuable.logo': ResuableLogo;
      'shared.image-carousel': SharedImageCarousel;
      'shared.seo': SharedSeo;
    }
  }
}
