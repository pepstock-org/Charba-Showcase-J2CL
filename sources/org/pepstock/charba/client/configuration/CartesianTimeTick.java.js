goog.module('org.pepstock.charba.client.configuration.CartesianTimeTick');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.TimeTickCallback');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianTick');
goog.require('org.pepstock.charba.client.configuration.TimeTickHandler');
goog.require('org.pepstock.charba.client.enums.TickSource');
goog.require('vmbootstrap.Casts');

const CartesianTimeTick = goog.require('org.pepstock.charba.client.configuration.CartesianTimeTick$impl');
exports = CartesianTimeTick;

