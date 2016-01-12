/**
 * Created by jangdongkook on 16. 1. 6..
 */
//<Tag cName={this.props.tag.map} tName={this.props.tag.map.name}/>
//<Tag tagInfo={this.props.tag}/>


//mobile goods 1단
var Thumbnail = React.createClass({

    render : function(){

        console.debug("tag -- > " , this.props.tag)

        return <li>
                <div className="finish">
                    <img src="../src/images/m_finish_col1.png" alt="판매종료" />
                </div>
                <span className="ptempl_tag_area">

                    <span className="tag_week">패션위크</span>
                    <span className="tag_dc">63%</span>
                    <span className="tag_special">옥션특가</span>
                    <span className="tag_dc_allkill">63%</span>
                    <span className="tag_allkill">옥션특가</span>
                    <span className="tag_smart">스마트배송</span>
                    <span className="tag_black">무료배송</span>
                    <span className="tag_black">즉시할인</span>



                </span>
                <div className="goods_img">
                    <a href={this.props.link}><img src={this.props.image_url} /></a>
                </div>
                <div className="goods_cnt">
                    <div className="goods_name">
                        <strong>{this.props.title}</strong>
                        <p>{this.props.sub_title}</p>
                    </div>
                    <div className="goods_price">
                        <span className="list_price">
                            <del>{this.props.orign_price}</del>원
                        </span>
                        <span className="deal_price">
                            <strong>{this.props.sale_pice}</strong>원
                        </span>
                    </div>
                </div>
            </li>
    }
})


//var Tag = React.createClass({
//        render : function(){
//            return <span className={this.props.className}>
//                    {this.props.name}
//                </span>
//        }
//    }
//)


//mobile list loop
var ThumbnailList = React.createClass({
    render : function(){
        var list = this.props.thumbnailData.map(function(thumbnailProps){
            return <Thumbnail {...thumbnailProps} />
        })
        return <div>
        {list}
        </div>
    }
})



