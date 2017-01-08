/*
   Utilty function in creating a frost glass effect. Aligns 2 images
   so the blur effect can be applied. 
   __idImg: The images where the frost effect will be applied to
   __idParent: Normally the frost image will be inside an overlay div
        that will have some sort of gradient. 
   __idParent: The background image. 
*/
var imgAlign = function(__idImg, __idParent, __idParentImg){
    var _self = this;
    _self.private = { 
        img : null, 
        parent: null, 
        parentImg: null, 
        left : -1,  
        top : -1, 
        topParent : - 1, 
        idImg : __idImg, 
        idParent : __idParent, 
        idParentImg : __idParentImg, 
        init : function (){
            INNER.set_objects();
            INNER.resize();
          
        }, 


        set_handlers : function (){
            window.addEventListener("resize", INNER.resize);
          //  window.addEventListener("scroll", INNER.reposition);
        }, 


        get_position : function(){
         
           // INNER.left = INNER.img.getBoundingClientRect().left;
           // INNER.top = INNER.img.getBoundingClientRect().top;
        }, 
        resize : function(){
            INNER.get_position();
            INNER.set_width();
            INNER.set_height();
             INNER.left = INNER.img.getBoundingClientRect().left;
                INNER.top = INNER.img.getBoundingClientRect().top;
                 INNER.topParent = INNER.parent.getBoundingClientRect().top;
          //  INNER.set_left();
           // INNER.set_top();
             INNER.set_top_left();
        }, 

        reposition : function(){
            INNER.get_position();
           // INNER.set_left();
           // INNER.set_top();
           INNER.set_top_left();
        }, 
        set_width : function(){
            var _widthParent  = INNER.parent.offsetWidth;
            var _widthParentImg = INNER.parentImg.offsetWidth;
            INNER.img.style.width = _widthParentImg/_widthParent*100 + "%";
        }, 

        set_height : function(){
            var _heightParent  = INNER.parent.offsetHeight;
            var _heightParentImg = INNER.parentImg.offsetHeight;
            INNER.img.style.height = _heightParentImg/_heightParent*100 + "%";
        }, 

        set_left : function(){
            var _widthParent  = INNER.parent.offsetWidth;
            var _parentImgLeft = INNER.parentImg.getBoundingClientRect().left;

            var _imgLeft = INNER.left;
            var _x = (_parentImgLeft-_imgLeft )/_widthParent*100;
          // var _x = (_parentImgLeft-_imgLeft );
            var _y = _x.toString() + "%";;
            INNER.img.style.marginLeft = _x.toString() + "%";
            //INNER.img.style.transform = "translate3d("+_x.toString()+", 0, 0)";
        }, 
         set_top : function(){
           
            var _widthParent  = INNER.parent.offsetWidth;
            var _parentImgTop = INNER.parentImg.getBoundingClientRect().top;
            var _imgTop = INNER.top;
            var _x = (_parentImgTop-_imgTop )/_widthParent*100;
            // var _x = (_parentImgTop-_imgTop );///_widthParent*100;
            var _y = _x.toString() + "%";;
            INNER.img.style.marginTop = _x.toString() + "%";
           //  INNER.img.style.transform = "translate3d(0, "+_x.toString()+", 0, 0)";
           
        }, 

        set_top_left: function(){
              var _disp =INNER.parent.getBoundingClientRect().top - INNER.topParent;
            var _parentImgLeft = INNER.parentImg.getBoundingClientRect().left;

            var _imgLeft = INNER.left;
           var _x = (_parentImgLeft-_imgLeft );
            var _parentImgTop = INNER.parentImg.getBoundingClientRect().top;
            var _imgTop = INNER.top;
             var _y = (_parentImgTop-_imgTop-_disp );///_widthParent*100;

            //INNER.img.style.marginLeft = _x.toString() + "%";
            var z= "translate3d("+_x.toString()+", "+ _y.toString()+", 0)";
            INNER.img.style.transform = "translate3d("+_x.toString()+"px, "+ _y.toString()+"px, 0)";
        
        }, 

        set_objects : function(){
                INNER.img = document.getElementById(__idImg);
                INNER.parent = document.getElementById(__idParent);
                INNER.parentImg = document.getElementById(__idParentImg);
               
        }, 

    };
    var INNER = _self.private;
    _self.private.init();
    _self.private.set_handlers();

}















