goog.module('org.pepstock.charba.client.items.LegendLabelItem');

goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.data.DatasetCanvasObjectFactory');
goog.require('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.dom.safehtml.SafeHtml');
goog.require('org.pepstock.charba.client.enums.CapStyle');
goog.require('org.pepstock.charba.client.enums.JoinStyle');
goog.require('org.pepstock.charba.client.enums.PointStyle');
goog.require('org.pepstock.charba.client.items.HasLegendText');
goog.require('org.pepstock.charba.client.items.LegendItem');
goog.require('org.pepstock.charba.client.items.LegendItem.Property');
goog.require('org.pepstock.charba.client.items.LegendLabelItem.LegendLabelItemFactory');
goog.require('org.pepstock.charba.client.items.LegendTextHandler');

const LegendLabelItem = goog.require('org.pepstock.charba.client.items.LegendLabelItem$impl');
exports = LegendLabelItem;

