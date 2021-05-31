goog.module('org.pepstock.charba.client.items.LegendItem');

goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.GradientBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.colors.PatternBuilder');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.Envelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.enums.CapStyle');
goog.require('org.pepstock.charba.client.enums.JoinStyle');
goog.require('org.pepstock.charba.client.enums.PointStyle');
goog.require('org.pepstock.charba.client.items.BorderRadiusItem');
goog.require('org.pepstock.charba.client.items.JsItemsHelper');
goog.require('org.pepstock.charba.client.items.LegendItem.LegendItemFactory');
goog.require('org.pepstock.charba.client.items.LegendItem.Property');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');

const LegendItem = goog.require('org.pepstock.charba.client.items.LegendItem$impl');
exports = LegendItem;

