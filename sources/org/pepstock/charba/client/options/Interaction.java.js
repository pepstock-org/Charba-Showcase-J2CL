goog.module('org.pepstock.charba.client.options.Interaction');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultInteraction');
goog.require('org.pepstock.charba.client.enums.InteractionAxis');
goog.require('org.pepstock.charba.client.enums.InteractionMode');
goog.require('org.pepstock.charba.client.options.AbstractInteraction');
goog.require('org.pepstock.charba.client.options.Interaction.Property');
goog.require('org.pepstock.charba.client.options.Options');
goog.require('vmbootstrap.Casts');

const Interaction = goog.require('org.pepstock.charba.client.options.Interaction$impl');
exports = Interaction;

