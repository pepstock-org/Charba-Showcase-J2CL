goog.module('org.pepstock.charba.client.adapters.DateAdapterModule');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.adapters.DateAdapterOptions');
goog.require('org.pepstock.charba.client.adapters.DefaultsFormatsOverrider');
goog.require('org.pepstock.charba.client.adapters.JsDateAdapterHelper');
goog.require('org.pepstock.charba.client.resources.DateAdapterInjectionComplete');

const DateAdapterModule = goog.require('org.pepstock.charba.client.adapters.DateAdapterModule$impl');
exports = DateAdapterModule;

