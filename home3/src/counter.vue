<template>
<div class="counter">
<div class="quantity d-flex">
	<div class="quantity-button quantity-down" v-on:click="down">‒</div>
	<input type="number" :value.number="amount" @input.number="change" >
	<div class="quantity-button quantity-up" v-on:click="up">+</div>
	<div class="ml-2 d-flex align-items-center">шт.</div>
</div>

</div>
</template>


<script>
import  counter from './counter.vue'
export default {
	name: 'counter',
	props: ['amount'],
	data: function() {
    	return {
    		amountnew: ''
    	}
  	},

	methods:{
	change(event){
		this.amountnew = event.target.value;
		this.amountnew = parseInt(this.amountnew);
		this.$emit('amountChanged', this.amountnew);

		},
	up: function() {
		this.amountnew = this.amount;
		this.amountnew +=1;
		this.$emit('amountChanged', this.amountnew);

	},
	down: function() {
		this.amountnew = this.amount;
		this.amountnew -=1;
		this.$emit('amountChanged', this.amountnew);
	}

}
}
</script>

<style lang="scss">

.quantity input {
    width: 30px;
    height: 30px;
    display: inline-block;
    padding: 0px;
    margin: 0;
    padding-left: 10px;
    border: 1px solid rgba(0,0,0,.15);
    font-size:1rem
}
.quantity-button {
    display:inline-block;
    cursor: pointer;
    width: 30px;
    height: 30px;
    text-align: center;
    color: #333;
    font-size: 1rem;
    user-select: none;
    border: 1px solid rgba(0,0,0,.15);
    padding-top:2px;
    background-color: white;
}
.quantity-up{
    border-left:0;
    border-radius: 0 .25rem .25rem 0;
}
.quantity-down{
    border-right:0;
    border-radius: .25rem 0 0 .25rem;
}
input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>
