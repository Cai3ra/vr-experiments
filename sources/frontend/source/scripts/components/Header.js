class Header{
    constructor(){
        this.setListeners();
    }

    setListeners() {
        $(".header__box-list_item .header__link").bind("click", (e)=> this.gotoHomeSection(e));
        
    }

    gotoHomeSection(e){
        let bt = $(e.currentTarget);
        let idSection = bt.data("home-section");
        let top = $("#"+idSection).offset().top - $(".header__center").height();
        $(".header__box-list_item .header__link").removeClass("active");
        bt.addClass("active");
        $("body, html").animate({
            scrollTop: top
        }, 500);

    }
}

export default Header;