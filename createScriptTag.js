let createScriptsTag = function(sourceUrl) {
			return new Promise((resolve,reject) => {
				var versionUpdate = (new Date()).getTime();  
				var script = document.createElement("script");  
				script.type = "text/javascript";  
				script.src = sourceUrl + "?v=" + versionUpdate;
				script.onload = (() => {
					resolve();
				});
				script.onerror = (() => {
					reject('cannot load script ' + sourceUrl);
				});
				document.body.appendChild(script); 
			});			
		};