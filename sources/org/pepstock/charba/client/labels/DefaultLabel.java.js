goog.module('org.pepstock.charba.client.labels.DefaultLabel');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.FontCallback');
goog.require('org.pepstock.charba.client.defaults.IsDefaultFont');
goog.require('org.pepstock.charba.client.labels.IsDefaultLabel');
goog.require('org.pepstock.charba.client.labels.LabelsContext');
goog.require('org.pepstock.charba.client.labels.callbacks.RenderCallback');
goog.require('org.pepstock.charba.client.labels.enums.Position');
goog.require('org.pepstock.charba.client.labels.enums.Render');

const DefaultLabel = goog.require('org.pepstock.charba.client.labels.DefaultLabel$impl');
exports = DefaultLabel;

