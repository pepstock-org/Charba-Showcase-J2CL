goog.module('org.pepstock.charba.client.options.AbstractScale');

goog.require('java.lang.String');
goog.require('java.util.Date');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.data.HasLabels');
goog.require('org.pepstock.charba.client.data.Labels');
goog.require('org.pepstock.charba.client.data.LabelsHandler');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScale');
goog.require('org.pepstock.charba.client.enums.AxisPosition');
goog.require('org.pepstock.charba.client.enums.Bounds');
goog.require('org.pepstock.charba.client.enums.Display');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.AbstractScale.Property');
goog.require('org.pepstock.charba.client.options.Adapters');
goog.require('org.pepstock.charba.client.options.AngleLines');
goog.require('org.pepstock.charba.client.options.Grid');
goog.require('org.pepstock.charba.client.options.Options');
goog.require('org.pepstock.charba.client.options.OptionsEnvelop');
goog.require('org.pepstock.charba.client.options.PointLabels');
goog.require('org.pepstock.charba.client.options.ScaleTitle');
goog.require('org.pepstock.charba.client.options.Ticks');
goog.require('org.pepstock.charba.client.options.Time');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const AbstractScale = goog.require('org.pepstock.charba.client.options.AbstractScale$impl');
exports = AbstractScale;

