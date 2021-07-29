goog.module('org.pepstock.charba.client.options.Bar');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.defaults.IsDefaultBar');
goog.require('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.enums.BorderSkipped');
goog.require('org.pepstock.charba.client.enums.PointStyle');
goog.require('org.pepstock.charba.client.enums.PointStyleType');
goog.require('org.pepstock.charba.client.options.AbstractElement');
goog.require('org.pepstock.charba.client.options.Bar.Property');
goog.require('org.pepstock.charba.client.options.Elements');
goog.require('org.pepstock.charba.client.options.HasPointStyle');
goog.require('org.pepstock.charba.client.options.PointStyleHandler');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const Bar = goog.require('org.pepstock.charba.client.options.Bar$impl');
exports = Bar;

