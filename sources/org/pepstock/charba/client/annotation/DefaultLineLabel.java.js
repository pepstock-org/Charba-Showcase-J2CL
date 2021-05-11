goog.module('org.pepstock.charba.client.annotation.DefaultLineLabel');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.annotation.AnnotationContext');
goog.require('org.pepstock.charba.client.annotation.DefaultLineLabel.InternalFont');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsLineLabel');
goog.require('org.pepstock.charba.client.annotation.callbacks.AdjustSizeCallback');
goog.require('org.pepstock.charba.client.annotation.callbacks.ContentCallback');
goog.require('org.pepstock.charba.client.annotation.callbacks.ImageSizeCallback');
goog.require('org.pepstock.charba.client.annotation.callbacks.LabelPositionCallback');
goog.require('org.pepstock.charba.client.annotation.callbacks.PaddingSizeCallback');
goog.require('org.pepstock.charba.client.annotation.enums.DrawTime');
goog.require('org.pepstock.charba.client.annotation.enums.LabelPosition');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.CornerRadiusCallback');
goog.require('org.pepstock.charba.client.callbacks.DisplayCallback');
goog.require('org.pepstock.charba.client.callbacks.FontCallback');
goog.require('org.pepstock.charba.client.callbacks.RotationCallback');
goog.require('org.pepstock.charba.client.callbacks.TextAlignCallback');
goog.require('org.pepstock.charba.client.defaults.IsDefaultFont');
goog.require('org.pepstock.charba.client.enums.TextAlign');

const DefaultLineLabel = goog.require('org.pepstock.charba.client.annotation.DefaultLineLabel$impl');
exports = DefaultLineLabel;

