goog.module('org.pepstock.charba.client.zoom.DefaultZoom');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.enums.InteractionAxis');
goog.require('org.pepstock.charba.client.zoom.DefaultDrag');
goog.require('org.pepstock.charba.client.zoom.DefaultPinch');
goog.require('org.pepstock.charba.client.zoom.DefaultWheel');
goog.require('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem');
goog.require('org.pepstock.charba.client.zoom.IsDefaultDrag');
goog.require('org.pepstock.charba.client.zoom.IsDefaultPinch');
goog.require('org.pepstock.charba.client.zoom.IsDefaultWheel');
goog.require('org.pepstock.charba.client.zoom.IsDefaultZoom');
goog.require('org.pepstock.charba.client.zoom.callbacks.CompletedCallback');
goog.require('org.pepstock.charba.client.zoom.callbacks.ModeCallback');
goog.require('org.pepstock.charba.client.zoom.callbacks.ProgressCallback');
goog.require('org.pepstock.charba.client.zoom.callbacks.RejectedCallback');
goog.require('org.pepstock.charba.client.zoom.callbacks.StartCallback');

const DefaultZoom = goog.require('org.pepstock.charba.client.zoom.DefaultZoom$impl');
exports = DefaultZoom;

