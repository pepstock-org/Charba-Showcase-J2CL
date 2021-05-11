goog.module('org.pepstock.charba.client.data.BubbleDataset');

goog.require('java.lang.Double');
goog.require('java.util.Arrays');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.callbacks.PointStyleCallback');
goog.require('org.pepstock.charba.client.callbacks.RadiusCallback');
goog.require('org.pepstock.charba.client.callbacks.RotationCallback');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.commons.ArrayEnumList');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.data.BubbleDataset.Property');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.HasDataPoints');
goog.require('org.pepstock.charba.client.data.HasOrder');
goog.require('org.pepstock.charba.client.data.HovingDataset');
goog.require('org.pepstock.charba.client.data.OrderHandler');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('org.pepstock.charba.client.enums.PointStyle');
goog.require('vmbootstrap.Casts');

const BubbleDataset = goog.require('org.pepstock.charba.client.data.BubbleDataset$impl');
exports = BubbleDataset;

