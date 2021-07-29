goog.module('org.pepstock.charba.client.data.DatasetCanvasObjectFactory');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.colors.Area');
goog.require('org.pepstock.charba.client.colors.CanvasObjectFactory');
goog.require('org.pepstock.charba.client.colors.Center');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.GradientScope');
goog.require('org.pepstock.charba.client.colors.Radius');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.items.DatasetElement');
goog.require('org.pepstock.charba.client.items.DatasetItem');
goog.require('org.pepstock.charba.client.items.IsArea');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const DatasetCanvasObjectFactory = goog.require('org.pepstock.charba.client.data.DatasetCanvasObjectFactory$impl');
exports = DatasetCanvasObjectFactory;

