//Adaptado de 'Make America Kittens Again', de Tom Royal

var doriaTeste = false;

if (doriaTeste){
	console.log('doria initiated');
	var doriaReplacements = 0;
}	


var blacklist = ["doria","dória"];


// pixos

var osPixos = {"pixo": [
    {"file": "1.jpg", "Credit": "Crsan", "URL": "http://www.flickr.com/photos/crsan/2571204498/", "type":"0"},
	{"file": "2.jpg", "Credit": "Abcrumley", "URL": "http://www.flickr.com/photos/crumley/160490011/", "type":"0"},
	{"file": "3.jpg", "Credit": "Woodchild2010", "URL": "http://www.flickr.com/photos/woodchild/5335939044/", "type":"0"},
	{"file": "4.jpg", "Credit": "Vancouverfilmschool", "URL": "http://www.flickr.com/photos/vancouverfilmschool/4838552777/", "type":"0"},
	{"file": "5.jpg", "Credit": "Jameswragg", "URL": "http://www.flickr.com/photos/jameswragg/4688532009/", "type":"0"},
	{"file": "6.jpg", "Credit": "Eva101", "URL": "http://www.flickr.com/photos/evapro/519752551/", "type":"0"},
	{"file": "7.jpg", "Credit": "Pinguino", "URL": "http://www.flickr.com/photos/pinguino/2655478691/", "type":"0"},
	{"file": "8.jpg", "Credit": "Daisyree Bakker", "URL": "http://www.flickr.com/photos/27875041@N02/4710868953/", "type":"0"},
    ]
};

function dorianow(osPixos){
	if (doriaTeste){
		console.log('doria processing blacklist is '+blacklist);
	}


	var pagepics=document.getElementsByTagName("img"), i=0, img;	
	while (img = pagepics[i++])
	{	
		
		if (img.hasAttribute('doriareplaced')){
		}
		else {
			var alttext = String(img.alt).toLowerCase();
			var imgsrc = String(img.src).toLowerCase();
			
			if (img.parentElement.nodeName != 'BODY'){
				var parenttag = img.parentElement.innerHTML.toLowerCase();
			}
			else {
				var parenttag = '';
			};
			
			var imgwidth = img.clientWidth;
			var imgheight = img.clientHeight;
	
			blacklist.forEach(function(blist) {	
				if ((alttext.indexOf(blist) != -1) || (imgsrc.indexOf(blist) != -1) || (parenttag.indexOf(blist) != -1)){
					
					img.setAttribute("doriareplaced", img.src);
					
					if (img.hasAttribute('srcset')){
						img.removeAttribute('srcset');	
					};

					if (img.parentElement.nodeName == 'PICTURE'){
						var theparent = img.parentNode;
						for(var child=theparent.firstChild; child!==null; child=child.nextSibling) {
						    if (child.nodeName == "SOURCE"){
							    child.removeAttribute('src');
							    child.removeAttribute('srcset');
						    };
						};
						
					};
					if (img.hasAttribute('data-src')){
						img.removeAttribute('data-src');	
					};
					if (img.hasAttribute('data-hi-res-src')){
						img.removeAttribute('data-hi-res-src');	
					};
					if (img.hasAttribute('data-low-res-src')){
						img.removeAttribute('data-low-res-src');	
					};
					
					var randk = Math.floor(Math.random() * 32) + 1
					
					img.src = chrome.runtime.getURL('/pixos/'+osPixos.pixo[randk].file+'');
					
					img.width = imgwidth;
					img.height = imgheight;
					
					if (osPixos.pixo[randk].type == 0){
						img.alt = 'Photo by '+osPixos.pixo[randk].Credit+' source '+osPixos.pixo[randk].URL+'';
					}
					else {
						img.alt = 'Photo by '+osPixos.pixo[randk].Credit+'';
					};
					doriaReplacements++;
				};
			});	
		};				
	}
	if (doriaTeste){
		console.log('doria processing complete, replaced '+doriaReplacements+' images');
	}	    
};


function undodoriaagora(){
	if (doriaTeste){
		console.log('undoing DORIA');
	}

	var pagepics=document.getElementsByTagName("img"), i=0, img;	
	while (img = pagepics[i++])
	{	
		if (img.hasAttribute('doriareplaced')){
			if (doriaTeste){
				console.log('replacing image');
			};
			img.src = img.getAttribute('doriareplaced');
			img.removeAttribute('doriareplaced');
		};	
	};
	
}


chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "undoDORIA") {
        undodoriaagora();
    };
   
});
