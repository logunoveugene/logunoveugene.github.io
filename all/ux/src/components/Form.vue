<template>
	<div class="ask-form">
		<div class="ask-list">
			<div class="ask-list__description">
				<div class="ask-list__description-title">
				Заполните анкету, где:
				</div>
				<div class="ask-list__description-item ask-list__description-item-min">
					<div class="ask-list__description-item-score">1</div>
					- совершенно НЕ согласен(-а)
				</div>
				<div class="ask-list__description-item ask-list__description-item-max">
					<div class="ask-list__description-item-score">5</div>
					- полностью согласен(-а)
				</div>
			</div>
			<div class="ask-list__ask-item">
				<div class="ask-item" v-for="(item,index) in askList" :key="index">
					<div class="ask-item__title">{{item.title}}</div>
					<select class="ask-item__input" v-model="answer[index]" >
						<option v-for="(option, index) in item.option" :key="index+'1'">{{option}}</option>
					</select>
				</div>
			</div>
		</div>
		<div class="ask-add">
			<div class="ask-add__title">Что НЕ понравилось или было неудобно?</div>
			<textarea class="ask-add__field" name="" id="" cols="30" rows="10" v-model="answer[5]"></textarea>
		</div>
		<div class="ask-submit" @click="issueReady">Отправить</div>
	</div>
</template>

<script>
	export default {
		name: 'Form',
		data: function() {
			return {
				askList: [
					{
						title:  'Сайтом просто пользоваться',
						option: [1, 2, 3, 4, 5],
					},
					{
						title:  'Понятный сайт, можно быстро разобраться',
						option: [1, 2, 3, 4, 5],
					},
					{
						title:  'Сайтом приятно пользоваться',
						option: [1, 2, 3, 4, 5],
					},
					{
						title:  'Чувствую себя уверенно, когда пользуюсь этим сайтом',
						option: [1, 2, 3, 4, 5],
					},
					{
						title:  'Сайт работает быстро, без сбоев',
						option: [1, 2, 3, 4, 5],
					},
				],
				answer:[]
			}
		},
		methods:    {
			issueReady() {
				let userAgent = window.navigator.userAgent;

				window.ga('send', 'event', 'Videos', '2020-02-27-test-ux', this.answer[0] +  ' , '+ this.answer[1] +  ' , '+ this.answer[2] +  ' , '+ this.answer[3] +  ' , '+ this.answer[4] +  ' , '+ this.answer[5] +' , '+  userAgent);
				window.ym(52268173, 'reachGoal', '2020-02-27-test-ux', {'2020-02-27-test-ux': this.answer[0] +  ' , '+ this.answer[1] +  ' , '+ this.answer[2] +  ' , '+ this.answer[3] +  ' , '+ this.answer[4] +  ' , '+ this.answer[5] +' , '+  userAgent });
				alert("спасибо за участие");
				},
		},
	}
</script>

<style lang="scss">
	.ask-form {

	}

	.ask-list {
		&__description {
			margin-bottom: 8px;
		}
	}

	.ask-item {
		margin-bottom: 12px;

		&__title {
			margin-bottom: 4px;
		}

		&__input {
			border:        1px solid #ddd;
			padding:       8px;
			border-radius: 8px;
		}
	}

	.ask-add {
		margin-bottom: 8px;
		&__title {
			margin-bottom: 4px;
		}

		&__field {
			border:        1px solid #ddd;
			padding:       8px;
			border-radius: 8px;
			width:         100%;
			max-width:     100%;
		}
	}

	.ask-list__description{
		padding: 16px 12px;
		background-color: #f2f2f2;
		border-radius: 8px;
		&-title{
			margin-bottom: 8px;
		}
		&-item{
			display: flex;
			margin-bottom: 4px;
			font-size: 14px;
			&-score{
background-color: #ffffff;
				width: 20px;
				height: 20px;
				border-radius: 50px;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 8px;
			}
		}
	}
	.ask-submit{
		background-color: #FC8507;
		color: #ffffff;
		padding:          10px 12px;
		border-radius:    8px;
		font-size:        16px;
		text-align: center;
		cursor: pointer;
		user-select: none;
		&:hover{
			opacity: .8;
		}
		&:active{
			opacity: .9;
		}
	}
</style>
