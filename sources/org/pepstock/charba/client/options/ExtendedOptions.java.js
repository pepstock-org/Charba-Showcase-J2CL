goog.module('org.pepstock.charba.client.options.ExtendedOptions');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Envelop');
goog.require('org.pepstock.charba.client.commons.Id');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.configuration.ConfigurationEnvelop');
goog.require('org.pepstock.charba.client.controllers.ControllerMapperFactory');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions');
goog.require('org.pepstock.charba.client.options.ExtendedOptions.Property');
goog.require('org.pepstock.charba.client.options.ExtendedScales');
goog.require('org.pepstock.charba.client.options.ScaledOptions');
goog.require('org.pepstock.charba.client.options.ScaledOptions.Property');
goog.require('org.pepstock.charba.client.options.Segment');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.JavaScriptFunction');

const ExtendedOptions = goog.require('org.pepstock.charba.client.options.ExtendedOptions$impl');
exports = ExtendedOptions;

