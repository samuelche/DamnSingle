/**
 *
 */
var buyKittyInit = function (params) {
    console.log(params);
    fadeInOutLoad(buyKittyPageLoad, params);
};

/**
 * 猫详情页面初始加载内容
 */
var buyKittyPageLoad = function (params) {

    var obj = {
        "page": "kittyInit",
        "paramJson": params
    };
    leftToRightArray.push(obj);
    headerInit();
    removeHeaderLine(); //移除header的导航栏选中下划线
    $("#all-container").append(toBuyKittyText);
    destory();
    addMessage(params);
    clickThing(params);
}
//信息填充
var addMessage = function (data) {
    var kitty_id = data.auction.kitty_id;
    var kitty_name = "";
    if (!isNull(data.name)) {
        kitty_name = LText.Kitty;
    } else {
        kitty_name = data.name;
    }
    var current_price = parseFloat(data.auction.current_price * ethRate).toFixed(3);
    var imgurl = data.image_url;
    var ownnerName = decodeURIComponent(data.auction.seller.nickname);
    var color = data.color;
    $('#toBuyKitty-pay').html(current_price);
    $(".toBuyKitty-pay").html(current_price);
    $(".toBuyKitty-owner").html(ownnerName);
    $(".toBuyKitty-name").html(kitty_name);
    $(".toBuyKitty-id").html(kitty_id);
    $('.toBuyKitty-main .kittyPage-up-part').css("background-color", color);
    $('.toBuyKitty-main .kitty-data-img').css("backgroundImage", "url(" + imgurl + ")");
}

//点击事件
var clickThing = function (data) {
    $(".toBuyKitty-ok").click(function () {
        waitModel();
        buyKittyAjax(data.auction.kitty_id, 1); //点击购买按钮
    });
}