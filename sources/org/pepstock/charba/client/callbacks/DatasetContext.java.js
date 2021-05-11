goog.module('org.pepstock.charba.client.callbacks.DatasetContext');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.ConfigurationEnvelop');
goog.require('org.pepstock.charba.client.data.DataEnvelop');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsEnvelop');
goog.require('org.pepstock.charba.client.labels.LabelsEnvelop');
goog.require('vmbootstrap.Casts');

const DatasetContext = goog.require('org.pepstock.charba.client.callbacks.DatasetContext$impl');
exports = DatasetContext;

