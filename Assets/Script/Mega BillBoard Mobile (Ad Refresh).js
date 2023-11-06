<!-- Script Untuk refresh - START -->
<script type="text/javascript">
var frm = window.frameElement;
var div = frm.parentNode;

var elemScript = document.createElement('script');
elemScript.innerHTML = "googletag.cmd.push(function() {googletag.pubads().addEventListener('impressionViewable',function(event) {var slot=event.slot;var a = slot.getTargeting('pos').indexOf('mega_billboard');if(a>-1) {setTimeout(function() {googletag.pubads().refresh([slot]); document.getElementsByClassName('parallax-ad').innerHTML=''; console.log('refresh')}, 30000);}});});";

div.appendChild(elemScript);
</script>
<!-- Script Untuk refresh - END -->