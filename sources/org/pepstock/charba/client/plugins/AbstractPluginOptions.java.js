goog.module('org.pepstock.charba.client.plugins.AbstractPluginOptions');

goog.require('java.lang.StringBuilder');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('java.util.concurrent.atomic.AtomicInteger');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.ArrayEnumList');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.Envelop');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.enums.Event');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions.Property');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory');
goog.require('org.pepstock.charba.client.plugins.PluginIdChecker');
goog.require('vmbootstrap.Casts');

const AbstractPluginOptions = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');
exports = AbstractPluginOptions;

