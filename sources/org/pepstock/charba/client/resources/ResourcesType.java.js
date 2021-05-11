goog.module('org.pepstock.charba.client.resources.ResourcesType');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.resources.AbstractResources');
goog.require('org.pepstock.charba.client.resources.IsResourceType');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const ResourcesType = goog.require('org.pepstock.charba.client.resources.ResourcesType$impl');
exports = ResourcesType;

