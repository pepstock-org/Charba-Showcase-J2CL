goog.module('org.pepstock.charba.client.labels.LabelsOptions');

goog.require('java.util.ArrayList');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.labels.IsDefaultOptions');
goog.require('org.pepstock.charba.client.labels.Label');
goog.require('org.pepstock.charba.client.labels.LabelId');
goog.require('org.pepstock.charba.client.labels.LabelsPlugin');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions');
goog.require('vmbootstrap.Casts');

const LabelsOptions = goog.require('org.pepstock.charba.client.labels.LabelsOptions$impl');
exports = LabelsOptions;

