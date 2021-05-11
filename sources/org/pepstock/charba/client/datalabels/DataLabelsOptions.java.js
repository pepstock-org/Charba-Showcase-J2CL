goog.module('org.pepstock.charba.client.datalabels.DataLabelsOptions');

goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsOptions.Property');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsPlugin');
goog.require('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsItem');
goog.require('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsOptions');
goog.require('org.pepstock.charba.client.datalabels.LabelItem');
goog.require('org.pepstock.charba.client.datalabels.Labels');
goog.require('org.pepstock.charba.client.datalabels.enums.Align');
goog.require('org.pepstock.charba.client.datalabels.enums.Anchor');
goog.require('org.pepstock.charba.client.enums.Display');
goog.require('org.pepstock.charba.client.enums.TextAlign');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const DataLabelsOptions = goog.require('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
exports = DataLabelsOptions;

