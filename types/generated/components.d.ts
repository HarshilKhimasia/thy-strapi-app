import type { Schema, Attribute } from '@strapi/strapi';

export interface AddPropertyCategoryAddProperty extends Schema.Component {
  collectionName: 'components_add_property_category_add_properties';
  info: {
    displayName: 'Add Property';
    icon: 'plus';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    PropertyDescription: Attribute.Text & Attribute.Required;
    Department: Attribute.Enumeration<
      [
        'Lettings ',
        'Sales',
        'Commercial ',
        'Investment',
        'Development ',
        'Other',
        'Data not available  '
      ]
    > &
      Attribute.Required;
    Price: Attribute.String & Attribute.Required;
    CouncilTaxBand: Attribute.Enumeration<
      [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'Other',
        'Data not available'
      ]
    > &
      Attribute.Required;
    Media: Attribute.Media<'images', true> & Attribute.Required;
    DoorNumber: Attribute.String & Attribute.Required;
    StreetName: Attribute.String & Attribute.Required;
    SecondLineOfAddress: Attribute.String & Attribute.Required;
    TownOrCity: Attribute.String & Attribute.Required;
    PostCode: Attribute.String & Attribute.Required;
    Latitude: Attribute.String & Attribute.Required;
    Longitude: Attribute.String & Attribute.Required;
    sizeInSqMtr: Attribute.String & Attribute.Required;
    Bedrooms: Attribute.String & Attribute.Required;
    Bathrooms: Attribute.String & Attribute.Required;
    Garages: Attribute.String & Attribute.Required;
    OffStreetParking: Attribute.Enumeration<
      [
        'Yes',
        'No',
        'Free Off street parking',
        'Permit holders parking',
        'Other',
        'Data not available'
      ]
    > &
      Attribute.Required;
    YearBuilt: Attribute.String & Attribute.Required;
    AvailableFrom: Attribute.Date & Attribute.Required;
    Basement: Attribute.Enumeration<
      ['Yes', 'No', 'Other', 'Data not available']
    > &
      Attribute.Required;
    Loft: Attribute.Enumeration<['Yes', 'No', 'Other', 'Data not available']> &
      Attribute.Required;
    Kitchen: Attribute.Enumeration<
      [
        'Separate kitchen',
        'Kitchen diner ',
        'Open plan kitchen',
        'Data not available ',
        'Other '
      ]
    > &
      Attribute.Required;
    PropertyType: Attribute.Enumeration<
      [
        'Room',
        'Studio flat',
        'Flat',
        'Moissanite ',
        'Semidetached house',
        'Detached house',
        'Terraced house',
        'End of terrace',
        'Cottage ',
        'Bungalow',
        'Manson ',
        'HMO',
        'Other ',
        'Custom Build'
      ]
    > &
      Attribute.Required;
    EnergyIndexKwh: Attribute.String & Attribute.Required;
    OwnerAgentNots: Attribute.Text & Attribute.Private;
    Amenities: Attribute.Blocks;
    forRent: Attribute.Boolean & Attribute.Required;
    forSale: Attribute.Boolean & Attribute.Required;
    featuredProperty: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Status: Attribute.String & Attribute.Required;
    LivingRooms: Attribute.String & Attribute.Required;
    Suit: Attribute.Enumeration<['Yes', 'No', 'Other', 'Data not available']> &
      Attribute.Required;
    FloorNumber: Attribute.String & Attribute.Required;
    EPCRating: Attribute.Enumeration<
      [
        'A plus plus',
        'A plus',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'Other',
        'Data not available '
      ]
    > &
      Attribute.Required;
    OfferedAs: Attribute.Enumeration<
      [
        'Fully Furnished',
        'Unfurnished',
        'Part Furnished',
        'White Goods Only',
        'Negotiable',
        'Tenant\u2019s Choice',
        'Other',
        'Data not available'
      ]
    > &
      Attribute.Required;
    LetType: Attribute.Enumeration<
      [
        'Short let',
        'Long let',
        'Six months',
        'Twelve months',
        'Negotiable ',
        'Other'
      ]
    > &
      Attribute.Required;
    MaxDeposit: Attribute.String;
    VideoLink: Attribute.String;
  };
}

export interface ContactPageContactPageFormFieldComponent
  extends Schema.Component {
  collectionName: 'components_contact_page_contact_page_form_field_components';
  info: {
    displayName: 'Contact Page Form Field Component';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContactPageContactPageLocationComponent
  extends Schema.Component {
  collectionName: 'components_contact_page_contact_page_location_components';
  info: {
    displayName: 'Contact Page Location Component';
    description: '';
  };
  attributes: {
    City: Attribute.String & Attribute.Required;
    address: Attribute.Text & Attribute.Required;
    phoneNumber: Attribute.String & Attribute.Required;
    googleMapLink: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface FaqQuestionAnswerComponent extends Schema.Component {
  collectionName: 'components_faq_question_answer_components';
  info: {
    displayName: 'Question Answer Component';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface FooterCategoryDiscoverLinksList extends Schema.Component {
  collectionName: 'components_footer_category_discover_links_lists';
  info: {
    displayName: 'Discover Links List';
    description: '';
  };
  attributes: {
    linkListItem: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface FooterCategoryPopularSearchLinksList extends Schema.Component {
  collectionName: 'components_footer_category_popular_search_links_lists';
  info: {
    displayName: 'Popular Search Links List';
    description: '';
  };
  attributes: {
    linkListItem: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface FooterCategoryQuickLinksList extends Schema.Component {
  collectionName: 'components_footer_category_quick_links_lists';
  info: {
    displayName: 'Quick Links List';
    description: '';
  };
  attributes: {
    linkListItem: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface FooterCategorySocialIcons extends Schema.Component {
  collectionName: 'components_footer_category_social_icons';
  info: {
    displayName: 'Social Icons';
    description: '';
  };
  attributes: {
    socialLink: Attribute.String & Attribute.Required;
    socialIconImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface MetaDataMetaDataComponent extends Schema.Component {
  collectionName: 'components_meta_data_meta_data_components';
  info: {
    displayName: 'Meta Data Component';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    canonical: Attribute.String & Attribute.Required;
    openGraphImage: Attribute.Media<'images'> & Attribute.Required;
    twitterHandle: Attribute.String & Attribute.Required;
    twitterUsername: Attribute.String & Attribute.Required;
    seoAuthor: Attribute.String & Attribute.Required;
    seoKeywords: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'add-property-category.add-property': AddPropertyCategoryAddProperty;
      'contact-page.contact-page-form-field-component': ContactPageContactPageFormFieldComponent;
      'contact-page.contact-page-location-component': ContactPageContactPageLocationComponent;
      'faq.question-answer-component': FaqQuestionAnswerComponent;
      'footer-category.discover-links-list': FooterCategoryDiscoverLinksList;
      'footer-category.popular-search-links-list': FooterCategoryPopularSearchLinksList;
      'footer-category.quick-links-list': FooterCategoryQuickLinksList;
      'footer-category.social-icons': FooterCategorySocialIcons;
      'meta-data.meta-data-component': MetaDataMetaDataComponent;
    }
  }
}
