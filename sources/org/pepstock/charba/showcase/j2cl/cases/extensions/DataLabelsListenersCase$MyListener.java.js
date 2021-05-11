goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsListenersCase.MyListener');

goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.data.LineDataset');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsContext');
goog.require('org.pepstock.charba.client.dom.DOMBuilder');
goog.require('org.pepstock.charba.client.events.DatasetSelectionEvent');
goog.require('org.pepstock.charba.client.impl.callbacks.DataLabelsPointerHandler');
goog.require('org.pepstock.charba.client.items.DatasetElement');
goog.require('org.pepstock.charba.client.items.DatasetReference');
goog.require('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsListenersCase');
goog.require('vmbootstrap.Casts');

const MyListener = goog.require('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsListenersCase.MyListener$impl');
exports = MyListener;

