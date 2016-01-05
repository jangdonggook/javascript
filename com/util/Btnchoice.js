/**
 *
 * @param btn Area
 * @param on off Area
 * @constructor
 */

function Btnchoice(selector, selectorPoint) {

    //public var
    this.isNum = -1;

    //private var
    var temp = -1;
    var imgType;
    var $selector = $(selector),
        $selectorPoint = $(selectorPoint);



    //setter
    this.setMenu = function(n){
        this.isNum = n;
        selectMenu(n);
    }
    //getter


    //private
    $selector.each(function(index){
        var $this = $(this)
        $this.click(function(){
            selectMenu(index)

        })
    })

    var selectMenu = function(n)
    {
        this.isNum = n;
        if(temp != -1){
            imgType = imgTypeFun(temp)
            var off =  $selectorPoint.eq(temp).attr("src").replace("_on."+imgType,"_off."+imgType)
            $selectorPoint.eq(temp).attr("src" , off)
        }
        imgType = imgTypeFun(n)
        var on = $selectorPoint.eq(n).attr("src").replace("_off."+imgType,"_on."+imgType)
        $selectorPoint.eq(n).attr("src" , on)
        temp = n
    }

    var imgTypeFun = function(n){
        if($selectorPoint.eq(n).attr('src').indexOf('.png') !== -1){
            return String("png")
        }else{
            return String("jpg")
        }
    }
}



