goog.module('org.pepstock.charba.client.data.Dataset');

goog.require('java.lang.Integer');
goog.require('java.lang.StringBuilder');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Arrays');
goog.require('java.util.Collections');
goog.require('java.util.Comparator');
goog.require('java.util.HashMap');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('java.util.concurrent.atomic.AtomicInteger');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.Scriptable');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.callbacks.WidthCallback');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.ArrayDouble.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayDoubleList');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayObjectContainerList');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.HasCallbackScope');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.data.Clip');
goog.require('org.pepstock.charba.client.data.DataEnvelop');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.Dataset.CanvasObjectKey');
goog.require('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty');
goog.require('org.pepstock.charba.client.data.Dataset.CommonProperty');
goog.require('org.pepstock.charba.client.data.Dataset.DataPointFactory');
goog.require('org.pepstock.charba.client.data.Dataset.InternalProperty');
goog.require('org.pepstock.charba.client.data.Dataset.TimeSeriesItemFactory');
goog.require('org.pepstock.charba.client.data.GradientsContainer');
goog.require('org.pepstock.charba.client.data.HasDataset');
goog.require('org.pepstock.charba.client.data.PatternsContainer');
goog.require('org.pepstock.charba.client.data.TimeSeriesItem');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('org.pepstock.charba.client.defaults.IsDefaultTypedDataset');
goog.require('org.pepstock.charba.client.enums.DataType');
goog.require('org.pepstock.charba.client.enums.DefaultPluginId');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.options.Animation');
goog.require('org.pepstock.charba.client.options.AnimationContainer');
goog.require('org.pepstock.charba.client.options.Animations');
goog.require('org.pepstock.charba.client.options.HasAnimationOptions');
goog.require('org.pepstock.charba.client.options.Transitions');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory');
goog.require('org.pepstock.charba.client.plugins.PluginIdChecker');
goog.require('org.pepstock.charba.client.utils.JSON.$Overlay');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const Dataset = goog.require('org.pepstock.charba.client.data.Dataset$impl');
exports = Dataset;

