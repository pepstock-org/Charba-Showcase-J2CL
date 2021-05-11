goog.module('org.pepstock.charba.client.datalabels.AbstractBuilder');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.FontCallback');
goog.require('org.pepstock.charba.client.callbacks.OffsetCallback');
goog.require('org.pepstock.charba.client.callbacks.PaddingCallback');
goog.require('org.pepstock.charba.client.callbacks.RadiusCallback');
goog.require('org.pepstock.charba.client.callbacks.RotationCallback');
goog.require('org.pepstock.charba.client.callbacks.TextAlignCallback');
goog.require('org.pepstock.charba.client.callbacks.WidthCallback');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsContext');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsOptionsBuilder');
goog.require('org.pepstock.charba.client.datalabels.LabelItem');
goog.require('org.pepstock.charba.client.datalabels.callbacks.AlignCallback');
goog.require('org.pepstock.charba.client.datalabels.callbacks.AnchorCallback');
goog.require('org.pepstock.charba.client.datalabels.callbacks.ClampCallback');
goog.require('org.pepstock.charba.client.datalabels.callbacks.ClipCallback');
goog.require('org.pepstock.charba.client.datalabels.callbacks.DisplayCallback');
goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback');
goog.require('org.pepstock.charba.client.datalabels.callbacks.OpacityCallback');
goog.require('org.pepstock.charba.client.datalabels.callbacks.TextShadowBlurCallback');
goog.require('org.pepstock.charba.client.datalabels.enums.Align');
goog.require('org.pepstock.charba.client.datalabels.enums.Anchor');
goog.require('org.pepstock.charba.client.datalabels.events.AbstractEventHandler');
goog.require('org.pepstock.charba.client.datalabels.events.ClickEventHandler');
goog.require('org.pepstock.charba.client.datalabels.events.EnterEventHandler');
goog.require('org.pepstock.charba.client.datalabels.events.LeaveEventHandler');
goog.require('org.pepstock.charba.client.enums.Display');
goog.require('org.pepstock.charba.client.enums.FontStyle');
goog.require('org.pepstock.charba.client.enums.TextAlign');
goog.require('org.pepstock.charba.client.enums.Weight');

const AbstractBuilder = goog.require('org.pepstock.charba.client.datalabels.AbstractBuilder$impl');
exports = AbstractBuilder;

