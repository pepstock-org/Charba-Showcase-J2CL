goog.module('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.enums.InteractionAxis');
goog.require('org.pepstock.charba.client.zoom.AbstractConfigurationItem');
goog.require('org.pepstock.charba.client.zoom.callbacks.CompletedCallback');
goog.require('org.pepstock.charba.client.zoom.callbacks.ModeCallback');
goog.require('org.pepstock.charba.client.zoom.callbacks.ProgressCallback');
goog.require('org.pepstock.charba.client.zoom.callbacks.RejectedCallback');
goog.require('org.pepstock.charba.client.zoom.callbacks.StartCallback');

const IsDefaultConfigurationItem = goog.require('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');
exports = IsDefaultConfigurationItem;

