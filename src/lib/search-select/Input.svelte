<script lang="ts">
	import { active } from './stores';

	export let value: string;

	const handleFocus = () => active.set(true);
</script>

<input
	aria-controls="dropdown-menu"
	aria-haspopup="true"
	bind:value
	class="input"
	placeholder="Search Model"
	on:focus={handleFocus}
/>
