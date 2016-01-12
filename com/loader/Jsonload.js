/**
 *
 *
 *
 */

function Jsonload(){
    this._data = [];
    //this.dataLoadComplete = function(){}

}

//set
Jsonload.prototype.setUrl = function(_url , _callbackname){
    var self = this;
    $.ajax({
        url:_url,
        crossDomain: true,
        dataType: "jsonp",
        jsonpCallback: _callbackname ,
        success: function(xml) {
            self._data = xml
        },
        error: function() {},
        complete: function(){
            self.dataLoadComplete(self._data)
        }
    });
};

//override
Jsonload.prototype.dataLoadComplete = function(data){};





