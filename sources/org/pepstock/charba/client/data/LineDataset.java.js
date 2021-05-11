goog.module('org.pepstock.charba.client.data.LineDataset');

goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.CubicInterpolationModeCallback');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayStringList');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.Dataset.InternalProperty');
goog.require('org.pepstock.charba.client.data.HasDataPoints');
goog.require('org.pepstock.charba.client.data.LineDataset.Property');
goog.require('org.pepstock.charba.client.data.LiningDataset');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('org.pepstock.charba.client.enums.CubicInterpolationMode');
goog.require('org.pepstock.charba.client.enums.DataType');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.enums.IndexAxis');
goog.require('org.pepstock.charba.client.enums.Stepped');
goog.require('org.pepstock.charba.client.options.IsScaleId');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const LineDataset = goog.require('org.pepstock.charba.client.data.LineDataset$impl');
exports = LineDataset;

