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
	{"file": "9.jpg", "Credit": "VictoriaPeckham", "URL": "http://www.flickr.com/photos/victoriapeckham/4000992556/", "type":"0"},
	{"file": "10.jpg", "Credit": "Peter Huys", "URL": "http://www.flickr.com/photos/darksidex/4568967536/", "type":"0"},
	{"file": "11.jpg", "Credit": "Lauren Nelson", "URL": "http://www.flickr.com/photos/lulieboo/3523637733/", "type":"0"},
	{"file": "12.jpg", "Credit": "Denizen24", "URL": "http://www.flickr.com/photos/39311243@N05/4273391516/", "type":"0"},
	{"file": "13.jpg", "Credit": "Pinguino", "URL": "http://www.flickr.com/photos/pinguino/2655477765/", "type":"0"},
	{"file": "14.jpg", "Credit": "Sikander", "URL": "http://www.flickr.com/photos/sikander/3941418808/", "type":"0"},
	{"file": "15.jpg", "Credit": "Snickclunk", "URL": "ttp://www.flickr.com/photos/snickclunk/4985501252/", "type":"0"},
	{"file": "16.jpg", "Credit": "JeffreyW", "URL": "http://www.flickr.com/photos/jeffreyww/4975375328/", "type":"0"},
	{"file": "17.jpg", "Credit": "Jeremy Bronson", "URL": "http://www.flickr.com/photos/jbrons/4872001139/", "type":"0"},
	{"file": "18.jpg", "Credit": "Threat to Democracy", "URL": "http://www.flickr.com/photos/16725630@N00/4811658578/", "type":"0"},
	{"file": "19.jpg", "Credit": "Eofstr", "URL": "http://www.flickr.com/photos/eofstr/4757862779/", "type":"0"},
	{"file": "20.jpg", "Credit": "DvdOuden", "URL": "http://www.flickr.com/photos/dvdouden/4733485066/", "type":"0"},
	{"file": "21.jpg", "Credit": "Cuttlefish", "URL": "http://www.flickr.com/photos/cuttlefish/4969726052/", "type":"0"},
	{"file": "22.jpg", "Credit": "JenniferC", "URL": "http://www.flickr.com/photos/29638108@N06/5104339654/", "type":"0"},
	{"file": "23.jpg", "Credit": "Jasontoff", "URL": "http://www.flickr.com/photos/jasontoff/5098333343/", "type":"0"},
	{"file": "24.jpg", "Credit": "FHgitarre", "URL": "http://www.flickr.com/photos/48356868@N06/5073501988/", "type":"0"},
	{"file": "25.jpg", "Credit": "Phil Hawksworth", "URL": "http://www.flickr.com/photos/philhawksworth/5037670666/", "type":"0"},
	{"file": "26.jpg", "Credit": "Phil Hawksworth", "URL": "http://www.flickr.com/photos/philhawksworth/5036995211/", "type":"0"},
	{"file": "27.jpg", "Credit": "FragmentFi", "URL": "http://www.flickr.com/photos/fragmentfi/5033666682/", "type":"0"},
	{"file": "28.jpg", "Credit": "SpookyPeanut", "URL": "http://www.flickr.com/photos/spookypeanut/5502011850/", "type":"0"},
	{"file": "29.jpg", "Credit": "Glennsajan", "URL": "http://www.flickr.com/photos/glennsajan/5485364346/", "type":"0"},
	{"file": "30.jpg", "Credit": "Woodchild2010", "URL": "http://www.flickr.com/photos/woodchild/5335939044/", "type":"0"},
	{"file": "31.jpg", "Credit": "Ollie Crafoord", "URL": "http://www.flickr.com/photos/lollaping/5277362546/", "type":"0"},
	{"file": "32.jpg", "Credit": "Mami Terai", "URL": "http://www.google.com", "type":"1"},
	{"file": "33.jpg", "Credit": "Sam Scheibel", "URL": "http://www.google.com", "type":"1"}
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