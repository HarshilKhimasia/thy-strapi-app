import type { Schema, Attribute } from '@strapi/strapi';

export interface AddPropertyCategoryAddProperty extends Schema.Component {
  collectionName: 'components_add_property_category_add_properties';
  info: {
    displayName: 'Add Property';
    icon: 'stack';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    PropertyDescription: Attribute.Text;
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
    >;
    Price: Attribute.String;
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
    >;
    Media: Attribute.Media<'images', true>;
    DoorNumber: Attribute.String;
    StreetName: Attribute.String;
    SecondLineOfAddress: Attribute.String;
    TownOrCity: Attribute.String;
    PostCode: Attribute.String;
    Latitude: Attribute.String;
    Longitude: Attribute.String;
    sizeInSqMtr: Attribute.String;
    Bedrooms: Attribute.String;
    Bathrooms: Attribute.String;
    Garages: Attribute.String;
    OffStreetParking: Attribute.Enumeration<
      [
        'Yes',
        'No',
        'Free Off street parking',
        'Permit holders parking',
        'Other',
        'Data not available'
      ]
    >;
    YearBuilt: Attribute.String;
    AvailableFrom: Attribute.Date;
    Basement: Attribute.Enumeration<
      ['Yes', 'No', 'Other', 'Data not available']
    >;
    Loft: Attribute.Enumeration<['Yes', 'No', 'Other', 'Data not available']>;
    Kitchen: Attribute.Enumeration<
      [
        'Separate kitchen',
        'Kitchen diner ',
        'Open plan kitchen',
        'Data not available ',
        'Other '
      ]
    >;
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
    >;
    EnergyIndexKwh: Attribute.String;
    OwnerAgentNots: Attribute.Text & Attribute.Private;
    Amenities: Attribute.Blocks;
    forRent: Attribute.Boolean & Attribute.Required;
    forSale: Attribute.Boolean & Attribute.Required;
    featuredProperty: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Status: Attribute.String;
    LivingRooms: Attribute.String;
    Suit: Attribute.Enumeration<['Yes', 'No', 'Other', 'Data not available']>;
    FloorNumber: Attribute.String;
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
    >;
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
    >;
    LetType: Attribute.Enumeration<
      [
        'Short let',
        'Long let',
        'Six months',
        'Twelve months',
        'Negotiable ',
        'Other'
      ]
    >;
    MaxDeposit: Attribute.String;
    VideoLink: Attribute.String;
  };
}

export interface ContactPageContactPageFormFieldComponent
  extends Schema.Component {
  collectionName: 'components_contact_page_contact_page_form_field_components';
  info: {
    displayName: 'Contact Page Form Field Component';
  };
  attributes: {
    title: Attribute.String;
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
    City: Attribute.String;
    address: Attribute.Text;
    phoneNumber: Attribute.String;
    googleMapLink: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FaqQuestionAnswerComponent extends Schema.Component {
  collectionName: 'components_faq_question_answer_components';
  info: {
    displayName: 'Question Answer Component';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface FooterCategoryDiscoverLinksList extends Schema.Component {
  collectionName: 'components_footer_category_discover_links_lists';
  info: {
    displayName: 'Discover Links List';
    description: '';
  };
  attributes: {
    linkListItem: Attribute.String;
    link: Attribute.String;
  };
}

export interface FooterCategoryPopularSearchLinksList extends Schema.Component {
  collectionName: 'components_footer_category_popular_search_links_lists';
  info: {
    displayName: 'Popular Search Links List';
    description: '';
  };
  attributes: {
    linkListItem: Attribute.String;
    link: Attribute.String;
  };
}

export interface FooterCategoryQuickLinksList extends Schema.Component {
  collectionName: 'components_footer_category_quick_links_lists';
  info: {
    displayName: 'Quick Links List';
    description: '';
  };
  attributes: {
    linkListItem: Attribute.String;
    link: Attribute.String;
  };
}

export interface FooterCategorySocialIcons extends Schema.Component {
  collectionName: 'components_footer_category_social_icons';
  info: {
    displayName: 'Social Icons';
  };
  attributes: {
    socialLink: Attribute.String;
    socialIconImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MetaDataMetaDataComponent extends Schema.Component {
  collectionName: 'components_meta_data_meta_data_components';
  info: {
    displayName: 'Meta Data Component';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    canonical: Attribute.String;
    openGraphImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    twitterHandle: Attribute.String;
    twitterUsername: Attribute.String;
    seoAuthor: Attribute.String;
    seoKeywords: Attribute.Blocks;
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
