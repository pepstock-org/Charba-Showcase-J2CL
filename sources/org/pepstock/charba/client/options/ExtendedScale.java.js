goog.module('org.pepstock.charba.client.options.ExtendedScale');

goog.require('java.util.concurrent.atomic.AtomicInteger');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.configuration.ConfigurationEnvelop');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScale');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('org.pepstock.charba.client.enums.AxisType');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.options.ExtendedScale.Property');
goog.require('org.pepstock.charba.client.options.IsScaleId');
goog.require('org.pepstock.charba.client.options.Scale');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.JavaScriptFunction');

const ExtendedScale = goog.require('org.pepstock.charba.client.options.ExtendedScale$impl');
exports = ExtendedScale;

