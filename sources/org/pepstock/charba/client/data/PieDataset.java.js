goog.module('org.pepstock.charba.client.data.PieDataset');

goog.require('java.lang.Integer');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.callbacks.BorderAlignCallback');
goog.require('org.pepstock.charba.client.callbacks.BorderRadiusCallback');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.OffsetCallback');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.data.ArcBorderRadius');
goog.require('org.pepstock.charba.client.data.BorderAlignHandler');
goog.require('org.pepstock.charba.client.data.BorderItemsHandler');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.HasBorderAlign');
goog.require('org.pepstock.charba.client.data.HovingDataset');
goog.require('org.pepstock.charba.client.data.PieDataset.Property');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('org.pepstock.charba.client.enums.BorderAlign');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const PieDataset = goog.require('org.pepstock.charba.client.data.PieDataset$impl');
exports = PieDataset;

