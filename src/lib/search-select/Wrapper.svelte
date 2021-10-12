<script lang="ts">
	import { outside } from '$lib/utils/outside';

	export let visibility;

	const handleOutside = () => (visibility = 'hidden');
</script>

<div class="search-select-wrapper" use:outside on:close={handleOutside}>
	<slot />
</div>
