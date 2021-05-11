goog.module('org.pepstock.charba.client.resources.AbstractInjectableResource');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.resources.IsInternalInjectableTextResource');
goog.require('org.pepstock.charba.client.resources.ResourceName');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const AbstractInjectableResource = goog.require('org.pepstock.charba.client.resources.AbstractInjectableResource$impl');
exports = AbstractInjectableResource;

