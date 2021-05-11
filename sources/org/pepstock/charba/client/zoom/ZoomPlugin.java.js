goog.module('org.pepstock.charba.client.zoom.ZoomPlugin');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Charts');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.Injector');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.options.IsScaleId');
goog.require('org.pepstock.charba.client.options.IsTransitionKey');
goog.require('org.pepstock.charba.client.plugins.AbstractExtensionPlugin');
goog.require('org.pepstock.charba.client.resources.ResourceName');
goog.require('org.pepstock.charba.client.resources.ResourcesType');
goog.require('org.pepstock.charba.client.zoom.Amount');
goog.require('org.pepstock.charba.client.zoom.DefaultOptions');
goog.require('org.pepstock.charba.client.zoom.Drag');
goog.require('org.pepstock.charba.client.zoom.IsDefaultOptions');
goog.require('org.pepstock.charba.client.zoom.JsZoomHelper');
goog.require('org.pepstock.charba.client.zoom.ScaleRange');
goog.require('org.pepstock.charba.client.zoom.ZoomOptions');
goog.require('org.pepstock.charba.client.zoom.ZoomOptionsFactory');
goog.require('org.pepstock.charba.client.zoom.ZoomOptionsFactory.ZoomDefaultsOptionsFactory');
goog.require('org.pepstock.charba.client.zoom.ZoomPluginHammerResource');
goog.require('org.pepstock.charba.client.zoom.ZoomPluginResource');
goog.require('vmbootstrap.Casts');

const ZoomPlugin = goog.require('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
exports = ZoomPlugin;

