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
;/* exported Rectangle */
function Rectangle(width, height) {
    var w = Number(width), 
        h = Number(height); 

    this.area = function() {  
      this.area = function() {
          return w * h;    
          return roundFractional(w * h, 2);
      };     
    };


    this.perimeter = function() {    
      this.perimeter = function() {
          return 2 * (w + h);     
          return roundFractional(2 * (w + h), 2);  
      };    
    };

    function roundFractional(x, n) {
      return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);     
    }
}

function validate(data) {
  var result = {
        isOK: false,
        reason: ''            
  };

  if(data === '') {
        result.reason = '不能为空！';
        return result;    
  }

  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data)) {
        result.reason = '必须是数值';
        return result;   
  }

  if(Number(data) < 0) {
        result.reason = '必须大于零';
        return result;   
  }

  result.isOK = true;
  return result;
  } 
}
