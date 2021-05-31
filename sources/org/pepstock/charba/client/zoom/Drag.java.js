goog.module('org.pepstock.charba.client.zoom.Drag');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.zoom.Drag.Property');
goog.require('org.pepstock.charba.client.zoom.IsDefaultDrag');
goog.require('vmbootstrap.Casts');

const Drag = goog.require('org.pepstock.charba.client.zoom.Drag$impl');
exports = Drag;

