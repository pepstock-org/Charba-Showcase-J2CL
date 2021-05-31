goog.module('org.pepstock.charba.client.commons.HasCallbackScope');

goog.require('java.lang.Class');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.HasCallbackScope.$LambdaAdaptor');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const HasCallbackScope = goog.require('org.pepstock.charba.client.commons.HasCallbackScope$impl');
exports = HasCallbackScope;

