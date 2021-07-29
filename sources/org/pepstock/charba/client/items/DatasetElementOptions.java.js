goog.module('org.pepstock.charba.client.items.DatasetElementOptions');

goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.GradientBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.colors.PatternBuilder');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.data.ArcBorderRadius');
goog.require('org.pepstock.charba.client.data.BarBorderRadius');
goog.require('org.pepstock.charba.client.data.BarBorderWidth');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill');
goog.require('org.pepstock.charba.client.enums.BorderAlign');
goog.require('org.pepstock.charba.client.enums.BorderSkipped');
goog.require('org.pepstock.charba.client.enums.CapStyle');
goog.require('org.pepstock.charba.client.enums.CubicInterpolationMode');
goog.require('org.pepstock.charba.client.enums.Fill');
goog.require('org.pepstock.charba.client.enums.IsFill');
goog.require('org.pepstock.charba.client.enums.JoinStyle');
goog.require('org.pepstock.charba.client.enums.PointStyle');
goog.require('org.pepstock.charba.client.enums.PointStyleType');
goog.require('org.pepstock.charba.client.enums.Stepped');
goog.require('org.pepstock.charba.client.items.DatasetElementOptions.Property');
goog.require('org.pepstock.charba.client.items.JsItemsHelper');
goog.require('org.pepstock.charba.client.items.TooltipLabelColor');
goog.require('org.pepstock.charba.client.items.TooltipLabelPointStyle');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const DatasetElementOptions = goog.require('org.pepstock.charba.client.items.DatasetElementOptions$impl');
exports = DatasetElementOptions;

