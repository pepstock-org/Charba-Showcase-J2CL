goog.module('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions');

goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.GwtMaterialColor');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector');
goog.require('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions.Property');
goog.require('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultOptions');
goog.require('org.pepstock.charba.client.impl.plugins.SelectionCleaner');
goog.require('org.pepstock.charba.client.options.IsScaleId');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions');
goog.require('vmbootstrap.Casts');

const DatasetsItemsSelectorOptions = goog.require('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
exports = DatasetsItemsSelectorOptions;

