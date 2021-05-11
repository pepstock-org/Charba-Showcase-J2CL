goog.module('org.pepstock.charba.client.configuration.RadialAxis');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.Grid');
goog.require('org.pepstock.charba.client.configuration.IsLinearAxis');
goog.require('org.pepstock.charba.client.configuration.IsNumericAxis');
goog.require('org.pepstock.charba.client.configuration.RadialAngleLines');
goog.require('org.pepstock.charba.client.configuration.RadialLinearTick');
goog.require('org.pepstock.charba.client.configuration.RadialPointLabels');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('org.pepstock.charba.client.enums.AxisType');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.options.ExtendedScale');
goog.require('vmbootstrap.Casts');

const RadialAxis = goog.require('org.pepstock.charba.client.configuration.RadialAxis$impl');
exports = RadialAxis;

