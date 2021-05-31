goog.module('org.pepstock.charba.client.callbacks.AbstractDatasetContext');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext.Property');
goog.require('org.pepstock.charba.client.callbacks.ChartContext');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.items.DatasetElement');
goog.require('org.pepstock.charba.client.items.DatasetItem');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.options.TransitionKey');
goog.require('vmbootstrap.Casts');

const AbstractDatasetContext = goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext$impl');
exports = AbstractDatasetContext;

