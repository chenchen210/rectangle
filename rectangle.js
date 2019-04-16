$(function() {
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area'),
        $widthValidation=$("#width-validation"),
        $heightValidation=$("#height-validation"),
        isPassValid=true;

    $height.focusout(function(){
        var res=valid($height.val());
        isPassValid=res.isOk;
        if(!res.isOk){
          $heightValidation.html('高度'+res.reason);
          $height.select();
        }else{
          $heightValidation.html('');
        }
    });
    $widthValidation.focusout(function(){
        var res=valid($width.val());
        isPassValid=res.isOk;
        if(!res.isOk){
          $widthValidation.html('宽度'+res.reason);
          $width.select();
        }else{
          $widthValidation.html('');
        }
    });
    
    $btnCal.click(function(){
        var w = $width.val(),
            h = $height.val();
        
        var r = new Rectangle(w,h)
        $perimeter.val(r.perimeter);
        $area.val(r.area);
    });

});
