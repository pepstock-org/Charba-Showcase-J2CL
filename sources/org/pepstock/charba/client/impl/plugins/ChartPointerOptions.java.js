goog.module('org.pepstock.charba.client.impl.plugins.ChartPointerOptions');

goog.require('java.util.Arrays');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.ArrayEnumList');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.impl.plugins.AbstractCursorPointerOptions');
goog.require('org.pepstock.charba.client.impl.plugins.ChartPointer');
goog.require('org.pepstock.charba.client.impl.plugins.ChartPointerOptions.Property');
goog.require('org.pepstock.charba.client.impl.plugins.IsChartPointerDefaultOptions');
goog.require('org.pepstock.charba.client.impl.plugins.enums.PointerElement');
goog.require('vmbootstrap.Casts');

const ChartPointerOptions = goog.require('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
exports = ChartPointerOptions;

