import { writable } from 'svelte/store';

export const active = writable(false);

export const search = writable('');
