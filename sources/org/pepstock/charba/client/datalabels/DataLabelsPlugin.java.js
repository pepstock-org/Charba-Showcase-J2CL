goog.module('org.pepstock.charba.client.datalabels.DataLabelsPlugin');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.Injector');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsOptions');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory.DataLabelsDefaultsOptionsFactory');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsPluginResource');
goog.require('org.pepstock.charba.client.datalabels.JsDataLabelsHelper');
goog.require('org.pepstock.charba.client.plugins.AbstractExtensionPlugin');
goog.require('org.pepstock.charba.client.resources.ResourceName');
goog.require('org.pepstock.charba.client.resources.ResourcesType');

const DataLabelsPlugin = goog.require('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
exports = DataLabelsPlugin;

