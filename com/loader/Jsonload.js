/**
 *
 *
 *
 */

function Jsonload(){
    var aaa;
    this.data="9";
    this.test = "test var";

}

//set , get
Jsonload.prototype = {

    setUrl : function(_url){
        $.ajax({
            url:_url,
            crossDomain: true,
            dataType: "jsonp",
            jsonpCallback: "navi",
            success: function(xml) {

               console.debug("setUrl : tihs.data === > " , this.data);
               // this.data = xml.length;

            },
            error: function() {

            }
        });
    },
    getData : function(){
        //return this.data;
        console.debug("getData : this.data ===> " ,this.data)
        //console.debug("test : this.test ===> " ,this.test) // test var

        //return this.data;
    }



};





