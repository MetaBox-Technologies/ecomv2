import type { Schema, Struct } from '@strapi/strapi';

export interface AccountForm extends Struct.ComponentSchema {
  collectionName: 'components_account_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    display_name: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    first_name: Schema.Attribute.String;
    last_name: Schema.Attribute.String;
    new_password: Schema.Attribute.String;
    old_password: Schema.Attribute.String;
    repeat_password: Schema.Attribute.String;
    save_button: Schema.Attribute.Component<'link.button', false>;
  };
}

export interface ArticlesCard extends Struct.ComponentSchema {
  collectionName: 'components_articles_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'link.link', true>;
    text: Schema.Attribute.String;
  };
}

export interface ArticlesHeading extends Struct.ComponentSchema {
  collectionName: 'components_articles_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    link: Schema.Attribute.Component<'link.link', false>;
    text: Schema.Attribute.String;
  };
}

export interface CardRooms extends Struct.ComponentSchema {
  collectionName: 'components_card_rooms';
  info: {
    displayName: 'Rooms';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'link.link', true>;
    text: Schema.Attribute.String;
  };
}

export interface CartFlyout extends Struct.ComponentSchema {
  collectionName: 'components_cart_flyouts';
  info: {
    displayName: 'flyout';
  };
  attributes: {
    checkout: Schema.Attribute.Component<'link.button', false>;
    items: Schema.Attribute.Component<'cart.item-row', true>;
    subtotal: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
    total: Schema.Attribute.Decimal;
    view_cart: Schema.Attribute.Component<'link.link', false>;
  };
}

export interface CartItemRow extends Struct.ComponentSchema {
  collectionName: 'components_cart_item_rows';
  info: {
    displayName: 'item-row';
  };
  attributes: {
    color: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    quantity: Schema.Attribute.Integer;
    remove: Schema.Attribute.Component<'link.link', false>;
  };
}

export interface FeaturedHeading extends Struct.ComponentSchema {
  collectionName: 'components_featured_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    link: Schema.Attribute.Component<'link.link', false>;
    text: Schema.Attribute.String;
  };
}

export interface FeaturedSlider extends Struct.ComponentSchema {
  collectionName: 'components_featured_sliders';
  info: {
    displayName: 'slider';
  };
  attributes: {
    button: Schema.Attribute.Component<'link.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    numbers: Schema.Attribute.Decimal;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    text: Schema.Attribute.String;
  };
}

export interface HomepageAbout extends Struct.ComponentSchema {
  collectionName: 'components_homepage_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    button: Schema.Attribute.Component<'link.button', false>;
    text_long: Schema.Attribute.Text;
    text_short: Schema.Attribute.String;
  };
}

export interface HomepageDynamicArticles extends Struct.ComponentSchema {
  collectionName: 'components_homepage_dynamic_articles';
  info: {
    displayName: 'DynamicArticles';
  };
  attributes: {
    Card: Schema.Attribute.Component<'articles.card', false>;
    Heading: Schema.Attribute.Component<'articles.heading', false>;
  };
}

export interface HomepageDynamicRooms extends Struct.ComponentSchema {
  collectionName: 'components_homepage_dynamic_rooms';
  info: {
    displayName: 'DynamicRooms';
  };
  attributes: {
    Card: Schema.Attribute.Component<'card.rooms', false>;
  };
}

export interface HomepageDynamicServices extends Struct.ComponentSchema {
  collectionName: 'components_homepage_dynamic_services';
  info: {
    displayName: 'DynamicServices';
  };
  attributes: {
    Services: Schema.Attribute.Component<'services.svc-card', true>;
  };
}

export interface HomepageDynamicSlider extends Struct.ComponentSchema {
  collectionName: 'components_homepage_dynamic_sliders';
  info: {
    displayName: 'DynamicSlider';
  };
  attributes: {
    Slider: Schema.Attribute.Component<'slide.slider', true>;
  };
}

export interface HomepageFooter extends Struct.ComponentSchema {
  collectionName: 'components_homepage_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    link: Schema.Attribute.Component<'link.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text_long: Schema.Attribute.Text;
    text_short: Schema.Attribute.String;
  };
}

export interface HomepageHeader extends Struct.ComponentSchema {
  collectionName: 'components_homepage_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'link.link', true>;
    text: Schema.Attribute.String;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'link.button', false>;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface HomepagePromotion extends Struct.ComponentSchema {
  collectionName: 'components_homepage_promotions';
  info: {
    displayName: 'promotion';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    Link: Schema.Attribute.Component<'link.link', true>;
    text: Schema.Attribute.String;
  };
}

export interface LinkButton extends Struct.ComponentSchema {
  collectionName: 'components_link_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface ProductAddToCart extends Struct.ComponentSchema {
  collectionName: 'components_product_add_to_carts';
  info: {
    displayName: 'AddToCart';
  };
  attributes: {
    button: Schema.Attribute.Component<'link.button', false>;
    quantity: Schema.Attribute.Integer;
  };
}

export interface ProductHero extends Struct.ComponentSchema {
  collectionName: 'components_product_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    badge: Schema.Attribute.Enumeration<
      ['new', 'sale', 'Item-50% OFF ', 'hot', 'none']
    >;
    image_gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ProductInfo extends Struct.ComponentSchema {
  collectionName: 'components_product_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    description: Schema.Attribute.Text;
    price: Schema.Attribute.Decimal;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProductMeasurement extends Struct.ComponentSchema {
  collectionName: 'components_product_measurements';
  info: {
    displayName: 'Measurement';
  };
  attributes: {
    measurements: Schema.Attribute.String;
  };
}

export interface ProductRelatedProducts extends Struct.ComponentSchema {
  collectionName: 'components_product_related_products';
  info: {
    displayName: 'relatedProducts';
  };
  attributes: {
    heading: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

export interface ProductTabs extends Struct.ComponentSchema {
  collectionName: 'components_product_tabs';
  info: {
    displayName: 'tabs';
  };
  attributes: {
    description: Schema.Attribute.Component<'product.tabs-description', false>;
    reviews: Schema.Attribute.Component<'product.tabs-reviews', false>;
    shipping: Schema.Attribute.Component<'product.tabs-shipping', false>;
  };
}

export interface ProductTabsDescription extends Struct.ComponentSchema {
  collectionName: 'components_product_tabs_descriptions';
  info: {
    displayName: 'TabsDescription';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface ProductTabsReviews extends Struct.ComponentSchema {
  collectionName: 'components_product_tabs_reviews';
  info: {
    displayName: 'TabsReviews';
  };
  attributes: {
    average_rating: Schema.Attribute.Decimal;
    reviews: Schema.Attribute.Component<'review.item', true>;
    total_reviews: Schema.Attribute.Integer;
  };
}

export interface ProductTabsShipping extends Struct.ComponentSchema {
  collectionName: 'components_product_tabs_shippings';
  info: {
    displayName: 'TabsShipping';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface ProductVariantColor extends Struct.ComponentSchema {
  collectionName: 'components_product_variant_colors';
  info: {
    displayName: 'VariantColor';
  };
  attributes: {
    available: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    color_name: Schema.Attribute.String;
    swatch: Schema.Attribute.Media<'images'>;
  };
}

export interface ReviewItem extends Struct.ComponentSchema {
  collectionName: 'components_review_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    author: Schema.Attribute.String;
    comment: Schema.Attribute.Text;
    date: Schema.Attribute.Date;
    rating: Schema.Attribute.Integer;
  };
}

export interface ReviewShopReviewItem extends Struct.ComponentSchema {
  collectionName: 'components_review_shop_review_items';
  info: {
    displayName: 'shopReviewItem';
  };
  attributes: {
    author: Schema.Attribute.String;
    comment: Schema.Attribute.Text;
    rating: Schema.Attribute.Integer;
  };
}

export interface ServicesSvcCard extends Struct.ComponentSchema {
  collectionName: 'components_services_svc_cards';
  info: {
    displayName: 'SvcCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface ShopAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_shop_about_uses';
  info: {
    displayName: 'about-us';
  };
  attributes: {
    button: Schema.Attribute.Component<'link.button', false>;
    text: Schema.Attribute.String;
  };
}

export interface ShopFilter extends Struct.ComponentSchema {
  collectionName: 'components_shop_filters';
  info: {
    displayName: 'filter';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    option: Schema.Attribute.Component<'shop.filter-option', true>;
    price_options: Schema.Attribute.Component<'shop.filter-option', true>;
  };
}

export interface ShopFilterOption extends Struct.ComponentSchema {
  collectionName: 'components_shop_filter_options';
  info: {
    displayName: 'filter-option';
  };
  attributes: {
    label: Schema.Attribute.String;
    max: Schema.Attribute.Decimal;
    min: Schema.Attribute.Decimal;
  };
}

export interface ShopNewArrivals extends Struct.ComponentSchema {
  collectionName: 'components_shop_new_arrivals';
  info: {
    displayName: 'new-arrivals';
  };
  attributes: {
    heading: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

export interface ShopProductCard extends Struct.ComponentSchema {
  collectionName: 'components_shop_product_cards';
  info: {
    displayName: 'product-card';
  };
  attributes: {
    badge: Schema.Attribute.Enumeration<['new', 'sale']>;
    button: Schema.Attribute.Component<'link.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    price: Schema.Attribute.Decimal;
    text_short: Schema.Attribute.String;
  };
}

export interface ShopSearch extends Struct.ComponentSchema {
  collectionName: 'components_shop_searches';
  info: {
    displayName: 'search';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface SlideSlider extends Struct.ComponentSchema {
  collectionName: 'components_slide_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    button: Schema.Attribute.Component<'link.button', false>;
    enum: Schema.Attribute.Enumeration<['new', 'sale', 'featured', 'hot']>;
    numbers: Schema.Attribute.Decimal;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    text_short: Schema.Attribute.String;
  };
}

export interface UserAddressCard extends Struct.ComponentSchema {
  collectionName: 'components_user_address_cards';
  info: {
    displayName: 'address-card';
  };
  attributes: {
    address_line: Schema.Attribute.Text;
    edit: Schema.Attribute.Component<'link.link', false>;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['billing', 'shipping']>;
  };
}

export interface UserProfilePic extends Struct.ComponentSchema {
  collectionName: 'components_user_profile_pics';
  info: {
    displayName: 'profile-pic';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    upload_icon: Schema.Attribute.Enumeration<['camera', 'gallery']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'account.form': AccountForm;
      'articles.card': ArticlesCard;
      'articles.heading': ArticlesHeading;
      'card.rooms': CardRooms;
      'cart.flyout': CartFlyout;
      'cart.item-row': CartItemRow;
      'featured.heading': FeaturedHeading;
      'featured.slider': FeaturedSlider;
      'homepage.about': HomepageAbout;
      'homepage.dynamic-articles': HomepageDynamicArticles;
      'homepage.dynamic-rooms': HomepageDynamicRooms;
      'homepage.dynamic-services': HomepageDynamicServices;
      'homepage.dynamic-slider': HomepageDynamicSlider;
      'homepage.footer': HomepageFooter;
      'homepage.header': HomepageHeader;
      'homepage.hero': HomepageHero;
      'homepage.promotion': HomepagePromotion;
      'link.button': LinkButton;
      'link.link': LinkLink;
      'product.add-to-cart': ProductAddToCart;
      'product.hero': ProductHero;
      'product.info': ProductInfo;
      'product.measurement': ProductMeasurement;
      'product.related-products': ProductRelatedProducts;
      'product.tabs': ProductTabs;
      'product.tabs-description': ProductTabsDescription;
      'product.tabs-reviews': ProductTabsReviews;
      'product.tabs-shipping': ProductTabsShipping;
      'product.variant-color': ProductVariantColor;
      'review.item': ReviewItem;
      'review.shop-review-item': ReviewShopReviewItem;
      'services.svc-card': ServicesSvcCard;
      'shop.about-us': ShopAboutUs;
      'shop.filter': ShopFilter;
      'shop.filter-option': ShopFilterOption;
      'shop.new-arrivals': ShopNewArrivals;
      'shop.product-card': ShopProductCard;
      'shop.search': ShopSearch;
      'slide.slider': SlideSlider;
      'user.address-card': UserAddressCard;
      'user.profile-pic': UserProfilePic;
    }
  }
}
