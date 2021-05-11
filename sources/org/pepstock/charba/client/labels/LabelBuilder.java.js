goog.module('org.pepstock.charba.client.labels.LabelBuilder');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.FontCallback');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.enums.FontStyle');
goog.require('org.pepstock.charba.client.labels.Label');
goog.require('org.pepstock.charba.client.labels.LabelsContext');
goog.require('org.pepstock.charba.client.labels.LabelsOptionsBuilder');
goog.require('org.pepstock.charba.client.labels.callbacks.RenderCallback');
goog.require('org.pepstock.charba.client.labels.enums.Position');
goog.require('org.pepstock.charba.client.labels.enums.Render');

const LabelBuilder = goog.require('org.pepstock.charba.client.labels.LabelBuilder$impl');
exports = LabelBuilder;

