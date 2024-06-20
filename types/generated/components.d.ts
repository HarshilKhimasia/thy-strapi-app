import type { Schema, Attribute } from '@strapi/strapi';

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
      'contact-page.contact-page-form-field-component': ContactPageContactPageFormFieldComponent;
      'contact-page.contact-page-location-component': ContactPageContactPageLocationComponent;
      'faq.question-answer-component': FaqQuestionAnswerComponent;
    }
  }
}
