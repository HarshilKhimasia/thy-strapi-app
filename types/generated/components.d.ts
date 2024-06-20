import type { Schema, Attribute } from '@strapi/strapi';

export interface AddPropertyCategoryAddProperty extends Schema.Component {
  collectionName: 'components_add_property_category_add_properties';
  info: {
    displayName: 'Add Property';
    icon: 'stack';
  };
  attributes: {
    Title: Attribute.String;
    PropertyDescription: Attribute.Text;
    SelectPropertyType: Attribute.Enumeration<
      [
        'Room',
        'Studio flat',
        'Flat',
        'Moissanite ',
        'Semidetached house',
        'Detached house',
        'Terraced house',
        'End of terrace house',
        'Cottage ',
        'Bungalow',
        'Manson '
      ]
    >;
    Department: Attribute.Enumeration<
      ['Lettings ', 'Sales', 'Commercial ', 'Commercial Sale ', 'Investment ']
    >;
    Status: Attribute.Enumeration<
      ['New  ', 'New instructions', 'Reduced ', 'Under offer ', 'Sold ', 'STC']
    >;
    Price: Attribute.String;
    CouncilTaxBand: Attribute.Enumeration<['A', 'B', 'C', 'D', 'E', 'F']>;
    Media: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    DoorNumber: Attribute.String;
    StreetName: Attribute.String;
    SecondLineOfAddress: Attribute.String;
    TownOrCity: Attribute.String;
    PostCode: Attribute.String;
    Latitude: Attribute.String;
    Longitude: Attribute.String;
    sizeInSqMtr: Attribute.String;
    Receptions: Attribute.String;
    Bedrooms: Attribute.String;
    Bathrooms: Attribute.String;
    Garages: Attribute.String;
    OffStreetParking: Attribute.Enumeration<
      ['Yes', 'No', 'Free Off street parking']
    >;
    YearBuilt: Attribute.String;
    AvailableFrom: Attribute.Date;
    Basement: Attribute.String;
    Loft: Attribute.Enumeration<['Yes', 'No']>;
    Kitchen: Attribute.Enumeration<
      ['Separate kitchen', 'Open Plan Kitchen', 'Kitchen and Dinner']
    >;
    PropertyType: Attribute.Enumeration<
      ['Semi detached', 'Detached', 'Terraced', 'End of Terrace']
    >;
    FloorNumber: Attribute.Integer;
    EPCRating: Attribute.String;
    EnergyIndexKwh: Attribute.String;
    OwnerAgentNots: Attribute.Text;
    Amenities: Attribute.Blocks;
    forRent: Attribute.Boolean & Attribute.Required;
    forSale: Attribute.Boolean & Attribute.Required;
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
  };
  attributes: {
    locationJSONFile: Attribute.JSON;
    City: Attribute.String;
    address: Attribute.Text;
    phoneNumber: Attribute.String;
    googleMapLink: Attribute.String;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'add-property-category.add-property': AddPropertyCategoryAddProperty;
      'contact-page.contact-page-form-field-component': ContactPageContactPageFormFieldComponent;
      'contact-page.contact-page-location-component': ContactPageContactPageLocationComponent;
      'faq.question-answer-component': FaqQuestionAnswerComponent;
    }
  }
}
