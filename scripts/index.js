﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";
    var searchBox, listElement, searchBtn, progressBar, pending=0, errors=0;
    var allBhajans = p1.concat(p2).concat(p3);
    var filteredBhajans = allBhajans;
    var timeout;
    var evtdata;
    var cancel = false;
    var busy = false;

    var delayedSearch = (evt) => {
        cancel = true;
        clearTimeout(timeout);
        timeout = 0;
        evtdata = evt;
        //timeouts.push(setTimeout(onSearch, 1));
        var startSearch = () => {
            if(!busy){
                clearTimeout(timeout);
                onSearch();
            }
            else{ 
                timeout = setTimeout(startSearch, 250);
            }
        }

        startSearch();
    }

    var onSearch = async(evt) => {
        evt = evtdata;
        var searchKey = evt.target.value;
        cancel = false;
        busy = true;
        
        if (!searchKey || searchKey === '' || searchKey.length < 2) {
            filteredBhajans = allBhajans;
            updateList();
        }
        else if(searchKey === "vv"){
            validate();
        }
        else {
            filteredBhajans = [];

            filteredBhajans =  await  getFilterPromise( () => filterListUsingIndex(searchKey, allBhajans));
            if(!cancel && filteredBhajans.length == 0){
                filteredBhajans = await  getFilterPromise( () => filterList(searchKey, allBhajans));
            }
            if(!cancel){
                updateList();
            }
        }
        busy = false;
    }

    var getFilterPromise = (filterFunc) => {
        return new Promise(resolve => {
            setTimeout(async() => {
                if (cancel) {
                    resolve([]);
                } else {
                    resolve(filterFunc());
                }
            }, 1);
        });
    }

    var filterListUsingIndex = (searchKey, list) => {
        var fi, fa = [];
        if(searchKey.length > 2) {
            searchKey = searchKey.toLowerCase();
            fi = indexData[searchKey];
            if(fi === undefined) {
                searchKey = searchKey.replace(/aa/g, "a")
                    .replace(/ee/g, "i")
                    .replace(/oo/g, "u");
    
                fi = indexData[searchKey];
    
                if(fi === undefined) {
                    searchKey = searchKey.replace(/dhd/g, "ddh");
                    fi = indexData[searchKey];
    
                    if(fi === undefined) {
                        searchKey = searchKey.replace(/jny/g, "dny")
                            .replace(/gny/g, "dny")
                            .replace(/jhy/g, "dny");
                        fi = indexData[searchKey];
    
                        if(fi === undefined) {
                            searchKey = searchKey.replace(/ghy/g, "dny")
                                .replace(/gy/g, "dny");
                            fi = indexData[searchKey];
    
                            if(fi === undefined) {
                                searchKey = searchKey.replace(/amh/g, "ahm");
                                fi = indexData[searchKey];
                            }
                        }
                    }
                }
            }
        }
        if(fi !== undefined){
            fi.forEach(indx => {
                fa.push(allBhajans[indx]);
            });
        }

        return fa;
    }

    var filterList = (searchKey, list) => {
        
        var searchKeyLowerCase = searchKey.toLowerCase();
        if (searchKeyLowerCase.match(/[a-z]/i)) {
            // alphabet letters found
            var filteredList =  list.filter(bhajan => bhajan.eng.includes(searchKeyLowerCase) );
            //console.log("matched: " +  filteredList.length);
            if (filteredList.length == 0) {
                searchKeyLowerCase = searchKeyLowerCase.replace(/aa/g, "a")
                    .replace(/ee/g, "i")
                    .replace(/oo/g, "u");

                filteredList =  list.filter(bhajan => bhajan.eng.includes(searchKeyLowerCase));

                if (filteredList.length == 0) {
                    searchKeyLowerCase = searchKeyLowerCase.replace(/dhd/g, "ddh");
                    filteredList =  list.filter(bhajan => bhajan.eng.includes(searchKeyLowerCase));

                    if (filteredList.length == 0) {
                        searchKeyLowerCase = searchKeyLowerCase.replace(/jny/g, "dny")
                            .replace(/gny/g, "dny")
                            .replace(/jhy/g, "dny");
                        filteredList =  list.filter(bhajan => bhajan.eng.includes(searchKeyLowerCase));

                        if (filteredList.length == 0) {
                            searchKeyLowerCase = searchKeyLowerCase.replace(/ghy/g, "dny")
                                .replace(/gy/g, "dny");
                            filteredList =  list.filter(bhajan => bhajan.eng.includes(searchKeyLowerCase));

                            if (filteredList.length == 0) {
                                searchKeyLowerCase = searchKeyLowerCase.replace(/amh/g, "ahm");
                                filteredList =  list.filter(bhajan => bhajan.eng.includes(searchKeyLowerCase));
                            }
                        }
                    }
                }
            }
        }
        else {
            filteredList =  list.filter(bhajan => bhajan.hin.includes(searchKey));
        }
        return filteredList;
    }

    var updateList = () => {
     	const markup = `${filteredBhajans.map(bhajan => `<div class="item" file-id="${bhajan.dir}-${bhajan.id}"><a class="inner-item" href="./bhajan.html?b=${bhajan.dir}-${bhajan.id}"><span style="float: left;">${bhajan.hin}</span><span style="float: right;">${bhajan.dir} - ${bhajan.id.split('.')[0] }</span></a></div>`).join('')}`;
        listElement.innerHTML = markup;
    }

    var fetchFileContent = (fileName, listItem) => {
        fetch(`${fileName}`)
          .then(response => response.text())
          .then(data => {
            const specificText = "soon";  // Text to check for
            if (data.length < 100) {
              const icon = document.createElement('span');
              icon.className = "icn";
              icon.innerHTML = '&#x1F6A9;';  // Unicode for a flag icon or use any icon
              listItem.appendChild(icon);
              pending++;
            }
          })
          .catch(error => {
            //console.error('Error fetching the file:', error);
            const icon = document.createElement('span');
              icon.className = "icn";
              icon.innerHTML =  '&#9888;';  // Unicode for a flag icon or use any icon
              listItem.appendChild(icon);
              errors++;
          });
    }

    var validate =  () => {
        pending = 0;
        errors = 0;
        const items = document.querySelectorAll('#BhajanList > div');

        items.forEach(item => {
            const fileId = item.getAttribute('file-id');
            const fileName = "./bhajans/" + fileId.split("-")[0] + "/" + fileId.split("-")[1] + ".txt"
            fetchFileContent(fileName, item);
        });
        setTimeout(()=>{alert(`pending: ${pending}, errors: ${errors}`);}, 5000);
    }

    var onDeviceReady = () => {
        searchBox = document.getElementById('searchBox');
        progressBar = document.getElementById('progressBar');
        listElement = document.getElementById('BhajanList');
        searchBox.addEventListener('input', delayedSearch, false);
        updateList();
    };

    window.addEventListener('load', onDeviceReady, false);
} )();
