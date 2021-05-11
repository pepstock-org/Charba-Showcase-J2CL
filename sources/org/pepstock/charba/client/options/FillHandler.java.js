goog.module('org.pepstock.charba.client.options.FillHandler');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.PropertyHandler');
goog.require('org.pepstock.charba.client.data.DataEnvelop');
goog.require('org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill');
goog.require('org.pepstock.charba.client.enums.Fill');
goog.require('org.pepstock.charba.client.enums.FillingMode');
goog.require('org.pepstock.charba.client.enums.IsFill');
goog.require('org.pepstock.charba.client.enums.RelativeDatasetIndexFill');
goog.require('org.pepstock.charba.client.options.FillHandler.Property');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const FillHandler = goog.require('org.pepstock.charba.client.options.FillHandler$impl');
exports = FillHandler;

