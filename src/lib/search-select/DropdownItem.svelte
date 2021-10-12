<script>
	import { createEventDispatcher } from 'svelte';

	export let item;
	export let selected;

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
	const keydown = (e) => {
		if (e.key === ' ' || e.key === 'Enter') {
			click();
		}
	};
</script>

<li
	class="item"
	value={item.id}
	tabIndex={0}
	on:click={click}
	on:keydown={keydown}
>
	{#if selected}
		<div class="chip" id={item.id}>
			<span class="chip-label">{item.name}</span>
			<span class="closebtn"> &times; </span>
		</div>
	{:else}
		{item.name}
	{/if}
</li>

<style>
	li {
		border-style: solid;
		border-width: 2px;
	}
	li:hover {
		cursor: pointer;
	}

	.chip {
		display: inline-block;
		height: 30px;
		width: 100px;
		font-size: 16px;
		line-height: 30px;
		border-radius: 25px;
		background-color: #f1f1f1;
		font-size: small;
		overflow: hidden;
	}

	.chip-label {
		width: 70px;
		overflow: hidden;
		display: inline-block;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.closebtn {
		padding-left: 5px;
		color: #888;
		font-weight: bold;
		float: right;
		margin-right: 5px;
		font-size: 20px;
		cursor: pointer;
	}

	.closebtn:hover {
		color: #000;
	}
</style>
