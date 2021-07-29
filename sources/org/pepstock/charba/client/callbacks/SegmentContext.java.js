goog.module('org.pepstock.charba.client.callbacks.SegmentContext');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.ChartContext');
goog.require('org.pepstock.charba.client.callbacks.SegmentContext.Property');
goog.require('org.pepstock.charba.client.callbacks.SegmentContext.SegementDatasetElement');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.enums.ContextType');
goog.require('org.pepstock.charba.client.items.DatasetElement');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Objects');

const SegmentContext = goog.require('org.pepstock.charba.client.callbacks.SegmentContext$impl');
exports = SegmentContext;

