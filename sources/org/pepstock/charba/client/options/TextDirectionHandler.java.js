goog.module('org.pepstock.charba.client.options.TextDirectionHandler');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.PropertyHandler');
goog.require('org.pepstock.charba.client.defaults.IsDefaultTextDirectionHandler');
goog.require('org.pepstock.charba.client.enums.TextDirection');
goog.require('org.pepstock.charba.client.options.TextDirectionHandler.Property');
goog.require('vmbootstrap.Casts');

const TextDirectionHandler = goog.require('org.pepstock.charba.client.options.TextDirectionHandler$impl');
exports = TextDirectionHandler;

