goog.module('org.pepstock.charba.client.options.AbstractElement');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptionsElement');
goog.require('org.pepstock.charba.client.options.AbstractElement.Property');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.Elements');
goog.require('vmbootstrap.Casts');

const AbstractElement = goog.require('org.pepstock.charba.client.options.AbstractElement$impl');
exports = AbstractElement;
