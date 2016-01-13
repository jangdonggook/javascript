/**
 * Created by jangdongkook on 16. 1. 6..
 */
//<Tag cName={this.props.tag.map} tName={this.props.tag.map.name}/>
//<Tag tagInfo={this.props.tag}/>


//mobile goods 1단
var Tag = React.createClass({

    render : function(){

        //console.debug("this.props -- > " , this.props)

        return <span className={this.props.class_name}>{this.props.name}</span>

    }
})




//mobile list loop
var TagList = React.createClass({
    render : function(){

        var list = this.props.thumbnailData.map(function(tagProps){
            console.debug("this -- > " , this)
            return <Tag {...tagProps} />
        })
        return <div>
        {list}
        </div>
    }
})



