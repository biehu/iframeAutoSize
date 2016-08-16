function iframeAutoSize(ifm) {
	if (ifm.contentDocument.body.getElementsByTagName('iframe').length) {
		 return;
	 }
	 var handleSet = function (f) {
		 f.setAttribute('height', 'iauto');
		 f.setAttribute('height', f.contentDocument.body.scrollHeight + 20);
	 };
	 var ifms, i;
	 var win = window;

	 handleSet(ifm);

	 while (win.parent !== win) {
		 ifms = win.parent.document.body.getElementsByTagName('iframe');
		 for (i = 0; i < ifms.length; i++) {
			 handleSet(ifms[i]);
		 }
		 win = win.parent;
	 }
}
