<template>
  <div class="portraitImg">
    <figure class="snip">
      <g-image class="portraitImage" src="~/assets/portrait.png"/>
      <figcaption>
        <h2>Thomas <span> Ringling</span></h2>
      </figcaption>
    </figure>
  </div>
</template>

<script>



export default {
  mounted:function(){
    var options = {
      root: null,
      rootMargin: '-100px 0px 0px 0px',
      threshold: 1.0
    }

    // debugger
    
    var callback = function(entries, observer) { 
      entries.forEach(entry => {

        if(entry.isIntersecting)
        {
          entry.target.firstChild.className="snip"
        }
        else
        {
          entry.target.firstChild.className="snip hover"
        }
      });
    };
    var observer = new IntersectionObserver(callback, options);
    var target = document.querySelector('.portraitImg');
    observer.observe(target);
  }
}
</script>

<style>
/* Included color classes.. 
	.red 
	.blue 
	.yellow 
*/

figure.snip {
  position: relative;
  overflow: hidden;
  margin: 10px;
  margin-left: auto;
  margin-right: auto;
  min-width: 220px;
  max-width: 310px;
  max-height: 220px;
  width: 100%;
  background: #7994b8;
  color: #ffffff;
  text-align: center;
  /* border: 1px solid #7994b8; */
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.15); */
}

figure.snip * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

figure.snip img {
  max-width: 100%;
  position: relative;
  opacity: 0.4;
}

figure.snip figcaption {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

figure.snip h2 {
  position: absolute;
  left: 40px;
  right: 40px;
  display: inline-block;
  background: #000000;
  -webkit-transform: skew(-10deg) rotate(-10deg) translate(0, -50%);
  transform: skew(-10deg) rotate(-10deg) translate(0, -50%);
  padding: 12px 5px;
  margin: 0;
  top: 50%;
  text-transform: uppercase;
  font-weight: 400;
}

figure.snip h2 span {
  font-weight: 800;
}

figure.snip:before {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  content: '';
  background: #ffffff;
  position: absolute;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-transform: rotate(110deg) translateY(-50%);
  transform: rotate(110deg) translateY(-50%);
}

figure.snip a {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
}


figure.snip:hover img,
figure.snip.hover img {
  opacity: 1;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

figure.snip:hover h2,
figure.snip.hover h2 {
  -webkit-transform: skew(-10deg) rotate(-10deg) translate(-150%, -50%);
  transform: skew(-10deg) rotate(-10deg) translate(-150%, -50%);
}

figure.snip:hover:before,
figure.snip.hover:before {
  -webkit-transform: rotate(110deg) translateY(-150%);
  transform: rotate(110deg) translateY(-150%);
}



</style>
