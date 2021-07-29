goog.module('org.pepstock.charba.client.labels.Label');

goog.require('java.lang.String');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.FontCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.ArrayImage.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.CallbackPropertyHandler');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.labels.DefaultLabel');
goog.require('org.pepstock.charba.client.labels.Font');
goog.require('org.pepstock.charba.client.labels.IsDefaultLabel');
goog.require('org.pepstock.charba.client.labels.Label.Property');
goog.require('org.pepstock.charba.client.labels.LabelId');
goog.require('org.pepstock.charba.client.labels.LabelsContext');
goog.require('org.pepstock.charba.client.labels.LabelsPlugin');
goog.require('org.pepstock.charba.client.labels.callbacks.RenderCallback');
goog.require('org.pepstock.charba.client.labels.enums.Position');
goog.require('org.pepstock.charba.client.labels.enums.Render');
goog.require('org.pepstock.charba.client.options.IsScriptableFontProvider');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const Label = goog.require('org.pepstock.charba.client.labels.Label$impl');
exports = Label;
