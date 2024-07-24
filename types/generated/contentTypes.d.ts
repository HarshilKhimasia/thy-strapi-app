import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutPageAboutPage extends Schema.SingleType {
  collectionName: 'about_pages';
  info: {
    singularName: 'about-page';
    pluralName: 'about-pages';
    displayName: 'About Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageHeading: Attribute.String & Attribute.Required;
    pageBannerImage: Attribute.Media<'images'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-page.about-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-page.about-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutPageMetadataAboutPageMetadata
  extends Schema.SingleType {
  collectionName: 'about_page_metadatas';
  info: {
    singularName: 'about-page-metadata';
    pluralName: 'about-page-metadatas';
    displayName: 'About Page Metadata';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PageMetaData: Attribute.Component<'meta-data.meta-data-component'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-page-metadata.about-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-page-metadata.about-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddNewPropertyCommercialForRentAddNewPropertyCommercialForRent
  extends Schema.CollectionType {
  collectionName: 'add_new_property_commercial_for_rents';
  info: {
    singularName: 'add-new-property-commercial-for-rent';
    pluralName: 'add-new-property-commercial-for-rents';
    displayName: 'Add New Property (Commercial For Rent)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    UUID: Attribute.UID<
      undefined,
      undefined,
      {
        'uuid-format': 'CL[1-9]\\d{5}';
        'disable-regenerate': true;
      }
    > &
      Attribute.CustomField<
        'plugin::strapi-advanced-uuid.uuid',
        {
          'uuid-format': 'CL[1-9]\\d{5}';
          'disable-regenerate': true;
        }
      >;
    AddingZone: Attribute.Component<'add-property-category.add-property'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::add-new-property-commercial-for-rent.add-new-property-commercial-for-rent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::add-new-property-commercial-for-rent.add-new-property-commercial-for-rent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddNewPropertyCommercialForSaleAddNewPropertyCommercialForSale
  extends Schema.CollectionType {
  collectionName: 'add_new_property_commercial_for_sales';
  info: {
    singularName: 'add-new-property-commercial-for-sale';
    pluralName: 'add-new-property-commercial-for-sales';
    displayName: 'Add New Property (Commercial For Sale)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    UUID: Attribute.UID<
      undefined,
      undefined,
      {
        'disable-regenerate': true;
        'uuid-format': 'CS[1-9]\\d{5}';
      }
    > &
      Attribute.CustomField<
        'plugin::strapi-advanced-uuid.uuid',
        {
          'disable-regenerate': true;
          'uuid-format': 'CS[1-9]\\d{5}';
        }
      >;
    AddingZone: Attribute.Component<'add-property-category.add-property'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::add-new-property-commercial-for-sale.add-new-property-commercial-for-sale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::add-new-property-commercial-for-sale.add-new-property-commercial-for-sale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddNewPropertyFlatForRentAddNewPropertyFlatForRent
  extends Schema.CollectionType {
  collectionName: 'add_new_property_flat_for_rents';
  info: {
    singularName: 'add-new-property-flat-for-rent';
    pluralName: 'add-new-property-flat-for-rents';
    displayName: 'Add New Property (Flat For Rent)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    UUID: Attribute.UID<
      undefined,
      undefined,
      {
        'uuid-format': 'FL[1-9]\\d{5}';
        'disable-regenerate': true;
      }
    > &
      Attribute.CustomField<
        'plugin::strapi-advanced-uuid.uuid',
        {
          'uuid-format': 'FL[1-9]\\d{5}';
          'disable-regenerate': true;
        }
      >;
    AddingZone: Attribute.Component<'add-property-category.add-property'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::add-new-property-flat-for-rent.add-new-property-flat-for-rent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::add-new-property-flat-for-rent.add-new-property-flat-for-rent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddNewPropertyFlatForSaleAddNewPropertyFlatForSale
  extends Schema.CollectionType {
  collectionName: 'add_new_property_flat_for_sales';
  info: {
    singularName: 'add-new-property-flat-for-sale';
    pluralName: 'add-new-property-flat-for-sales';
    displayName: 'Add New Property (Flat For Sale)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    UUID: Attribute.UID<
      undefined,
      undefined,
      {
        'uuid-format': 'FS[1-9]\\d{5}';
        'disable-regenerate': true;
      }
    > &
      Attribute.CustomField<
        'plugin::strapi-advanced-uuid.uuid',
        {
          'uuid-format': 'FS[1-9]\\d{5}';
          'disable-regenerate': true;
        }
      >;
    AddingZone: Attribute.Component<'add-property-category.add-property'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::add-new-property-flat-for-sale.add-new-property-flat-for-sale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::add-new-property-flat-for-sale.add-new-property-flat-for-sale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddNewPropertyHouseForRentAddNewPropertyHouseForRent
  extends Schema.CollectionType {
  collectionName: 'add_new_property_house_for_rents';
  info: {
    singularName: 'add-new-property-house-for-rent';
    pluralName: 'add-new-property-house-for-rents';
    displayName: 'Add New Property (House For Rent)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    UUID: Attribute.UID<
      undefined,
      undefined,
      {
        'uuid-format': 'HL[1-9]\\d{5}';
        'disable-regenerate': true;
      }
    > &
      Attribute.CustomField<
        'plugin::strapi-advanced-uuid.uuid',
        {
          'uuid-format': 'HL[1-9]\\d{5}';
          'disable-regenerate': true;
        }
      >;
    AddingZone: Attribute.Component<'add-property-category.add-property'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::add-new-property-house-for-rent.add-new-property-house-for-rent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::add-new-property-house-for-rent.add-new-property-house-for-rent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddNewPropertyHouseForSaleAddNewPropertyHouseForSale
  extends Schema.CollectionType {
  collectionName: 'add_new_property_house_for_sales';
  info: {
    singularName: 'add-new-property-house-for-sale';
    pluralName: 'add-new-property-house-for-sales';
    displayName: 'Add New Property (House For Sale)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    UUID: Attribute.UID<
      undefined,
      undefined,
      {
        'uuid-format': 'HS[1-9]\\d{5}';
        'disable-regenerate': true;
      }
    > &
      Attribute.CustomField<
        'plugin::strapi-advanced-uuid.uuid',
        {
          'uuid-format': 'HS[1-9]\\d{5}';
          'disable-regenerate': true;
        }
      >;
    AddingZone: Attribute.Component<'add-property-category.add-property'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::add-new-property-house-for-sale.add-new-property-house-for-sale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::add-new-property-house-for-sale.add-new-property-house-for-sale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddNewPropertyOfficeForRentAddNewPropertyOfficeForRent
  extends Schema.CollectionType {
  collectionName: 'add_new_property_office_for_rents';
  info: {
    singularName: 'add-new-property-office-for-rent';
    pluralName: 'add-new-property-office-for-rents';
    displayName: 'Add New Property (Office For Rent)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    UUID: Attribute.UID<
      undefined,
      undefined,
      {
        'disable-regenerate': true;
        'uuid-format': 'OL[1-9]\\d{5}';
      }
    > &
      Attribute.CustomField<
        'plugin::strapi-advanced-uuid.uuid',
        {
          'disable-regenerate': true;
          'uuid-format': 'OL[1-9]\\d{5}';
        }
      >;
    AddingZone: Attribute.Component<'add-property-category.add-property'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::add-new-property-office-for-rent.add-new-property-office-for-rent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::add-new-property-office-for-rent.add-new-property-office-for-rent',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddNewPropertyOfficeForSaleAddNewPropertyOfficeForSale
  extends Schema.CollectionType {
  collectionName: 'add_new_property_office_for_sales';
  info: {
    singularName: 'add-new-property-office-for-sale';
    pluralName: 'add-new-property-office-for-sales';
    displayName: 'Add New Property (Office For Sale)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    UUID: Attribute.UID<
      undefined,
      undefined,
      {
        'disable-regenerate': true;
        'uuid-format': 'OS[1-9]\\d{5}';
      }
    > &
      Attribute.CustomField<
        'plugin::strapi-advanced-uuid.uuid',
        {
          'disable-regenerate': true;
          'uuid-format': 'OS[1-9]\\d{5}';
        }
      >;
    AddingZone: Attribute.Component<'add-property-category.add-property'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::add-new-property-office-for-sale.add-new-property-office-for-sale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::add-new-property-office-for-sale.add-new-property-office-for-sale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAdvanceFilterLocationAdvanceFilterLocation
  extends Schema.CollectionType {
  collectionName: 'advance_filter_locations';
  info: {
    singularName: 'advance-filter-location';
    pluralName: 'advance-filter-locations';
    displayName: 'Advance Filter Location';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Location: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::advance-filter-location.advance-filter-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::advance-filter-location.advance-filter-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAllPolicyAllPolicy extends Schema.CollectionType {
  collectionName: 'all_policies';
  info: {
    singularName: 'all-policy';
    pluralName: 'all-policies';
    displayName: 'All Policy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    policyName: Attribute.String & Attribute.Required;
    policyFile: Attribute.Media<'files'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::all-policy.all-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::all-policy.all-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAwardMainImageAwardMainImage extends Schema.SingleType {
  collectionName: 'award_main_images';
  info: {
    singularName: 'award-main-image';
    pluralName: 'award-main-images';
    displayName: 'Award Main Image';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    caption: Attribute.String &
      Attribute.Private &
      Attribute.DefaultTo<'default'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::award-main-image.award-main-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::award-main-image.award-main-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiComparePageComparePage extends Schema.SingleType {
  collectionName: 'compare_pages';
  info: {
    singularName: 'compare-page';
    pluralName: 'compare-pages';
    displayName: 'Compare Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageHeading: Attribute.String & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::compare-page.compare-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::compare-page.compare-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiComparePageMetadataComparePageMetadata
  extends Schema.SingleType {
  collectionName: 'compare_page_metadatas';
  info: {
    singularName: 'compare-page-metadata';
    pluralName: 'compare-page-metadatas';
    displayName: 'Compare Page Metadata';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PageMetaData: Attribute.Component<'meta-data.meta-data-component'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::compare-page-metadata.compare-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::compare-page-metadata.compare-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactPageFormContactPageForm
  extends Schema.CollectionType {
  collectionName: 'contact_page_forms';
  info: {
    singularName: 'contact-page-form';
    pluralName: 'contact-page-forms';
    displayName: 'Contact Page Form';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    formHeading: Attribute.String & Attribute.Required;
    fieldZone: Attribute.DynamicZone<
      ['contact-page.contact-page-form-field-component']
    > &
      Attribute.Required;
    formButtonText: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-page-form.contact-page-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-page-form.contact-page-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactPageIntroContactPageIntro extends Schema.SingleType {
  collectionName: 'contact_page_intros';
  info: {
    singularName: 'contact-page-intro';
    pluralName: 'contact-page-intros';
    displayName: 'Contact Page Intro';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    para: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-page-intro.contact-page-intro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-page-intro.contact-page-intro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactPageMetadataContactPageMetadata
  extends Schema.SingleType {
  collectionName: 'contact_page_metadatas';
  info: {
    singularName: 'contact-page-metadata';
    pluralName: 'contact-page-metadatas';
    displayName: 'Contact Page Metadata';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PageMetaData: Attribute.Component<'meta-data.meta-data-component'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-page-metadata.contact-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-page-metadata.contact-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCtaSectionCtaSection extends Schema.CollectionType {
  collectionName: 'cta_sections';
  info: {
    singularName: 'cta-section';
    pluralName: 'cta-sections';
    displayName: 'cta section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageCta: Attribute.String & Attribute.Required;
    ctaHeading: Attribute.String & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
    numberButtonText: Attribute.String & Attribute.Required;
    ctaSubHeading: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cta-section.cta-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cta-section.cta-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExclusiveAgentsSectionExclusiveAgentsSection
  extends Schema.SingleType {
  collectionName: 'exclusive_agents_sections';
  info: {
    singularName: 'exclusive-agents-section';
    pluralName: 'exclusive-agents-sections';
    displayName: 'Exclusive Agents Section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::exclusive-agents-section.exclusive-agents-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::exclusive-agents-section.exclusive-agents-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExclusiveAgentsSectionCarouselExclusiveAgentsSectionCarousel
  extends Schema.CollectionType {
  collectionName: 'exclusive_agents_section_carousels';
  info: {
    singularName: 'exclusive-agents-section-carousel';
    pluralName: 'exclusive-agents-section-carousels';
    displayName: 'Exclusive Agents Section Carousel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Designation: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::exclusive-agents-section-carousel.exclusive-agents-section-carousel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::exclusive-agents-section-carousel.exclusive-agents-section-carousel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqPageFaqPage extends Schema.SingleType {
  collectionName: 'faq_pages';
  info: {
    singularName: 'faq-page';
    pluralName: 'faq-pages';
    displayName: 'FAQ Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageHeading: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqPageMetadataFaqPageMetadata extends Schema.SingleType {
  collectionName: 'faq_page_metadatas';
  info: {
    singularName: 'faq-page-metadata';
    pluralName: 'faq-page-metadatas';
    displayName: 'FAQ Page Metadata';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PageMetaData: Attribute.Component<'meta-data.meta-data-component'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-page-metadata.faq-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-page-metadata.faq-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqSectionFaqSection extends Schema.CollectionType {
  collectionName: 'faq_sections';
  info: {
    singularName: 'faq-section';
    pluralName: 'faq-sections';
    displayName: 'FAQ Section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    mainQuestion: Attribute.String & Attribute.Required;
    questionNAnswer: Attribute.DynamicZone<['faq.question-answer-component']> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-section.faq-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-section.faq-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    footerLogo: Attribute.Media<'images'> & Attribute.Required;
    AddressTitle: Attribute.String & Attribute.Required;
    FullAddress: Attribute.Text & Attribute.Required;
    PhoneTitle: Attribute.String & Attribute.Required;
    FullPhoneNumber: Attribute.String & Attribute.Required;
    FollowUsTitle: Attribute.String & Attribute.Required;
    FooterSocialIconsZone: Attribute.DynamicZone<
      ['footer-category.social-icons']
    > &
      Attribute.Required;
    MonthlyNewsletterTitle: Attribute.String & Attribute.Required;
    PopularSearchZone: Attribute.DynamicZone<
      ['footer-category.popular-search-links-list']
    > &
      Attribute.Required;
    QuickLinksZone: Attribute.DynamicZone<
      ['footer-category.quick-links-list']
    > &
      Attribute.Required;
    DiscoverLinksZone: Attribute.DynamicZone<
      ['footer-category.discover-links-list']
    > &
      Attribute.Required;
    SendEmailTitle: Attribute.String & Attribute.Required;
    FullSendEmail: Attribute.String & Attribute.Required;
    PopularSearchTitle: Attribute.String & Attribute.Required;
    QuickLinksTitle: Attribute.String & Attribute.Required;
    DiscoverLinksTitle: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGetMoreInformationGetMoreInformation
  extends Schema.SingleType {
  collectionName: 'get_more_informations';
  info: {
    singularName: 'get-more-information';
    pluralName: 'get-more-informations';
    displayName: 'Get More Information';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Heading: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
    PhoneNumber: Attribute.String & Attribute.Required;
    FormButtonText: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::get-more-information.get-more-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::get-more-information.get-more-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'Home Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heroSectionHeading: Attribute.String & Attribute.Required;
    featuredSectionHeading: Attribute.String & Attribute.Required;
    featuredSectionSubHeading: Attribute.Text & Attribute.Required;
    discoverPopularPropertiesSectionHeading: Attribute.String &
      Attribute.Required;
    discoverPopularPropertiesSectionSubHeading: Attribute.String &
      Attribute.Required;
    experienceSectionHeading: Attribute.String & Attribute.Required;
    experienceSectionSubHeading: Attribute.Text & Attribute.Required;
    experienceSectionButtonText: Attribute.String & Attribute.Required;
    ListingforsaleHeading: Attribute.String & Attribute.Required;
    listingforsaleNumber: Attribute.String & Attribute.Required;
    listingforrentHeading: Attribute.String & Attribute.Required;
    listingforrentNumber: Attribute.String & Attribute.Required;
    propertysoldHeading: Attribute.String & Attribute.Required;
    propertysoldNumber: Attribute.String & Attribute.Required;
    popularPropertiesHeading: Attribute.String & Attribute.Required;
    popularPropertiesSubHeading: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageMetadataHomePageMetadata extends Schema.SingleType {
  collectionName: 'home_page_metadatas';
  info: {
    singularName: 'home-page-metadata';
    pluralName: 'home-page-metadatas';
    displayName: 'Home Page Metadata';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PageMetaData: Attribute.Component<'meta-data.meta-data-component'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page-metadata.home-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page-metadata.home-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndividualPropertyPageMetadataIndividualPropertyPageMetadata
  extends Schema.SingleType {
  collectionName: 'individual_property_page_metadatas';
  info: {
    singularName: 'individual-property-page-metadata';
    pluralName: 'individual-property-page-metadatas';
    displayName: 'Individual Property Page Metadata';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PageMetaData: Attribute.Component<'meta-data.meta-data-component'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::individual-property-page-metadata.individual-property-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::individual-property-page-metadata.individual-property-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInquiryFormInquiryForm extends Schema.SingleType {
  collectionName: 'inquiry_forms';
  info: {
    singularName: 'inquiry-form';
    pluralName: 'inquiry-forms';
    displayName: 'Inquiry Form';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.String & Attribute.Required;
    selectdepartmentHeading: Attribute.String & Attribute.Required;
    titleTitle: Attribute.String & Attribute.Required;
    FirstNameTitle: Attribute.String & Attribute.Required;
    MiddleNameTitle: Attribute.String & Attribute.Required;
    SurnameTitle: Attribute.String & Attribute.Required;
    EmailTitle: Attribute.String & Attribute.Required;
    PhoneTitle: Attribute.String & Attribute.Required;
    contactinOnBehalfTitle: Attribute.Text & Attribute.Required;
    preferredMethodTitle: Attribute.String & Attribute.Required;
    messageTitle: Attribute.String & Attribute.Required;
    formButtontext: Attribute.String & Attribute.Required;
    formMainImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    selectDepratmentList: Attribute.Blocks & Attribute.Required;
    TitleList: Attribute.Blocks & Attribute.Required;
    preferredMethodList: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::inquiry-form.inquiry-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::inquiry-form.inquiry-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMissionSectionMissionSection extends Schema.CollectionType {
  collectionName: 'mission_sections';
  info: {
    singularName: 'mission-section';
    pluralName: 'mission-sections';
    displayName: 'Mission Section Para';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    missionPara: Attribute.Text & Attribute.Required;
    isHeading: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mission-section.mission-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mission-section.mission-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMissionSectionHeadingMissionSectionHeading
  extends Schema.SingleType {
  collectionName: 'mission_section_headings';
  info: {
    singularName: 'mission-section-heading';
    pluralName: 'mission-section-headings';
    displayName: 'Mission Section Heading';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mission-section-heading.mission-section-heading',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mission-section-heading.mission-section-heading',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNearbySimilarPropertyNearbySimilarProperty
  extends Schema.SingleType {
  collectionName: 'nearby_similar_properties';
  info: {
    singularName: 'nearby-similar-property';
    pluralName: 'nearby-similar-properties';
    displayName: 'Nearby Similar Property';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::nearby-similar-property.nearby-similar-property',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::nearby-similar-property.nearby-similar-property',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurAccreditationsAndMembershipOurAccreditationsAndMembership
  extends Schema.SingleType {
  collectionName: 'our_accreditations_and_memberships';
  info: {
    singularName: 'our-accreditations-and-membership';
    pluralName: 'our-accreditations-and-memberships';
    displayName: 'Our accreditations & membership';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    partnerImages: Attribute.Media<'images', true> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::our-accreditations-and-membership.our-accreditations-and-membership',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::our-accreditations-and-membership.our-accreditations-and-membership',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPolicyPageMetadataPolicyPageMetadata
  extends Schema.SingleType {
  collectionName: 'policy_page_metadatas';
  info: {
    singularName: 'policy-page-metadata';
    pluralName: 'policy-page-metadatas';
    displayName: 'Policy Page Metadata';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PageMetaData: Attribute.Component<'meta-data.meta-data-component'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::policy-page-metadata.policy-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::policy-page-metadata.policy-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertiesListingPageMetadataPropertiesListingPageMetadata
  extends Schema.SingleType {
  collectionName: 'properties_listing_page_metadatas';
  info: {
    singularName: 'properties-listing-page-metadata';
    pluralName: 'properties-listing-page-metadatas';
    displayName: 'Properties Listing Page Metadata';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PageMetaData: Attribute.Component<'meta-data.meta-data-component'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::properties-listing-page-metadata.properties-listing-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::properties-listing-page-metadata.properties-listing-page-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiScheduleATourScheduleATour extends Schema.SingleType {
  collectionName: 'schedule_a_tours';
  info: {
    singularName: 'schedule-a-tour';
    pluralName: 'schedule-a-tours';
    displayName: 'Schedule a tour';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.String & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::schedule-a-tour.schedule-a-tour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::schedule-a-tour.schedule-a-tour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVisitOurOfficeVisitOurOffice extends Schema.CollectionType {
  collectionName: 'visit_our_offices';
  info: {
    singularName: 'visit-our-office';
    pluralName: 'visit-our-offices';
    displayName: 'Visit Our Office Section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    locationZone: Attribute.DynamicZone<
      ['contact-page.contact-page-location-component']
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::visit-our-office.visit-our-office',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::visit-our-office.visit-our-office',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-page.about-page': ApiAboutPageAboutPage;
      'api::about-page-metadata.about-page-metadata': ApiAboutPageMetadataAboutPageMetadata;
      'api::add-new-property-commercial-for-rent.add-new-property-commercial-for-rent': ApiAddNewPropertyCommercialForRentAddNewPropertyCommercialForRent;
      'api::add-new-property-commercial-for-sale.add-new-property-commercial-for-sale': ApiAddNewPropertyCommercialForSaleAddNewPropertyCommercialForSale;
      'api::add-new-property-flat-for-rent.add-new-property-flat-for-rent': ApiAddNewPropertyFlatForRentAddNewPropertyFlatForRent;
      'api::add-new-property-flat-for-sale.add-new-property-flat-for-sale': ApiAddNewPropertyFlatForSaleAddNewPropertyFlatForSale;
      'api::add-new-property-house-for-rent.add-new-property-house-for-rent': ApiAddNewPropertyHouseForRentAddNewPropertyHouseForRent;
      'api::add-new-property-house-for-sale.add-new-property-house-for-sale': ApiAddNewPropertyHouseForSaleAddNewPropertyHouseForSale;
      'api::add-new-property-office-for-rent.add-new-property-office-for-rent': ApiAddNewPropertyOfficeForRentAddNewPropertyOfficeForRent;
      'api::add-new-property-office-for-sale.add-new-property-office-for-sale': ApiAddNewPropertyOfficeForSaleAddNewPropertyOfficeForSale;
      'api::advance-filter-location.advance-filter-location': ApiAdvanceFilterLocationAdvanceFilterLocation;
      'api::all-policy.all-policy': ApiAllPolicyAllPolicy;
      'api::award-main-image.award-main-image': ApiAwardMainImageAwardMainImage;
      'api::compare-page.compare-page': ApiComparePageComparePage;
      'api::compare-page-metadata.compare-page-metadata': ApiComparePageMetadataComparePageMetadata;
      'api::contact-page-form.contact-page-form': ApiContactPageFormContactPageForm;
      'api::contact-page-intro.contact-page-intro': ApiContactPageIntroContactPageIntro;
      'api::contact-page-metadata.contact-page-metadata': ApiContactPageMetadataContactPageMetadata;
      'api::cta-section.cta-section': ApiCtaSectionCtaSection;
      'api::exclusive-agents-section.exclusive-agents-section': ApiExclusiveAgentsSectionExclusiveAgentsSection;
      'api::exclusive-agents-section-carousel.exclusive-agents-section-carousel': ApiExclusiveAgentsSectionCarouselExclusiveAgentsSectionCarousel;
      'api::faq-page.faq-page': ApiFaqPageFaqPage;
      'api::faq-page-metadata.faq-page-metadata': ApiFaqPageMetadataFaqPageMetadata;
      'api::faq-section.faq-section': ApiFaqSectionFaqSection;
      'api::footer.footer': ApiFooterFooter;
      'api::get-more-information.get-more-information': ApiGetMoreInformationGetMoreInformation;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::home-page-metadata.home-page-metadata': ApiHomePageMetadataHomePageMetadata;
      'api::individual-property-page-metadata.individual-property-page-metadata': ApiIndividualPropertyPageMetadataIndividualPropertyPageMetadata;
      'api::inquiry-form.inquiry-form': ApiInquiryFormInquiryForm;
      'api::mission-section.mission-section': ApiMissionSectionMissionSection;
      'api::mission-section-heading.mission-section-heading': ApiMissionSectionHeadingMissionSectionHeading;
      'api::nearby-similar-property.nearby-similar-property': ApiNearbySimilarPropertyNearbySimilarProperty;
      'api::our-accreditations-and-membership.our-accreditations-and-membership': ApiOurAccreditationsAndMembershipOurAccreditationsAndMembership;
      'api::policy-page-metadata.policy-page-metadata': ApiPolicyPageMetadataPolicyPageMetadata;
      'api::properties-listing-page-metadata.properties-listing-page-metadata': ApiPropertiesListingPageMetadataPropertiesListingPageMetadata;
      'api::schedule-a-tour.schedule-a-tour': ApiScheduleATourScheduleATour;
      'api::visit-our-office.visit-our-office': ApiVisitOurOfficeVisitOurOffice;
    }
  }
}
