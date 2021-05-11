goog.module('org.pepstock.charba.client.items.TooltipLabelColor');

goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.GradientBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.colors.PatternBuilder');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.data.DatasetCanvasObjectFactory');
goog.require('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay');
goog.require('org.pepstock.charba.client.items.JsItemsHelper');
goog.require('org.pepstock.charba.client.items.TooltipItem');
goog.require('org.pepstock.charba.client.items.TooltipLabelColor.Property');
goog.require('org.pepstock.charba.client.items.TooltipLabelColor.TooltipLabelColorFactory');
goog.require('vmbootstrap.Casts');

const TooltipLabelColor = goog.require('org.pepstock.charba.client.items.TooltipLabelColor$impl');
exports = TooltipLabelColor;

