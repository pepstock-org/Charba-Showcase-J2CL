goog.module('org.pepstock.charba.client.zoom.Zoom');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.CallbackPropertyHandler');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.enums.ModifierKey');
goog.require('org.pepstock.charba.client.zoom.AbstractConfigurationItem');
goog.require('org.pepstock.charba.client.zoom.Drag');
goog.require('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem');
goog.require('org.pepstock.charba.client.zoom.IsDefaultZoom');
goog.require('org.pepstock.charba.client.zoom.Zoom.Property');
goog.require('org.pepstock.charba.client.zoom.callbacks.CompletedCallback');
goog.require('org.pepstock.charba.client.zoom.callbacks.ProgressCallback');
goog.require('org.pepstock.charba.client.zoom.callbacks.RejectedCallback');
goog.require('org.pepstock.charba.client.zoom.callbacks.StartCallback');
goog.require('vmbootstrap.Casts');

const Zoom = goog.require('org.pepstock.charba.client.zoom.Zoom$impl');
exports = Zoom;

