chrome.browserAction.setBadgeText({text: 'On'});
chrome.browserAction.setBadgeBackgroundColor({color: "#00FF00"});

var active = true;
var cancelRequest = true;

//====================================================================================

var callback = function(details) {
    console.log(details.url);
    if (details.url.indexOf("/ajax/mercury/change_read_status.php") != -1) {
        console.log("------ Read status ------");
        return {cancel: cancelRequest};
    }


    // if (details.url.indexOf("/ajax/messaging/typ.php") != -1) {
    //     console.log("------ Typing status ------");
    //     return {cancel: cancelRequest};
    // }

    // else if (details.url.indexOf("/ajax/chat/privacy/visibility.php") != -1) {
    //     console.log("------ Online status ------");
    //     console.log(details.requestBody.formData.visibility);
    //     details.requestBody.formData.visibility[0] = "1";
    //     console.log(details.requestBody.formData.visibility);
    // }
};
var filters = {urls: ["*://*.facebook.com/*"]};
var opt_extraInfoSpec = ["blocking", 'requestBody'];

chrome.webRequest.onBeforeRequest.addListener(callback, filters, opt_extraInfoSpec);

//====================================================================================

chrome.browserAction.onClicked.addListener(function(tab) {
		// No tabs or host permissions needed!
		// console.log('Turning ' + tab.url + ' red!' + active);
		
		// chrome.browserAction.setIcon({path: "icon1.png"});
		
		//chrome.browserAction.setBadgeText({text: '12'});

		// chrome.tabs.executeScript({
		// 	code: 'document.body.style.backgroundColor="red"'
		// });

		if (active){
			// It is active, so disable it
			chrome.browserAction.setBadgeText({text: 'Off'});
			chrome.browserAction.setBadgeBackgroundColor({color: "#FF0000"});
			active = false;
			cancelRequest = false;
		} else {
			// It is inactive, so enable it			
			chrome.browserAction.setBadgeText({text: 'On'});
			chrome.browserAction.setBadgeBackgroundColor({color: "#00FF00"});
			active = true;
			cancelRequest = true;
		}
	});










//====================================================================================
//
//chrome.webRequest.onBeforeSendHeaders.addListener(
//        function(details) {
//            if (details.url.indexOf("/ajax/chat/privacy/visibility.php") != -1) {
//                console.log("------ Online status ------");
//                
//                for (var i = 0; i < details.requestHeaders.length; ++i) {
//                    console.log(details.requestHeaders[i]);
//                }
//            }
//
////            for (var i = 0; i < details.requestHeaders.length; ++i) {
////                if (details.requestHeaders[i].name === 'User-Agent') {
////                    details.requestHeaders.splice(i, 1);
////                    break;
////                }
////            }
////            return {requestHeaders: details.requestHeaders};
//        },
//        {urls: ["*://*.facebook.com/*"]},
//["blocking", "requestHeaders",'requestBody']);










//========= DRAFTS ==========

//var filters = {urls: ["<all_urls>"]};

//chrome.webRequest.onBeforeRequest.addListener(
//        function(details) {
//            console.log(details.url);
//            console.info('test');
//            return {cancel: true};
//        },
//        {urls: ["*://*/ajax/mercury/change_read_status.php"]},
//        ["blocking"]
//        );