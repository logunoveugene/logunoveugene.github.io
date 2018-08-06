<template >
	 <a class="link" :class="title" href="#">
	 	<slot></slot>	
	 </a>
</template>

<script>
module.exports = {
    data: function() {
        return {
           
        }
    },
    props: ['title'],
}
</script>

<style>
.link{
    cursor: pointer;
}
.link--color-grey{
  color: #4E4E4E;
  transition: .2s;
}

.link--color-grey:hover{
  color: #FC5808;
  text-decoration: none;
}

.link--dropdown{
  position: relative;
  padding-right: 16px;
}
.link--dropdown:after{
  content: "\66";
  font-family: "mydns" !important;
  position: absolute;
  right: 0;    
}
</style>