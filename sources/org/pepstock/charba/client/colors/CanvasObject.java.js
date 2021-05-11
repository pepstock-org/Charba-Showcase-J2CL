goog.module('org.pepstock.charba.client.colors.CanvasObject');

goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.CanvasObject.InternalGradient');
goog.require('org.pepstock.charba.client.colors.CanvasObject.Property');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const CanvasObject = goog.require('org.pepstock.charba.client.colors.CanvasObject$impl');
exports = CanvasObject;

