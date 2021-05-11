goog.module('org.pepstock.charba.client.labels.LabelsPlugin');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.Injector');
goog.require('org.pepstock.charba.client.labels.LabelsOptionsFactory');
goog.require('org.pepstock.charba.client.labels.LabelsOptionsFactory.LabelsDefaultsOptionsFactory');
goog.require('org.pepstock.charba.client.labels.LabelsPluginResource');
goog.require('org.pepstock.charba.client.resources.ResourceName');
goog.require('org.pepstock.charba.client.resources.ResourcesType');

const LabelsPlugin = goog.require('org.pepstock.charba.client.labels.LabelsPlugin$impl');
exports = LabelsPlugin;

