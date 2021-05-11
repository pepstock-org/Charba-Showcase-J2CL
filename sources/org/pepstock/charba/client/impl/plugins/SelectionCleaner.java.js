goog.module('org.pepstock.charba.client.impl.plugins.SelectionCleaner');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.enums.Position');
goog.require('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultSelectionCleaner');
goog.require('org.pepstock.charba.client.impl.plugins.SelectionCleaner.Property');
goog.require('org.pepstock.charba.client.impl.plugins.SelectionCleanerFont');
goog.require('org.pepstock.charba.client.impl.plugins.enums.Align');
goog.require('org.pepstock.charba.client.impl.plugins.enums.Render');
goog.require('org.pepstock.charba.client.options.IsFont');
goog.require('vmbootstrap.Casts');

const SelectionCleaner = goog.require('org.pepstock.charba.client.impl.plugins.SelectionCleaner$impl');
exports = SelectionCleaner;

