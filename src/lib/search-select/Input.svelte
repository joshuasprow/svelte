<script lang="ts">
	import { active, search } from './stores';

	const handleFocus = () => active.set(true);
</script>

<input
	aria-controls="dropdown-menu"
	aria-haspopup="true"
	bind:value={$search}
	class="input"
	placeholder="Search Model"
	on:focus={handleFocus}
/>
