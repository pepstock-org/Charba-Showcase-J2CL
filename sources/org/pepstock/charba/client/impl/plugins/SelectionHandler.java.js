goog.module('org.pepstock.charba.client.impl.plugins.SelectionHandler');

goog.require('java.lang.Double');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.dom.BaseEventTypes');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay');
goog.require('org.pepstock.charba.client.dom.DOMBuilder');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.CursorType');
goog.require('org.pepstock.charba.client.dom.enums.TextBaseline');
goog.require('org.pepstock.charba.client.enums.AxisType');
goog.require('org.pepstock.charba.client.enums.Position');
goog.require('org.pepstock.charba.client.events.DatasetRangeSelectionEvent');
goog.require('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions');
goog.require('org.pepstock.charba.client.impl.plugins.SelectionArea');
goog.require('org.pepstock.charba.client.impl.plugins.SelectionCleaner');
goog.require('org.pepstock.charba.client.impl.plugins.SelectionStatus');
goog.require('org.pepstock.charba.client.impl.plugins.SelectionTrack');
goog.require('org.pepstock.charba.client.impl.plugins.enums.Align');
goog.require('org.pepstock.charba.client.impl.plugins.enums.Render');
goog.require('org.pepstock.charba.client.items.ScaleItem');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');
goog.require('vmbootstrap.Primitives');

const SelectionHandler = goog.require('org.pepstock.charba.client.impl.plugins.SelectionHandler$impl');
exports = SelectionHandler;

