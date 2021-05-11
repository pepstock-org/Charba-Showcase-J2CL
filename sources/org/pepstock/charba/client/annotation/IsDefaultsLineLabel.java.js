goog.module('org.pepstock.charba.client.annotation.IsDefaultsLineLabel');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.annotation.AnnotationContext');
goog.require('org.pepstock.charba.client.annotation.AnnotationOptions');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsLineLabel.$LambdaAdaptor');
goog.require('org.pepstock.charba.client.annotation.LineLabel');
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
goog.require('org.pepstock.charba.client.items.Undefined');

const IsDefaultsLineLabel = goog.require('org.pepstock.charba.client.annotation.IsDefaultsLineLabel$impl');
exports = IsDefaultsLineLabel;

