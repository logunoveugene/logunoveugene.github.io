<template>


	<div class="">
		<button
		v-for="tab in tabs"
		v-bind:key="tab"
		v-bind:class="['tab-button', { active: currentTab === tab }]"
		v-on:click="currentTab = tab"
		>{{ tab }}</button>

		<keep-alive>
			<component
			v-bind:is="currentTabComponent"
			class="tab"
			></component>
		</keep-alive>
	</div>
</template>

<script>




export default {
	components: {
		tabArchive:{ 
			template: '<div>Archive component</div>' 
		},
		tabPosts:{
	
				template: '<div>Archive component2</div>' 
			},

		},
		props: {
			post: {
				type: null
			}
		},
		computed: {
			currentTabComponent: function () {
				return 'tab-' + this.currentTab.toLowerCase()
			}
		},



	}
	</script>

	<style>

	</style>