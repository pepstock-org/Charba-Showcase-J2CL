goog.module('org.pepstock.charba.client.commons.Merger');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.ChartOptions');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.Helpers');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.ScaleType');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.Merger.Property');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.commons.NativeObjectUtils');
goog.require('org.pepstock.charba.client.options.Scale');
goog.require('org.pepstock.charba.client.resources.ResourcesType');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const Merger = goog.require('org.pepstock.charba.client.commons.Merger$impl');
exports = Merger;

