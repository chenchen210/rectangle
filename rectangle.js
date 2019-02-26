/**
 * add计算周长
 *
 * @param x-宽
 * @param y-高
 * @returns {undefined}
 */
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $bntCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area');

$bntCal.click(function(){
  var w=Number($width.val()),
      h=Number($height.val());

  var p=2*(w+h),
      a=w*h;
  $perimeter.val(p);
  $area.val(a);
})
})
